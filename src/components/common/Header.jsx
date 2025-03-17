import { NavLink } from "react-router-dom";

const routes = [
  { path: "/", name: "首頁" },
  { path: "/products", name: "產品列表" },
  { path: "/products/:id", name: "產品頁面" },
  { path: "/cart", name: "購物車" },
  { path: "/login", name: "登入" }
];

export default function Header() {
    return (
        <div
          className="container d-flex flex-column"
        >
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="./index.html">
              Navbar
            </a>
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
                <a className="nav-item nav-link me-4 active" href="./index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
                <NavLink className="nav-item nav-link me-4" to="/products">
                  Product
                </NavLink>
                <NavLink className="nav-item nav-link me-4" to="/detail">
                  Detail
                </NavLink>
                <a className="nav-item nav-link" href="./cart.html">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
    )
  }
  