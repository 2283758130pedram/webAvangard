import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import "../css/signin.css";
import wa from "../../picture/loging and singup/webavangard.png";
import logo from "../../picture/loging and singup/logo2.png";

function Signin() {
  const methods = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://your-backend-api.com/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="webavangard">
          <img src={logo} alt="Logo" />
          <img src={wa} alt="webavangard" />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="input-box">
              <input
                type="text"
                placeholder="نام*"
                {...methods.register("name", {
                  required: "This field is required",
                })}
              />
              {methods.formState.errors.name && (
                <p>{methods.formState.errors.name.message}</p>
              )}
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="نام خانوادگی*"
                {...methods.register("lastName", {
                  required: "This field is required",
                })}
              />
              {methods.formState.errors.lastName && (
                <p>{methods.formState.errors.lastName.message}</p>
              )}
            </div>
            <div className="input-box">
              <input
                type="number"
                placeholder="شماره تلفن*"
                {...methods.register("num", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {methods.formState.errors.num && (
                <p>{methods.formState.errors.num.message}</p>
              )}
            </div>
            <button type="submit">ثبت نام</button>
            <p>
              با ورود به وب آوانگارد{" "}
              <span>
                <a href="">شرایط و قوانین</a>
              </span>{" "}
              استفاده از خدمات را می پذیرید.
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Signin;
