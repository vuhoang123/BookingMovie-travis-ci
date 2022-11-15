import { Col, Row } from "antd";
import React from "react";
import "./HomeIntroduce.css";

export default function HomeIntroduce() {
  return (
    <div className="homeIntroduce mt-5 content-center overflow-hidden" id="application">
      <div className="container ">
        <Row gutter={[20, 20]} className="flex justify-center items-center">
          <Col span={12} className="mt-32 wow animate__animated animate__fadeInLeft">
            <h1 className="text-4xl text-white  ">Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
            <p className="text-xl text-white mt-4">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
            </p>
            <button className="block py-4 px-4 rounded-md mt-4 btn_download text-xl font-semibold cursor-pointer">
              App miễn phí - Tải về ngay!
            </button>
            <span className="block text-white mt-4 text-lg font-semibold">
              CYBER BOOKINGMOVIE có hai phiên bản iOS & Android
            </span>
          </Col>
          <Col span={12} className="mt-20 wow animate__animated animate__fadeInRight">
            <div className="relative">
              <img className="w-64 ml-36" src={require("../../../assets/thumnail/mobileapp.png")} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
