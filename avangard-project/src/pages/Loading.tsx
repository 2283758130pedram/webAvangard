import "../css/home.css";
const loading = () => {
  return (
    <div className="loading-page">
      <div className="reformance-loading">
        <img src="../picture/icon/Group 33178.png" className="loadin-icon" />
        <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
          با وب آوانگارد کسب و کار حرفه ای داشته باش
        </h3>
        <h5 style={{ fontSize: "21px", fontWeight: "bold" }}>
          loadign please waiting ...
        </h5>
      </div>
    </div>
  );
};

export default loading;
