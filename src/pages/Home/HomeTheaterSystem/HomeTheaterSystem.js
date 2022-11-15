import { Tabs } from "antd";
import moment from "moment";
import React, { Fragment, memo, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { history } from "../../../App";
import { confirmSignInToBooking } from "../../../components/NotificationConfirm/NotificationConfirm";
import { USER_LOGIN } from "../../../util/settings/config";
import "./HomeTheaterSystem.css";

const { TabPane } = Tabs;

function HomeTheaterSystem(props) {
  const [tabPosition, setTabPosition] = useState("left");
  //   console.log("MovieTheater", props.movieTheaterSystem);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const renderMovieTheaterSystem = () => {
    return props.movieTheaterSystem.map((movieTheaterSys, index) => {
      return (
        <Fragment key={index}>
          <TabPane key={index} tab={<img src={movieTheaterSys.logo} className="rounded-full w-16" alt="" />}>
            <Tabs
              tabPosition={tabPosition}
              style={{ maxHeight: 600, overflowY: "hidden", overflowX: "hidden" }}
            >
              {movieTheaterSys.lstCumRap.map((cinePlex, index) => {
                return (
                  <TabPane
                    style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
                    key={index}
                    tab={
                      <div className="flex justify-center items-center">
                        <div className="text-left ml-3">
                          <h4 className="font-semibold text-[16px] text-[#8bc541]">{cinePlex.tenCumRap}</h4>
                          {cinePlex.diaChi.length > 40 ? (
                            <p className="text-gray-600">{cinePlex.diaChi.slice(0, 40)}...</p>
                          ) : (
                            <p className="text-gray-600">{cinePlex.diaChi}</p>
                          )}
                          <p className="text-red-500">[Chi tiết]</p>
                        </div>
                      </div>
                    }
                  >
                    {/* Load film of cinePlex */}
                    {cinePlex.danhSachPhim?.map((film, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-4 flex items-center overscroll-y-auto">
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                history.push(`/detail/${film.maPhim}`);
                              }}
                            >
                              <img style={{ width: "50px" }} src={film.hinhAnh} alt={film.tenPhim} />
                            </div>

                            <div className="ml-4">
                              <div className="flex items-center">
                                <h3 className="font-semibold text-[18px] text-gray-800">{film.tenPhim}</h3>
                                {film.hot === true ? (
                                  <span className="bg-red-500 text-white font-semibold rounded-sm ml-3 px-2">
                                    Hot
                                  </span>
                                ) : (
                                  <span>{""}</span>
                                )}
                              </div>
                              {film.dangChieu === true ? (
                                <div className="bg-gray-800 text-white text-[12px] rounded-sm px-2 inline-block opacity-90">
                                  Đang chiếu{" "}
                                </div>
                              ) : film.sapChieu === true ? (
                                <div className="bg-gray-800 text-white text-[12px] rounded-sm px-2 inline-block opacity-40">
                                  Sắp chiếu{" "}
                                </div>
                              ) : (
                                <></>
                              )}

                              <div className="grid grid-cols-3 gap-3 mt-3">
                                {film.lstLichChieuTheoPhim?.slice(0, 12).map((movieSchedule, index) => {
                                  return (
                                    <button
                                      onClick={() => {
                                        if (!localStorage.getItem(USER_LOGIN)) {
                                          return confirmSignInToBooking();
                                        } else {
                                          history.push(`/checkout/${movieSchedule.maLichChieu}`);
                                        }
                                      }}
                                      className="hover:text-orange-600 font-semibold text-[#108F3E] text-[14px] bg-gray-100 px-2 py-2 border rounded-md text-center"
                                      key={index}
                                    >
                                      {moment(movieSchedule.ngayChieuGioChieu).format("DD-MM-YYYY ~ LT")}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        </Fragment>
      );
    });
  };

  return (
    <>
      {/* <div className="mb-5" id="featuredMovies">
        <h1 className="text-3xl font-semibold text-center text-black opacity-70"></h1>
      </div> */}
      <div
        className="rounded-md mt-20 px-0 container homeTheaterSystem wow animate__animated animate__zoomIn"
        id="theaterSystem"
      >
        <Tabs tabPosition={tabPosition}>{renderMovieTheaterSystem()}</Tabs>
      </div>
    </>
  );
}

export default memo(HomeTheaterSystem);
