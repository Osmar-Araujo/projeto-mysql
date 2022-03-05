import {
  END_REGISTER_REQUEST,
  END_REGISTER_SUCCESS,
  END_REGISTER_FAIL
} from "../constants/endConstants";

export const endRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case END_REGISTER_REQUEST:
      return { loading: true };
    case END_REGISTER_SUCCESS:
      return { loading: false, endInfo: action.payload };
    case END_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};