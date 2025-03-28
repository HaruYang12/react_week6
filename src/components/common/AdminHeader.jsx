import { NavLink } from "react-router-dom";


const routes = [
  { path: "/goods", name: "產品管理" },
  { path: "/list", name: "訂單管理" },
  { path: "/coupon", name: "優惠券" }
];

export default function AdminHeader() {


    return (
        <div
          className="container d-flex flex-column"
        >
          <nav className="navbar navbar-expand-lg navbar-light">
            <h1>後台管理</h1>
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
                  <NavLink key={route.path} className="nav-item nav-link me-4" to={route.path}>
                  {route.name}</NavLink>
                ))}
              </div>
            </div>
          </nav>
        </div>
    )
  }

//   {route.name === '購物車' ? (
//     <div className="position-relative">
//     <i className="fas fa-shopping-cart"></i>
//     <span
//       className="position-absolute badge text-bg-success rounded-circle"
//       style={{
//         bottom: "12px",
//         left: "12px",
//       }}
//     >{carts?.length}</span>
//   </div>) : route.name
  