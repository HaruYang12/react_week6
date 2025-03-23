import { Link } from "react-router-dom";


export default function CheckoutSuccessPage() {
    return (
      <div className="container-fluid">
        <div className="position-relative d-flex">
          <div
            className="container d-flex flex-column"
            style={{ minHeight: "100vh" }}
          >
            <nav className="navbar navbar-expand-lg navbar-light px-0">
            </nav>
            <div className="row my-auto pb-7">
              <div className="col-md-4 d-flex flex-column offset-md-2">
                <div className="my-auto">
                  <h2>付款完成，一起喝杯咖啡吧！</h2>
                  <p>
                    商品會在確認訂單後儘速出貨，請耐心等候。
                    <br />如有疑問請洽客服專線
                  </p>
                  <Link to="/" className="btn btn-dark mt-2 px-5">
                    回到首頁
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-md-50 w-100 position-absolute opacity-1"
            style={{
              zIndex: -1,
              minHeight: "100vh",
              right: 0,
              backgroundImage:
                "url(https://images.pexels.com/photos/2616172/pexels-photo-2616172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundPosition: "center",
              backgroundSize: "contain", 
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        </div>
      </div>
    );
  }
  