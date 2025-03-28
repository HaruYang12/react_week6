import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;



export default function CheckoutPaymentPage() {

    const paymentOptions = [
      { label: "現金支付", value: "cash" },
      { label: "ApplePay", value: "applePay" },
      { label: "Line Pay", value: "linePay" },
    ];

    const [selectedPayment, setSelectedPayment] = useState("cash");


    const [cart, setCart] = useState({});

    const getCart = async() => {
      try {
      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);

      setCart(res.data.data || { carts: [], total: 0, final_total: 0 });
      } catch {
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
                  <i className="fas fa-check-circle d-md-inline d-block text-center"></i>
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
            <h3 className="fw-bold mb-4 pt-3">選擇付款方式</h3>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-center pb-5 gx-0">
          <div className="col-md-4 gx-md-5">
            <div className="border p-4 mb-4">
              {cart.carts?.map((cartItem) => (
                <div className="d-flex mt-2" key={cartItem.product.id}>
                <img
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                  className="me-2"
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 fw-bold">{cartItem.product.title}</p>
                    <p className="mb-0">{cartItem.final_total.toLocaleString()}</p>
                  </div>
                  <p className="mb-0 fw-bold">數量：{cartItem.qty}</p>
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
                    <td className="text-end border-0 px-0 pt-0 pb-4">
                    {selectedPayment === 'cash' && '現金支付'}
                    {selectedPayment === 'applePay' && 'ApplePay'}
                    {selectedPayment === 'linePay' && 'Line Pay'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">總計</p>
                <p className="mb-0 h4 fw-bold">NT$ {cart.final_total?.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 gx-md-5">
            <div className="accordion" id="accordionExample">
            {paymentOptions.map((option) => (
              <div key={option.value} className="card rounded-0">
                <label
                  className={`card-header bg-white border-0 py-3 d-flex align-items-center ${
                    selectedPayment === option.value ? "" : "opacity-50"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option.value}
                    checked={selectedPayment === option.value}
                    onChange={() => setSelectedPayment(option.value)}
                    className="form-check-input me-2"
                  />
                  <span className="mb-0">{option.label}</span>
                </label>
                {option.value === "applePay" && selectedPayment === "applePay" && (
                  <div className="card-body bg-light ps-5 py-4">
                    <div className="mb-2">
                      <label htmlFor="cardNumber" className="text-muted mb-0">
                        信用卡卡號
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder="1234-5678-9012-3456"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
            <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <Link to="/checkout-form" className="text-dark mt-md-0 mt-3">
                <i className="fas fa-chevron-left me-2"></i> 上一步
              </Link>
              <Link
                to="/checkout-success"
                className="btn btn-dark py-3 px-7"
              >
                付款
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  