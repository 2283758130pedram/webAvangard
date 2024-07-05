import "../css/order.css";
const order = () => {
  return (
    <div className="body">
      <div className="Recruitment-imag">
        <img
          src="../../picture/Group.png"
          style={{ marginTop: "100px", marginLeft: "100px" }}
        />
      </div>
      <div className="Recruitment-info">
        <div>
          <input
            type="text"
            placeholder=" نام *"
            className="name-input"
            name="name"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder=" نام خانوادگی *"
            name="lastName"
            className="lastName-input"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder=" شماره تلفن *"
            className="phone-input"
            name=""
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <textarea className="discription-info">توضیحات تکمیلی : </textarea>
          </div>
          <div className="discription-chekBox">
            <h3>نوع سفارش :</h3>
            <div>
              <label htmlFor="personaleti" style={{ cursor: "pointer" }}>
                شخصی
              </label>
              <input type="checkbox" name="personaleti" />
            </div>
            <div>
              <label htmlFor="company" style={{ cursor: "pointer" }}>
                شرکت
              </label>
              <input
                type="checkbox"
                name="company"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="cooperyion">تکمیل سفارش</button>
        </div>
      </div>
    </div>
  );
};

export default order;
