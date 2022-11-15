import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/UserManagerActions";
import * as yup from "yup";
import { loginError } from "../../components/NotificationConfirm/NotificationConfirm";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("*Trường này bắt buộc nhập!"),
  matKhau: yup.string().required("*Trường này bắt buộc nhập!").min(8, "Mật khẩu phải từ 8 đến 16 ký tự!"),
});

export default function Login(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      dispatch(loginAction(values, loginError));
      //   console.log(values);
    },
    validationSchema: schema,
  });

  return (
    <section className="bg-gray-50 login">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 animate__animated animate__backInDown ">
        <a href="/home" className="block items-center mb-3 text-2xl font-semibold text-gray-900 ">
          <img style={{ width: "30%", margin: "auto" }} src={require("../../assets/Login-Logo.png")} alt="logo" />
        </a>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
              Sign in to your account
            </h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                formik.handleSubmit(event);
              }}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Username
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="taiKhoan"
                  id="username"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white"
                  placeholder="Enter your Username"
                  required
                />
                {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                  <p className="text-white mt-1 text-left text-[14px] italic w-full">{formik.errors.taiKhoan}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  name="matKhau"
                  id="password"
                  placeholder="Enter your password"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white"
                  required
                />
                {formik.touched.matKhau && formik.errors.matKhau && (
                  <p className="text-white mt-1 text-left text-[14px] italic w-full">{formik.errors.matKhau}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <a href="/login" className="text-sm font-medium text-white hover:underline hover:text-orange-600">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-600"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <NavLink to="/register" className="font-medium text-white hover:underline hover:text-orange-600">
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
