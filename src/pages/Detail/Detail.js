import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";

import "./circle.css";
import "./Detail.css";

import { Rate, Tabs } from "antd";
import moment from "moment";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import { confirmSignInToBooking } from "../../components/NotificationConfirm/NotificationConfirm";
import { getInfoFilmDetail } from "../../store/actions/MovieTheaterManagerActions";
import { USER_LOGIN } from "../../util/settings/config";

const { TabPane } = Tabs;

//random IDMB
Math.randomDec = function (min, max, decimals) {
  return (Math.random() * (max - min) + min).toFixed(decimals || 2);
};

export default function Detail(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const filmDetail = useSelector((state) => state.FilmManagerReducer.filmDetail);

  //   console.log("CHITIETFILM: ", { filmDetail });
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getInfoFilmDetail(id));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="mt-[64px] Detail"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <CustomCard
        className="min-h-screen"
        effectColor="#000" // required
        // color="#fff" // default color is white
        blur={15} // default blur value is 10px
        borderRadius={0}
      >
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-2">
              <img className="rounded-md block" src={filmDetail.hinhAnh} alt={filmDetail.tenPhim} />

              <div className="ml-4" style={{ margin: "auto", marginLeft: "10%" }}>
                <div className="font-semibold text-lg">
                  Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                </div>
                <h3 className="text-3xl mt-3 font-bold text-white">{filmDetail.tenPhim}</h3>
                <h3 className="text-xl mt-3 font-bold text-white">
                  120 phút - {Math.randomDec(4, 10, 2)} IMDb - 2D/Digitals
                </h3>
                <div className="flex justify-between">
                  <button className="bg-orange-600 block py-2 px-7 rounded-md film__card-btn mt-5">
                    <a
                      href="#scheduleFilmDetail"
                      className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer"
                    >
                      ĐẶT VÉ
                    </a>
                  </button>
                  <button
                    onClick={showModal}
                    className="bg-orange-600 block py-2 px-7 rounded-md film__card-btn mt-5"
                  >
                    <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
                      TRAILER
                    </a>
                  </button>

                  <div className="trailer">
                    <Modal
                      className="mt-10"
                      width={1000}
                      centered
                      title={<span className="text-xl">{"Trailer - " + filmDetail.tenPhim}</span>}
                      open={isModalOpen}
                      destroyOnClose={true}
                      onCancel={handleCancel}
                    >
                      <ReactPlayer
                        onCancel={handleCancel}
                        width={950}
                        height={500}
                        controls
                        url={filmDetail?.trailer}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 col-start-8 mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className={`c100 p${filmDetail.danhGia * 10} green`}>
                <span>{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="font-semibold text-xl mt-3">Đánh giá</div>
              <h2 className="text-2xl top-6">
                <Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: "#ea580c" }} />
              </h2>
            </div>
          </div>
        </div>

        <div
          className="container mt-20 px-5 py-1 rounded-md"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          id="scheduleFilmDetail"
        >
          <Tabs
            defaultActiveKey="1"
            centered
            style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
          >
            {/* Lịch chiếu */}
            <TabPane
              tab={<span style={{ fontSize: 22, fontWeight: "600" }}>Lịch chiếu</span>}
              key="1"
              style={{ minHeight: 300 }}
            >
              <div>
                <Tabs tabPosition="left">
                  {filmDetail.heThongRapChieu?.map((theaterSys, index) => {
                    return (
                      <TabPane
                        key={index}
                        tab={
                          <img
                            src={theaterSys.logo}
                            className="rounded-full w-16 drop-shadow-lg"
                            alt={theaterSys.tenHeThongRap}
                          />
                        }
                        style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
                      >
                        {/* CONTENT */}

                        {theaterSys.cumRapChieu?.map((cinema, index) => {
                          return (
                            <div key={index} className="mb-4">
                              <div className="flex flex-row">
                                <h3 className="text-3xl font-semibold">{cinema.tenCumRap}</h3>
                              </div>
                              <div className="scheduleInfo">
                                {cinema.lichChieuPhim?.slice(0, 12).map((scheduleFilm, index) => {
                                  return (
                                    <button
                                      onClick={() => {
                                        if (!localStorage.getItem(USER_LOGIN)) {
                                          return confirmSignInToBooking();
                                        } else {
                                          history.push(`/checkout/${scheduleFilm?.maLichChieu}`);
                                        }
                                      }}
                                      key={index}
                                      className="mt-4 cursor-pointer mr-3 px-5 py-1 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white inline-block text-lg border-orange-600 font-semibold border"
                                    >
                                      {" "}
                                      {moment(scheduleFilm.ngaychieuGioChieu).format("DD-MM-YYYY ~ LT")}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>

            {/* Thông tin */}
            <TabPane
              className="text-"
              tab={<span style={{ fontSize: 22, fontWeight: "600" }}>Thông tin</span>}
              key="2"
              style={{ minHeight: 300 }}
            >
              <div className="grid grid-cols-4 mx-20">
                <div className="col-span-1 text-xl text-black">
                  <p className="mb-3 font-semibold">Ngày công chiếu</p>
                  <p className="mb-3 font-semibold">Đạo diễn</p>
                  <p className="mb-3 font-semibold">Diễn viên</p>
                  <p className="mb-3 font-semibold">Thể loại</p>
                  <p className="mb-3 font-semibold">Định dạng</p>
                  <p className="mb-3 font-semibold">Quốc gia sản xuất</p>
                </div>
                <div className="col-span-1 text-xl text-black">
                  <p className="mb-3">{moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}</p>
                  <p className="mb-3">Dương Ngọc Hưng</p>
                  <p className="mb-3">Nguyễn Tuấn Anh</p>
                  <p className="mb-3">Action</p>
                  <p className="mb-3">2D/Digitals</p>
                  <p className="mb-3">Việt Nam</p>
                </div>
                <div className="col-span-2">
                  <h1 className="text-xl text-black font-semibold">Nội dung</h1>
                  <h3 className="text-lg text-black">{filmDetail.moTa}</h3>
                </div>
              </div>
            </TabPane>

            {/* Đánh giá */}
            <TabPane
              className="text-"
              tab={<span style={{ fontSize: 20, fontWeight: "600" }}>Đánh giá</span>}
              key="3"
              style={{ minHeight: 300 }}
            >
              <p className="text-4xl text-center">UPDATING...</p>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
