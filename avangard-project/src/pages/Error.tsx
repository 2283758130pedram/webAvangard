import "../css/home.css";

const error = () => {
  return (
    <div className="error-page">
      <div style={{ marginLeft: "30px" }}>
        <img src="../../picture/404 error with a tired person-pana (1) 2.png" />
      </div>
      <div className="text-error">
        <img src="../picture/icon/Group 33178.png" className="error-icon" />
        <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
          متاستفانه صفحه مورد نظر شما یافت نشد.
        </h3>
      </div>
    </div>
  );
};
export default error;
