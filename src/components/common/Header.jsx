import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateCartData } from "../../redux/cartSlice";
import { useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const routes = [
  { path: "/", name: "首頁" },
  { path: "/products", name: "產品列表" },
  { path: "/cart", name: "購物車" },
  { path: "/login", name: "登入" }
];

export default function Header() {
    const carts = useSelector((state) => state.cart.carts);

    const dispatch = useDispatch();

    useEffect(() => {
      const getCart = async() => {
        try {
        const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);
  
        dispatch(updateCartData(res.data.data))
  
        } catch {
        alert('取得購物車列表失敗')
        }
      };
        getCart();
  
    }, [dispatch]);
  
      return (
          <div
            className="container d-flex flex-column"
          >
            <nav className="navbar navbar-expand-lg navbar-light">
              <img height={'150px'} src="https://i.imgur.com/GpaBbev.png" alt="Silent Brew Daily" />
              {/* <p className="fw-bolder">
               Silent Brew Daily
              </p> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  {routes.map((route) => (
                    <NavLink key={route.path} className="nav-item nav-link me-4 fw-bold" to={route.path}>
                    {route.name === '購物車' ? (
                      <div className="position-relative">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="position-absolute badge text-bg-success rounded-circle"
                        style={{
                          bottom: "12px",
                          left: "12px",
                        }}
                      >{carts?.length}</span>
                    </div>) : route.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
      )
    }


  
  