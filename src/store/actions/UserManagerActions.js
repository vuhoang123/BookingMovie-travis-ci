import { history } from "../../App";
import { registerSuccess } from "../../components/NotificationConfirm/NotificationConfirm";
import { userManagerService } from "../../services/UserManagerService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { LOGIN_ACTION, REGISTER_ACTION, SET_INFO_USER_BOOKING } from "./types/UserManagerType";

export const loginAction = (infoLogin, loginError) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await userManagerService.loginSystem(infoLogin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          infoLogin: result.data.content,
        });
        dispatch(hideLoadingAction);
        history.goBack();
      }

      //   console.log("Login Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      loginError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const registerAction = (infoRegister, registerError) => {
  return async (dispatch) => {
    try {
      const result = await userManagerService.registerSystem(infoRegister);
      if (result.data.statusCode === 200) {
        dispatch({
          type: REGISTER_ACTION,
          infoRegister: result.data.content,
        });
        dispatch(displayLoadingAction);
        registerSuccess();
        dispatch(hideLoadingAction);
      }

      //   console.log("Register Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      registerError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const getInfoUserBookingTicketsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerService.getInfoUserBookingTickets();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_INFO_USER_BOOKING,
          infoUser: result.data.content,
        });
        dispatch(hideLoadingAction);
      }
      //   console.log("Get info user Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
    }
  };
};
