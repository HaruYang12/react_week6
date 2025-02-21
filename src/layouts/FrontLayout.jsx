import { Outlet, NavLink } from "react-router-dom";

const routes = [
    { path: "/", name: "首頁" },
    { path: "/products", name: "產品列表" },
    { path: "/cart", name: "購物車" },
  ];


export default function FrontLayout () {

    const navLinK = routes.map((route) => (
        <li key={route.path} className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={route.path}>{route.name}</NavLink>
        </li>
    ));

    return (
    <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <ul className="navbar-nav flex-row gap-5 fs-5">
                    {navLinK}
                </ul>
            </div>
        </nav>
        <Outlet />
    </>
    )
}