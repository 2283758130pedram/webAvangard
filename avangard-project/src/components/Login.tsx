import "../css/login.css";
import wa from "../../picture/loging and singup/webavangard.png";
import logo from "../../picture/loging and singup/logo2.png";

function logingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="webavangard">
          <img src={logo} alt="Logo" />
          <img src={wa} alt="webavangard" />
        </div>
        <form>
          <div className="input-box">
            <input type="" name="num" placeholder="شماره تلفن*" required />
          </div>
          <button>ورود</button>
          <p>
            با ورود به وب آوانگارد{" "}
            <span>
              <a>شرایط و قوانین</a>
            </span>{" "}
            استفاده از خدمات را می پذیرید.
          </p>
        </form>
      </div>
    </div>
  );
}

export default logingPage;
