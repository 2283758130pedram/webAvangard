import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Recruitment from "./components/Recruitment";
import Order from "./components/order";

function App() {
  const [numberPage, setNumberpage] = useState(3);
  const components = [<Home />, <Loading />, <Recruitment />, <Order />];

  return (
    <>
      <div className="navbar">
        <img src="../picture/Group 33178.png" className="light-mode" />
        <div className="menuBar">
          <button className="bnt-1">
            <span
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "16px",
              }}
            >
              مشاوره رایگان
            </span>
          </button>
          <img src="../picture/Group 33199.png" className="counseling-icon" />

          <p className="menu-text" style={{ marginLeft: "22%" }}>
            درباره ما
          </p>
          <p className="menu-text">همکاری</p>
          <p className="menu-text">دیجیتال مارکینگ</p>
          <p className="menu-text">نمونه کار</p>
          <p className="menu-text">ثبت سفارش</p>

          <p className="avan-text">وب اوانگارد</p>
          <img src="../picture/Group 33180.png" className="avangard-icon" />
        </div>
        <img src="../picture/Group 33179.png" className="translate-icon" />
      </div>
      {/* header of page */}
      {components[numberPage]}
      {/* foter page */}
      {/* absolotposition */}
      <div className="footer">
        <div className="footer-menu">
          <p className="text-menu-footer">درباره ما</p>
          <p className="text-menu-footer">همکاری</p>
          <p className="text-menu-footer">دیجیتال مارکتینگ</p>
          <p className="text-menu-footer">نمونه کار</p>
          <p className="text-menu-footer">ثبت سفارش</p>
        </div>
        <div className="Relationship">
          <img
            src="../picture/icon/footer-icon/x.svg"
            style={{ cursor: "pointer" }}
          />
          <img
            className="footer-icon"
            src="../picture/icon/footer-icon/whatsapp.svg"
          />
          <img
            className="footer-icon"
            src="../picture/icon/footer-icon/telegram.svg"
          />
          <img
            className="footer-icon"
            src="../picture/icon/footer-icon/instagram.svg"
          />
        </div>
        <div className="footer-logo">
          <div className="logo">
            <img src="../picture/icon/footer-icon/logo 2.png" />
            <img
              src="../picture/icon/footer-icon/kasbokar 1.png"
              style={{ marginLeft: "30px" }}
            />
          </div>
          <div className="about-footer">
            <img src="../picture/Group 33180.png" />
            <p style={{ marginTop: "35px" }}>
              0936 475 2437 avangard@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
