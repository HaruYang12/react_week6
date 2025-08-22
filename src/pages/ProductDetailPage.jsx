import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react"
import { useParams, Link } from "react-router-dom";
// import ReactLoading from 'react-loading';
import { useDispatch } from "react-redux";
import { updateCartData } from "../redux/cartSlice";

import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ProductDetailPage (){
    const [product, setProduct] = useState({});
    const [qtySelect, setQtySelect] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isScreenLoading, setIsScreenLoading] = useState(false);

    const [recommendProducts, setRecommendProducts] = useState([]);

    const { id: product_id } = useParams();

    const dispatch = useDispatch()
    const swiperRef = useRef(null);

    const getCart = useCallback(async() => {
      try {
      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);

      dispatch(updateCartData(res.data.data))

      } catch {
      alert('取得購物車列表失敗')
      }
   },[dispatch]);
    

  useEffect(() => {
    
      getCart();

      new Swiper(swiperRef.current, {
        modules: [Autoplay],
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
  }, [getCart]);

    useEffect(() => {
        const getProduct = async () => {
          setIsScreenLoading(true);
          try {
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/product/${product_id}`);
            setProduct(res.data.product);
          } catch {
            alert("取得產品失敗");
          }finally {
            setIsScreenLoading(false);
          }
        };
        const getRcommendProducts = async () => {
          const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products/all`);
          const allProducts = Object.values(res.data.products);
      
          
          const filtered = allProducts.filter(p => p.id !== product_id).slice(0, 6);
          setRecommendProducts(filtered);
        };

        getProduct();
        getRcommendProducts();
      }, [product_id]);
      
      const addCartItem = async (product_id, qty) => {
        setIsLoading(true);
        try {
            await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
            data: {
              product_id,
              qty: Number(qty) //qty需轉型成數字型別
            }
          })
          getCart();
        } catch {
          alert('加入購物車失敗')
        } finally {
          setIsLoading(false);
        }
      }  

        return (
          <div className="container-fluid">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={product.imageUrl}
                          className="d-block w-100"
                          alt={product.title}
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-white px-0 mb-0 py-3">
                      <li className="breadcrumb-item">
                        <Link className="text-muted" to="/">
                          首頁
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link className="text-muted" to="/products">
                          商品列表
                        </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        商品資訊
                      </li>
                    </ol>
                  </nav>
                  <h2 className="fw-bold h1 mb-1">{product.title}</h2>
                  <p className="mb-0 text-muted text-end">
                    <del>NT$ {product.origin_price?.toLocaleString()}</del>
                  </p>
                  <p className="h4 fw-bold text-end">NT$ {product.price}</p>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="input-group my-3 bg-light rounded">
                        <div className="input-group-prepend">
                          <button
                            onClick={() => setQtySelect(qtySelect - 1)}
                            disabled={qtySelect === 1}
                            className="btn btn-outline-dark border-0 py-2"
                            type="button"
                            id="button-addon1"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 text-center my-auto shadow-none bg-light"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                          value={qtySelect}
                          readOnly
                        />
                        <div className="input-group-append">
                          <button
                            onClick={() => setQtySelect(qtySelect + 1)}
                            className="btn btn-outline-dark border-0 py-2"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => addCartItem(product_id, qtySelect)}
                        type="button"
                        className="text-nowrap btn btn-dark w-100 py-2"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-3">
                  <p>商品介紹：</p>
                  <p>
                    {product.description}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>商品規格：</p>
                  <p className="text-muted">
                  {product.content}
                  </p>
                </div>
              </div>
              <h3 className="fw-bold">商品推薦</h3>
              <div ref={swiperRef} className="swiper-container mt-4 mb-5">
                <div className="swiper-wrapper">
                  {recommendProducts.map((product) => (
                    <div className="swiper-slide" key={product.id}>
                      <div className="card border-0 mb-4 position-relative position-relative">
                        <img
                          src={product.imageUrl}
                          className="card-img-top rounded-0"
                          alt={product.title}
                        />
                        <a href="#" className="text-dark"></a>
                        <div className="card-body p-0">
                          <h4 className="mb-0 mt-3">
                            <a href="#">{product.title}</a>
                          </h4>
                          <p className="card-text mb-0">
                          NT$ {product.price}
                            <span className="text-muted ">
                              <del>NT$ {product.origin_price}</del>
                            </span>
                          </p>
                          <p className="text-muted mt-3"></p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="swiper-slide">
                    <div className="card border-0 mb-4 position-relative position-relative">
                      <img
                        src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <a href="#" className="text-dark"></a>
                      <div className="card-body p-0">
                        <h4 className="mb-0 mt-3">
                          <a href="#">Lorem ipsum</a>
                        </h4>
                        <p className="card-text mb-0">
                          NT$1,080
                          <span className="text-muted ">
                            <del>NT$1,200</del>
                          </span>
                        </p>
                        <p className="text-muted mt-3"></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border-0 mb-4 position-relative position-relative">
                      <img
                        src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <a href="#" className="text-dark"></a>
                      <div className="card-body p-0">
                        <h4 className="mb-0 mt-3">
                          <a href="#">Lorem ipsum</a>
                        </h4>
                        <p className="card-text mb-0">
                          NT$1,080
                          <span className="text-muted ">
                            <del>NT$1,200</del>
                          </span>
                        </p>
                        <p className="text-muted mt-3"></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border-0 mb-4 position-relative position-relative">
                      <img
                        src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <a href="#" className="text-dark"></a>
                      <div className="card-body p-0">
                        <h4 className="mb-0 mt-3">
                          <a href="#">Lorem ipsum</a>
                        </h4>
                        <p className="card-text mb-0">
                          NT$1,080
                          <span className="text-muted ">
                            <del>NT$1,200</del>
                          </span>
                        </p>
                        <p className="text-muted mt-3"></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border-0 mb-4 position-relative position-relative">
                      <img
                        src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <a href="#" className="text-dark"></a>
                      <div className="card-body p-0">
                        <h4 className="mb-0 mt-3">
                          <a href="#">Lorem ipsum</a>
                        </h4>
                        <p className="card-text mb-0">
                          NT$1,080
                          <span className="text-muted ">
                            <del>NT$1,200</del>
                          </span>
                        </p>
                        <p className="text-muted mt-3"></p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      

    // return (
    // <>
    // <div className="container mt-5">
    //     <div className="row">
    //       <div className="col-6">
    //         <img className="img-fluid" src={product.imageUrl} alt={product.title} />
    //       </div>
    //       <div className="col-6">
    //         <div className="d-flex align-items-center gap-2">
    //           <h2>{product.title}</h2>
    //           <span className="badge text-bg-success">{product.category}</span>
    //         </div>
    //         <p className="mb-3">{product.description}</p>
    //         <p className="mb-3">{product.content}</p>
    //         <h5 className="mb-3">NT$ {product.price}</h5>
    //         <div className="input-group align-items-center w-75">
    //           <select
    //             value={qtySelect}
    //             onChange={(e) => setQtySelect(e.target.value)}
    //             id="qtySelect"
    //             className="form-select"
    //           >
    //             {Array.from({ length: 10 }).map((_, index) => (
    //               <option key={index} value={index + 1}>
    //                 {index + 1}
    //               </option>
    //             ))}
    //           </select>
    //           <button onClick={() => addCartItem(product_id, qtySelect)} type="button" className="btn btn-primary d-flex align-items-center gap-2" disabled={isLoading}>
    //             加入購物車
    //             {isLoading && (<ReactLoading
    //                 type={"spin"}
    //                 color={"#000"}
    //                 height={"1.5rem"}
    //                 width={"1.5rem"}
    //             />)}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    // {isScreenLoading && (
    //     <div
    //         className="d-flex justify-content-center align-items-center"
    //         style={{
    //         position: "fixed",
    //         inset: 0,
    //         backgroundColor: "rgba(255,255,255,0.3)",
    //         zIndex: 999,
    //         }}>
    //     <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
    //     </div>
    // )}
    // </>
    // )
}