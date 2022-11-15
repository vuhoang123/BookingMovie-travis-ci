import { FILMGROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class FilmManagerService extends baseService {
  constructor() {
    super();
  }

  getListBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getListFilm = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${FILMGROUPID}`);
  };
}

export const filmManagerService = new FilmManagerService();
