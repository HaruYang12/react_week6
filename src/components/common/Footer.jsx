export default function Footer() {
    return (
      <>
        <div className="py-4 text-dark" style={{backgroundColor:"#f4eee9"}}>
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
              <p className="mb-0 fw-bold">訂閱我們，獲取最新消息！</p>
              <div className="input-group w-md-50 mt-md-0 mt-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder=""
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-dark rounded-0"
                    type="button"
                    id="search"
                  >
                    訂閱
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-coffee">
          <div className="container">
            {/* <div className="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
              <ul className="d-flex list-unstyled mb-0 h4">
                <li>
                  <a href="#" className="text-white mx-3">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white mx-3">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ms-3">
                    <i className="fab fa-line"></i>
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
              <div className="mb-md-0 mb-1">
                <h5>聯絡我們</h5>
                <p className="mb-0">07-123-4567</p>
                <p className="mb-0">silent_brew_daily@gmail.com</p>
              </div>
              <p className="mb-0">Copyright© SlientBrewDaily by HuiChun</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  