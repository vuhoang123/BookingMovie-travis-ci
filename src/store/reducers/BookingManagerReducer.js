import {
  BOOKING_TICKET,
  BOOKING_TICKETS_COMPLETE,
  SET_DETAIL_TICKET_ROOM,
  SWITCH_TAB_ACTIVE,
  SWITCH_TAB_RESULT_BOOKING,
} from "../actions/types/BookingManagerType";

const stateDefault = {
  detailTicketRoom: {},
  listSeatBooking: [], // Danh sách ghế đang đặt
  tabActive: "1",
};

export const BookingManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DETAIL_TICKET_ROOM: {
      return { ...state, detailTicketRoom: action.detailTicketRoom };
    }

    case BOOKING_TICKET: {
      // Update seat booking
      let listSeatBookingUpdate = [...state.listSeatBooking];

      let index = listSeatBookingUpdate.findIndex(
        (seatBooking) => seatBooking.maGhe === action.selectedSeat.maGhe
      );

      if (index !== -1) {
        // Remove selected seat if found in listSeatBookingUpdate
        listSeatBookingUpdate.splice(index, 1);
      } else {
        // Push in listSeatBookingUpdate
        listSeatBookingUpdate.push(action.selectedSeat);
      }

      return { ...state, listSeatBooking: listSeatBookingUpdate };
    }

    case BOOKING_TICKETS_COMPLETE: {
      state.listSeatBooking = [];
      return { ...state };
    }

    case SWITCH_TAB_RESULT_BOOKING: {
      state.tabActive = "2";
      return { ...state };
    }

    case SWITCH_TAB_ACTIVE: {
      state.tabActive = action.number;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
