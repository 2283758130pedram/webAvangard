import "../css/Recruitment.css";
const recruitment = () => {
  return (
    <div className="body">
      <div className="Recruitment-imag">
        <img
          src="../../picture/Group 2.png"
          style={{ marginTop: "100px", marginLeft: "200px" }}
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
          <div className="discription-file">
            <img
              src="../../picture/Group 33189.png"
              className="discription-img"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="cooperyion">درخواست همکاری</button>
        </div>
      </div>
    </div>
  );
};

export default recruitment;
