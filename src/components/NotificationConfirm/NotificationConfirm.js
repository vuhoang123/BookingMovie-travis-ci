import { Modal, Statistic } from "antd";
import React from "react";
import { Redirect } from "react-router-dom";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";

const { Countdown } = Statistic;
const { confirm } = Modal;

// Modal.info
// Modal.success
// Modal.error
// Modal.warning

export const bookingSuccess = () => {
  Modal.success({
    title: "ĐẶT VÉ THÀNH CÔNG!",
    content: (
      <h3 className="text-lg text-orange-600">
        HỆ THỐNG SẼ TỰ ĐỘNG CHUYỂN SANG TRANG KẾT QUẢ ĐẶT VÉ SAU:{" "}
        <Countdown onFinish={Date.now() + 5 * 1000} value={Date.now() + 5 * 1000} format="mm:ss" />
      </h3>
    ),
  });
};

export const bookingError = () => {
  Modal.warning({
    title: "ĐẶT VÉ KHÔNG THÀNH CÔNG!",
    content: "VUI LÒNG CHỌN GHẾ ĐỂ TIẾN HÀNH ĐẶT VÉ",
    onOk() {},
  });
};

export const registerSuccess = () => {
  Modal.success({
    title: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG!",
    content: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG",
    onOk() {
      history.push("/login");
    },
  });
};

export const registerError = (noti) => {
  Modal.error({
    title: "ĐĂNG KÝ TÀI KHOẢN KHÔNG THÀNH CÔNG!",
    content: noti,
    onOk() {},
  });
};

export const loginError = (noti) => {
  Modal.error({
    title: "ĐĂNG NHẬP KHÔNG THÀNH CÔNG!",
    content: noti,
    onOk() {},
  });
};

export const confirmLogout = () => {
  confirm({
    title: "THÔNG BÁO!",
    content: "BẠN CÓ MUỐN ĐĂNG XUẤT?",
    onOk() {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      history.push("/home");
      window.location.reload();
    },
    onCancel() {},
  });
};

export const confirmSignInToBooking = () => {
  confirm({
    title: "THÔNG BÁO!",
    content: "ĐĂNG NHẬP ĐỂ ĐẶT VÉ XEM PHIM!",
    onOk() {
      history.push("/login");
    },
    onCancel() {},
  });
};
