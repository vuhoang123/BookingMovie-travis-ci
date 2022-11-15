import { SolutionOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUserBookingTicketsAction } from "../../store/actions/UserManagerActions";
import "./Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.UserManagerReducer);

  //   console.log("INFO", infoUser);

  useEffect(() => {
    dispatch(getInfoUserBookingTicketsAction());
  }, []);

  return (
    <div className="profile py-10 overflow-hidden">
      <div className="container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-4xl font-bold title-font text-white mb-12 text-center drop-shadow-xl shadow-black">
              MY PROFILE
            </h1>
            <div className="flex flex-wrap -m-4">
              <div className="px-2 h-96 md:w-2/6 w-full mb-3 animate__animated animate__backInLeft">
                <div className="h-full bg-gray-100 p-6 rounded overflow-y-auto">
                  {/* <h3 className="text-2xl font-semibold flex items-center">
                    <HeartOutlined className="" />
                    <span className="ml-2 block">INFO USER</span>
                  </h3> */}
                  <div className="flex justify-center items-center ">
                    <img
                      width={200}
                      src={require("../../assets/profile/ICON_PROFILE-02.png")}
                      alt="profile_Avatar"
                      className="block"
                    />
                  </div>
                  <p className="leading-relaxed font-semibold text-lg mt-3">User name: {infoUser.taiKhoan}</p>
                  <p className="leading-relaxed font-semibold text-lg">Full name: {infoUser.hoTen}</p>
                  <p className="leading-relaxed font-semibold text-lg">Phone: {infoUser.soDT}</p>
                  <p className="leading-relaxed font-semibold text-lg">Email: {infoUser.email}</p>
                  <p className="leading-relaxed font-semibold text-lg">
                    User type: {infoUser.loaiNguoiDung?.tenLoai}
                  </p>
                </div>
              </div>
              <div className="px-2 h-96 md:w-4/6 w-full animate__animated animate__backInRight">
                <div className="h-full bg-gray-100 p-6 rounded overflow-y-auto">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <SolutionOutlined />
                    <span className="ml-2 block">HISTORY BOOKING TICKETS</span>
                  </h3>

                  <Row gutter={[16, 16]}>
                    {infoUser.thongTinDatVe?.map((item, index) => {
                      return (
                        <Col key={index} span={12}>
                          <div className="flex items-center  mr-3">
                            <div className="flex items-center mt-5" key={index}>
                              <img
                                width={107}
                                height={107}
                                alt="testimonial"
                                src={item.hinhAnh}
                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                              />

                              <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">{item.tenPhim}</span>
                                <span className="text-gray-500 text-sm">
                                  Booking Date: {moment(item.ngayDat).format("DD-MM-YYYY")}
                                </span>
                              </span>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
