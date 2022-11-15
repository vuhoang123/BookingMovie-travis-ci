import { FILMGROUPID } from "../util/settings/config";
import { InfoBooking } from "../_core/models/InfoBooking";
import { baseService } from "./baseService";

export class BookingManagerService extends baseService {
  constructor() {
    super();
  }

  getDetailTicketRoom = (maLichChieu) => {
    // {maLichChieu}
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  };

  bookingTickets = (infoBooking = new InfoBooking()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, infoBooking);
  };
}

export const bookingManagerService = new BookingManagerService();
