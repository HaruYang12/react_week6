export default function HomePage() {

    return (
      <div className="container-fluid py-0">
        <div
          className="position-absolute"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage:
              "url(https://images.pexels.com/photos/2283595/pexels-photo-2283595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundPosition: "center center",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ height: "calc(100vh - 120px)"}}
        >
        <div className="container">
          <div className="row justify-content-center my-auto">
            <div className="col-md-8 text-center">
              <h1>靜泡日常，慢享咖啡時光</h1>
              <h3>在每一滴咖啡裡，找到片刻靜謐</h3>
              <p className="text-muted mb-0 fw-bold">
              沖泡咖啡不只是製作飲品，更是一種療癒的過程。
              在這裡，挑選最好的咖啡豆與沖煮器具，讓每一天都能靜心品味。
              </p>
            </div>
          </div>
          </div> 
        </div>
        <div
          style={{
            margin: 0,
            padding: 0,
            left: 0,
            right: 0,
            width: "100%",
            minHeight: "100vh",
            backgroundImage: "url('https://images.pexels.com/photos/4815952/pexels-photo-4815952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundPosition: "center",
            backgroundAttachment: "scroll", 
            position: "relative",
            backgroundSize: "cover"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.3)", // ✅ 控制透明度，0.1~1 越大越白
              pointerEvents: "none", // 🔹 避免影響點擊
            }}
          ></div>
          <div className="container-fluid py-5 position-relative">
            <div className="row justify-content-center align-items-center mx-0" style={{ minHeight: "100vh" }}>
              <div className="col-md-4 d-flex justify-content-center mt-4 mt-md-0">
                <div className="card border-0 mb-4 shadow" style={{ width: "100%", maxWidth: "350px" }}>
                  <img
                    src="https://images.pexels.com/photos/3737655/pexels-photo-3737655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4>嚴選咖啡豆</h4>
                    <div className="d-flex justify-content-between">
                      <p className="card-text text-muted mb-0">
                      精選產地咖啡豆，帶出最純粹的風味。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="card border-0 mb-4 shadow" style={{ width: "100%", maxWidth: "350px" }}>
                  <img
                    src="https://images.pexels.com/photos/1879322/pexels-photo-1879322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4>手沖器具</h4>
                    <div className="d-flex justify-content-between">
                      <p className="card-text text-muted mb-0">
                      專業級沖煮器具，讓每一杯都完美萃取。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="card border-0 mb-4 shadow" style={{ width: "100%", maxWidth: "350px" }}>
                  <img
                    src="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4>咖啡生活</h4>
                    <div className="d-flex justify-content-between">
                      <p className="card-text text-muted mb-0">
                      享受咖啡的美好，品味生活中的靜謐時刻。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-coffee mt-5">
          <div className="container">
            <div className="row justify-content-center py-5">
              <div className="col-sm-12 text-center text-light">
                <h3>一杯好咖啡，來自每個細節的堅持。</h3>
                <p className="my-4 fw-bold">
                從挑豆、烘焙到沖煮，每一滴咖啡都值得細細品味。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-7">
          <div className="row mx-0 p-4 bg-white shadow rounded homeCardColor">
            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="coffee beans"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 m-auto text-center">
              <h4 className="mt-4">嚴選豆源</h4>
              <p className="text-muted">
                與產地小農合作，保證新鮮直送。
              </p>
            </div>
          </div>
          <div className="container my-7 ">
            <div className="row flex-row-reverse justify-content-between mt-4 bg-white shadow rounded homeCardColor">
              <div className="col-md-6">
                <img
                  src="https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="bake"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 m-auto text-center">
                <h4 className="mt-4">精準烘焙</h4>
                <p className="text-muted">
                根據風味曲線調整每一批烘焙溫度 。
                </p>
              </div>
            </div>
          </div>
          <div className="row mx-0 p-4 bg-white shadow rounded homeCardColor">
            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/9409746/pexels-photo-9409746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="coffee beans"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 m-auto text-center">
              <h4 className="mt-4">專業推薦</h4>
              <p className="text-muted">
              依照你的口味推薦最合適的咖啡豆
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  