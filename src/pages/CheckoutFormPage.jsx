import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function CheckoutFormPage() {

    const [cart, setCart] = useState({});

    const getCart = async() => {
      try {
      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);

      setCart(res.data.data || { carts: [], total: 0, final_total: 0 });
      } catch (error) {
      alert('取得購物車列表失敗')
      }
    } 

    useEffect(() =>{

      getCart();

    },[])


    return (
      <div className="container">
        <div className="row justify-content-center gx-0">
          <div className="col-md-10">
            <nav className="navbar navbar-expand-lg navbar-light px-0">
              <ul className="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
                <li className="me-md-6 me-3 position-relative custom-step-line">
                  <i className="fas fa-dot-circle d-md-inline d-block text-center"></i>
                  <span className="text-nowrap">訂單確認</span>
                </li>
                <li className="me-md-6 me-3 position-relative custom-step-line">
                  <i className="fas fa-dot-circle d-md-inline d-block text-center"></i>
                  <span className="text-nowrap">付款方式</span>
                </li>
                <li>
                  <i className="fas fa-dot-circle d-md-inline d-block text-center"></i>
                  <span className="text-nowrap">結帳完成</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center gx-0">
          <div className="col-md-10">
            <h3 className="fw-bold mb-4 pt-3">填寫結帳資訊</h3>
          </div>
        </div>
        <div className="row justify-content-center gx-0">
          <div className="col-12 col-md-5">
            <div className="border p-4 mb-4">
              {cart.carts?.map((cartItem) => (
                <div className="d-flex mt-2 img-fluid">
                <img
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                  className="me-2 img-fluid"
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 fw-bold">{cartItem.product.title}</p>
                    <p className="mb-0">{cartItem.final_total.toLocaleString()}</p>
                  </div>
                  <p className="mb-0 fw-bold"> 數量：{cartItem.qty}</p>
                </div>
              </div>
              ))}
              <table className="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="border-0 px-0 pt-4 font-weight-normal"
                    >
                      小計
                    </th>
                    <td className="text-end border-0 px-0 pt-4">NT$ {cart.total?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="border-0 px-0 pt-0 pb-4 font-weight-normal"
                    >
                      付款方式
                    </th>
                    <td className="text-end border-0 px-0 pt-0 pb-4">待選擇</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">總計</p>
                <p className="mb-0 h4 fw-bold">NT$ {cart.final_total?.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <form>
              <p>聯絡方式</p>
              <div className="mb-0">
                <label htmlFor="ContactMail" className="text-muted mb-0">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="ContactMail"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                />
              </div>
              <p className="mt-4">收件地址</p>
              <div className="mb-2">
                <label htmlFor="ContactName" className="text-muted mb-0">
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ContactName"
                  placeholder="王小明"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="ContactPhone" className="text-muted mb-0">
                  手機號碼
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ContactPhone"
                  placeholder="0912345678"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="ContactMessage" className="text-muted mb-0">
                  留言
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="ContactMessage"
                  placeholder="非必填"
                ></textarea>
              </div>
            </form>
            <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <Link to="/cart" className="text-dark mt-md-0 mt-3">
                <i className="fas fa-chevron-left me-2"></i> 上一步
              </Link>
              <Link to="/checkout-payment" className="btn btn-dark py-3 px-7">
                選擇付款方式
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  