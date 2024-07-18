import "../css/home.css";
import { CiLight } from "react-icons/ci";
const home = () => {
  return (
    <div>
      <div className="body-part1">
        <img src="../picture/Group 33150.png" className="cloud1" />
        <img src="../picture/Ellipse 663.png" className="circle-icon" />
        <img src="../picture/image 3.png" className="computer-picture" />
        <img src="../picture/Group 33153.png" className="star-icon" />
        <h1 className="tg1-h1">با وب اوانگارد کسب و کار</h1>
        <h1 className="tg2-h1">! حرفه ای خودتو داشته باش</h1>
        <h4 className="tg3-h4">
          ورود مستقیم به دیجیتال مارکتینگ و بازار جهانی طراحی سایت
        </h4>
        <button className="sampel-btn">مشاهده نمونه کار</button>
        <button className="order-btn">ثبت سفارش</button>
      </div>
      <div className="part-2">
        <h1
          style={{ textAlign: "center", marginTop: "120px", color: "#2A2522" }}
        >
          ویژگی های ما
        </h1>
      </div>
      <div className="part3">
        <div className="tag-h3">
          <h3 style={{ textAlign: "right", fontSize: "28px" }}>
            مناسب ترین قیمت ها
          </h3>
          <p
            style={{ textAlign: "right", fontSize: "19px", marginTop: "70px" }}
          >
            هیچ گاه مناسب ترین قیمت به معنی ارزان ترین نخواهد بود، در آژانس ما
            مناسب ترین قیمت به این معنی است که بیشترین بهره‌وری با کمتین قیمت
            اجرا خواهد شد.
          </p>
        </div>
      </div>
      <div className="part-4">
        <h1 style={{ textAlign: "center", color: "#2A2522" }}>نمونه کار</h1>
      </div>
      <div className="part-5">
        <img src="../picture/Mask group (1).png" className="sampel-pic" />
        <img src="../picture/Mask group (2).png" className="sampel-pic" />
        <img src="../picture/Group 33090.png" className="sampel-pic" />
        <img src="../picture/Mask group.png" className="sampel-pic" />
      </div>
      <div className="part-6">
        <div className="part6-header">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#2A2522",
            }}
          >
            خدمات
          </h1>
          <p
            style={{ textAlign: "center", color: "#544548", fontSize: "20px" }}
          >
            استفاده از بروزترین زبان های برنامه نویسی دنیا
          </p>
        </div>
        <div className="div-icon">
          <img className="icon-program" src="../picture/icon/js.png" />
          <img className="icon-program" src="../picture/icon/html.png" />
          <img className="icon-program" src="../picture/icon/react.png" />
          <img className="icon-program" src="../picture/icon/php.png" />
          <img className="icon-program" src="../picture/icon/python.png" />
          <img className="icon-program" src="../picture/icon/bootstrap.png" />
        </div>
      </div>
      <div className="part-7">
        <div className="pic-part7">
          <img src="../picture/Group 33167.png" />
        </div>
        <div className="text-part7">
          <h1 style={{ color: "#2A2522" }}>چرا کد اوانگارد ؟</h1>
          <h1 style={{ color: "#000000" }}>_____________________</h1>
          <p style={{ fontSize: "19px", marginTop: "10px", color: "#544B45" }}>
            کی نتشاد اب و هدرک ادیپ جاور رایسب اهزور نیا نشکیلپا و تیاس نتشایشاب
            هتشاد دمآرد رپ و هتعاس ۲۴ راک و بسک کی دیناوتیم بوخ تیابوخ تیاس کی
            نتشاد یارب دراد بوخ تیاس کی هک تسا یسک رتمک ااب اجنیا ام اما دینک
            یدایز یاه هنیزه ای دینک بسک هبرجاه لاس دیاب ار امش تیاس هنیزه نیرتمک
            اب هبرجت زا یراب هلوک اب ات میتسه مینک یزادنا
          </p>
          <button className="order-btn2">سفارش دهید</button>
        </div>
      </div>
    </div>
  );
};

export default home;
