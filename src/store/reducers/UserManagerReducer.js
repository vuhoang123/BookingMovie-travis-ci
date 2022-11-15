import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { LOGIN_ACTION, SET_INFO_USER_BOOKING } from "../actions/types/UserManagerType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  infoUser: {},
};

export const UserManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const { infoLogin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(infoLogin));
      localStorage.setItem(TOKEN, infoLogin.accessToken);
      return { ...state, userLogin: infoLogin };
    }

    case SET_INFO_USER_BOOKING: {
      state.infoUser = action.infoUser;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
