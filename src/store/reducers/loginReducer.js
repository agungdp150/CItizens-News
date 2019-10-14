import * as type from '../../types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}


export default function (state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.result.token);
      return {
        ...state,
        ...action.payload,
          isAuthenticated: true,
          loading: false
      };
    case type.LOGIN_FAIL:
    case type.GET_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
          loading: false
      };
    default:
      return state;
  }
}