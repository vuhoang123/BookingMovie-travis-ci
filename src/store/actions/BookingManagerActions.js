import { bookingManagerService } from "../../services/BookingManagerService";
import { InfoBooking } from "../../_core/models/InfoBooking";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import {
  BOOKING_TICKETS_COMPLETE,
  SET_DETAIL_TICKET_ROOM,
  SWITCH_TAB_RESULT_BOOKING,
} from "./types/BookingManagerType";

export const getDetailTicketRoomAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await bookingManagerService.getDetailTicketRoom(maLichChieu);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_DETAIL_TICKET_ROOM,
          detailTicketRoom: result.data.content,
        });
      }
      dispatch(hideLoadingAction);
      //   console.log("Result ticket room:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
    }
  };
};

export const bookingTicketsAction = (infoBooking = new InfoBooking()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await bookingManagerService.bookingTickets(infoBooking);
      //   console.log("Result infobooking: ", result.data.content);
      // Reload pages
      // await => Wait reload list complete => dispatch
      await dispatch(getDetailTicketRoomAction(infoBooking.maLichChieu));
      await dispatch(bookingticketsCompleteAction);
      await dispatch(hideLoadingAction);
      dispatch(switchTabAction);
    } catch (error) {
      dispatch(hideLoadingAction);

      console.log("error", error.response?.data);
    }
  };
};

export const bookingticketsCompleteAction = {
  type: BOOKING_TICKETS_COMPLETE,
};

export const switchTabAction = {
  type: SWITCH_TAB_RESULT_BOOKING,
};
