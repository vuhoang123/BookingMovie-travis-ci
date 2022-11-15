import { FILMGROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  constructor() {
    super();
  }

  loginSystem = (infoLogin) => {
    // {taikhoan: "", matKhau: ""}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };

  registerSystem = (infoRegister) => {
    // {
    //     "taiKhoan": "",
    //     "matKhau": "",
    //     "email": "",
    //     "soDt": "",
    //     "maNhom": "",
    //     "hoTen": ""
    //   }
    return this.post(`/api/QuanLyNguoiDung/DangKy`, infoRegister);
  };

  getInfoUserBookingTickets = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}

export const userManagerService = new UserManagerService();
