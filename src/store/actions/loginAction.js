import axios from 'axios';
import setToken from '../../helpers/setToken';
import * as type from '../../types';

export const getUser = () => async dispatch => {
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  try {
    const response = await axios.GET(`https://app-citizenjournalism.herokuapp.com/api/v1/user`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response.data.result);
    dispatch({
      type: type.GET_USER,
      payload: response.data
    })
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: type.GET_USER_FAIL
    })
  }
};


export const loginUser = SignIn => async dispatch => {
  try {
    console.log(SignIn)
    const response = await axios.post(
      `https://app-citizenjournalism.herokuapp.com/api/v1/user/login`,
      SignIn,
    );
    console.log(response.data.result.isAdmin)
    switch (response.data.result.isAdmin) {
      case true :
        dispatch({
          type: type.LOGIN_ADMIN_SUCCESS,
          payload: response.data
        });
        break;
      case false :
        dispatch({
          type: type.LOGIN_SUCCESS,
          payload: response.data
        });
        break;
      default:
        dispatch({
          type: type.LOGIN_FAIL
        })
    }
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: type.LOGIN_FAIL
    });
  }
};