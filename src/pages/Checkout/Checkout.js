import { CloseOutlined, DownOutlined, ExportOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import _ from "lodash";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingTicketsAction, getDetailTicketRoomAction } from "../../store/actions/BookingManagerActions";
import { BOOKING_TICKET, SWITCH_TAB_ACTIVE } from "../../store/actions/types/BookingManagerType";
import { InfoBooking } from "../../_core/models/InfoBooking";
import "./Checkout.css";
import style from "./trapezoid.module.css";

import { Dropdown, Menu, Space, Tabs } from "antd";
import moment from "moment";
import { history } from "../../App";
import { bookingError, bookingSuccess } from "../../components/NotificationConfirm/NotificationConfirm";
import { getInfoUserBookingTicketsAction } from "../../store/actions/UserManagerActions";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";

const { TabPane } = Tabs;

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  const { detailTicketRoom, listSeatBooking } = useSelector((state) => state.BookingManagerReducer);

  // Covert stt String to Number
  const newList = listSeatBooking.map((item) => {
    if (item.stt < 10) {
      return (item.stt = "0" + Number(item.stt));
    } else {
      return (item.stt = Number(item.stt));
    }
  });

  //   console.log("typeOf", typeof newList[0].stt);

  //   console.log(userLogin);
  //   console.log(listSeatBooking);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailTicketRoomAction(props.match.params.id));
  }, []);

  const { thongTinPhim, danhSachGhe } = detailTicketRoom;

  const renderSeats = () => {
    return danhSachGhe?.map((seat, index) => {
      let seatVip = seat.loaiGhe === "Vip" ? "seat__vip" : "";
      let seatBooked = seat.daDat === true ? "seat__booked" : "";
      let seatSelected = "";

      let indexSeatBooking = listSeatBooking.findIndex((seatBooking) => seatBooking.maGhe === seat.maGhe);

      if (indexSeatBooking !== -1) {
        seatSelected = "seat__selected";
      }

      let mySeatBooked = "";

      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        mySeatBooked = "my__seat--booked";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: BOOKING_TICKET,
                selectedSeat: seat,
              });
            }}
            disabled={seat.daDat}
            className={`seat font-semibold ${seatVip} ${seatBooked} 
            ${seatSelected} ${mySeatBooked}`}
          >
            {seat.daDat ? (
              mySeatBooked !== "" ? (
                <UserOutlined className="text-xl text-white" />
              ) : (
                <CloseOutlined className="text-2xl text-white" />
              )
            ) : (
              seat.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="checkout">
      <div className="px-16 min-h-screen py-12 animate__animated animate__backInDown">
        <div className="grid grid-cols-12 checkout__content rounded-md">
          <div className="col-span-8">
            {/* NOTE */}
            <div className="mt-3 flex justify-center">
              <table className="divide-y divide-gray-100 w-9/12">
                <thead className="">
                  <tr className="flex justify-between items-center py-1">
                    <th>
                      <div className="flex">
                        <button className="mini__seat text-center mr-2"></button>
                        <span>Ghế trống</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__selected mr-2"></button>
                        <span>Ghế đang đặt</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__booked text-center mr-2">
                          <CloseOutlined className="text-md text-white" />
                        </button>
                        <span>Ghế đã đặt</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__vip text-center mr-2"></button>
                        <span>Ghế vip</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat my__seat--booked text-center mr-2">
                          <UserOutlined className="text-md text-white" />
                        </button>
                        <span>Ghế của tôi</span>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <div className={style.trapezoid}>
                <h3 className="text-lg text-center font-semibold text-white my-1">MÀN HÌNH</h3>
              </div>
            </div>
            <div className="text-center ml-4">
              <div className="listSeat mt-10 mx-auto">{renderSeats()}</div>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-black text-center text-2xl mt-2 mb-2 font-semibold">
              Tổng tiền:{" "}
              {listSeatBooking
                ?.reduce((total, seatSelected, index) => {
                  return (total += seatSelected.giaVe);
                }, 0)
                .toLocaleString()}
              đ
            </h3>
            <hr />

            <div className="my-2">
              <h3 className="text-2xl text-orange-700 font-semibold mb-2">{thongTinPhim?.tenPhim}</h3>
              <p className="my-1 text-lg font-semibold"> {thongTinPhim?.tenCumRap}</p>
              <p className="text-lg font-semibold">
                Thời gian: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} ({thongTinPhim?.tenRap})
              </p>
              <p className="my-1 text-lg font-semibold">Địa chỉ: {thongTinPhim?.diaChi}</p>
            </div>
            <hr />

            <div className="flex flex-row justify-between my-3">
              <div className="">
                <span className="text-orange-600 text-xl font-semibold block">
                  Ghế chọn:
                  {_.orderBy(listSeatBooking, ["stt"], ["asc"])?.map((seatBooking, index) => {
                    return (
                      <button
                        key={index}
                        disabled={true}
                        className="ml-2 w-10 h-7 leading-7 mb-2 bg-orange-600 text-white rounded-md animate__animated animate__bounceIn"
                      >
                        {seatBooking.stt}
                      </button>
                    );
                  })}
                </span>
              </div>
              <div className="">
                <span className="text-black text-xl font-semibold">
                  {listSeatBooking
                    ?.reduce((total, seatSelected, index) => {
                      return (total += seatSelected.giaVe);
                    }, 0)
                    .toLocaleString()}
                  đ
                </span>
              </div>
            </div>
            <hr />

            <div className="my-2">
              <span className="text-gray-700 text-lg font-semibold">E-Mail</span>
              <p className="text-[18px] font-medium ">{userLogin.email}</p>
            </div>
            <hr />

            <div className="my-2">
              <span className="text-gray-700 text-lg font-semibold">Số điện thoại</span>
              <p className="text-[18px] font-medium ">{userLogin.soDT}</p>
            </div>
            <hr />

            <div className="my-2 flex flex-row justify-between">
              <div className="inputTicket">
                <span className="text-gray-700 font-semibold text-md block">Mã giảm giá</span>
                <input
                  className="text-[14px] font-semibold text-orange-700 mt-3 ring-1 ring-gray-400 focus:outline-none uppercase focus:ring-orange-600 rounded-sm px-4 py-2"
                  placeholder="Nhập tại đây...."
                />
              </div>
              <div className="ticket">
                <img
                  className="img-ticket block drop-shadow-lg"
                  src={require("../../assets/ticket-movie.png")}
                  alt="ticket-movie"
                />
              </div>
            </div>
            <div className="mb-3">
              <span className="text-[14px] text-red-600 font-semibold text-center block">
                *Lưu ý: Mã giảm giá chỉ áp cho lần đầu đặt vé tại CyberBooking
              </span>
            </div>

            <hr />

            <div className="mt-5">
              <button
                onClick={() => {
                  const infoBooking = new InfoBooking();
                  infoBooking.maLichChieu = props.match.params.id;
                  infoBooking.danhSachVe = listSeatBooking;

                  //   console.log(infoBooking);
                  //   console.log(listSeatBooking);

                  if (listSeatBooking.length === 0) {
                    bookingError();
                    return;
                  }
                  //   if (dispatch(bookingTicketsAction(infoBooking))) {
                  //     success();
                  //   }

                  bookingSuccess();

                  setTimeout(() => {
                    dispatch(bookingTicketsAction(infoBooking));
                  }, 5000);
                }}
                className="bg-orange-600 block py-3 px-16 rounded-md film__card-btn mt-5 mx-auto"
              >
                <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
                  ĐẶT VÉ
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultBooking(props) {
  const { infoUser } = useSelector((state) => state.UserManagerReducer);

  const dispatch = useDispatch();

  //   console.log({ infoUser });

  useEffect(() => {
    dispatch(getInfoUserBookingTicketsAction());
  }, []);

  const renderInfoBookingTicket = () => {
    return infoUser.thongTinDatVe?.map((info, index) => {
      const seatsInfo = _.first(info.danhSachGhe);
      return (
        <div key={index} className="py-4 flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
            <img className="w-24 h-30 marker:first-line:object-cover" src={info.hinhAnh} alt={info.tenPhim} />
          </div>
          <div className="md:flex-grow">
            <div className="mb-1">
              <h2 className="text-2xl font-medium text-gray-900 title-font">{info.tenPhim}</h2>
              <p className="">(Thời lượng phim: {info.thoiLuongPhim} phút)</p>
            </div>

            <div>
              <span className="text-lg text-gray-800">
                Ngày đặt: {moment(info.ngayDat).format("hh:mm A - DD-MM-YYYY")}
              </span>
              <p className="text-lg text-gray-800">
                Địa điểm: {seatsInfo.tenHeThongRap} | {seatsInfo.tenCumRap}
              </p>
            </div>

            <div>
              <span className="text-lg text-gray-800">
                Ghế số:{" "}
                {_.orderBy(info.danhSachGhe, ["maGhe"], ["asc"])?.map((seat, index) => {
                  return (
                    <span
                      key={index}
                      disabled={true}
                      className="ml-2 mb-1 w-10 h-7 leading-7 bg-orange-600 text-white text-lg rounded-md text-center inline-block"
                    >
                      {seat.tenGhe}
                    </span>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="checkout">
      <div className="px-16 min-h-screen py-12 animate__animated animate__backInDown">
        <div className="grid grid-cols-12 checkout__content rounded-md">
          <div className="col-span-12">
            {/* NOTE */}
            <div>
              <section className="text-gray-600 body-font overflow-hidden">
                <div className="px-5 py-2 mx-auto">
                  {/* THONG TIN */}
                  <div className="divide-y-2 divide-gray-100">
                    <div className="text-center">
                      <h3 className="text-3xl font-semibold py-1">
                        Thông tin đặt vé của <span className="text-orange-700">{infoUser.hoTen}</span>
                      </h3>
                      <span className="py-1 text-gray-900 font-semibold text-lg block">
                        Xem lại thông tin địa điểm và thời gian trước khi dẫn đi xem phim nha bạn :)) !
                      </span>
                    </div>
                    {renderInfoBookingTicket()}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckoutPage = (props) => {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);

  const menu = (
    <Menu
      onClick={() => {}}
      items={[
        {
          label: (
            <span
              onClick={() => {
                history.push("/profile");
              }}
              className="font-semibold block"
            >
              Profile
            </span>
          ),
          key: "1",
          //   icon: <UserOutlined />,
        },
        {
          label: (
            <span
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push("/home");
                window.location.reload();
              }}
              className="font-semibold block"
            >
              Log out
            </span>
          ),
          key: "2",
          icon: <ExportOutlined />,
        },
      ]}
    />
  );

  const OperationsSlot = {
    left: (
      <a
        href="/home"
        className="hover:text-orange-600 font-semibold text-3xl text-white rounded-sm backToHomeBtn"
        // onClick={() => {
        //   history.push("/");
        // }}
      >
        <span className="block pb-2">
          <HomeOutlined className="mr-4" />
        </span>
      </a>
    ),
    right: (
      <Dropdown overlay={menu}>
        <Space>
          <DownOutlined />
          <button className="px-2 font-semibold text-lg text-white rounded-sm">
            <span className="flex justify-items-center items-center">
              <UserOutlined className="mr-2" />
              <span>{userLogin.taiKhoan}</span>
            </span>
          </button>
        </Space>
      </Dropdown>
    ),
  };

  // Dropdown Info Account Booking Page

  const { tabActive } = useSelector((state) => state.BookingManagerReducer);
  const dispatch = useDispatch();
  return (
    <div className="tbl_checkout">
      <Tabs
        tabBarExtraContent={OperationsSlot}
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: SWITCH_TAB_ACTIVE,
            number: key,
          });
        }}
      >
        {/* TAB 1 */}
        <TabPane tab={<span className="text-lg text-white font-semibold">01 CHỌN GHẾ & THANH TOÁN</span>} key="1">
          <Checkout {...props} />
        </TabPane>
        {/* TAB 2 */}
        <TabPane tab={<span className="text-lg text-white font-semibold">02 KẾT QUẢ ĐẶT VÉ</span>} key="2">
          <ResultBooking {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CheckoutPage;
