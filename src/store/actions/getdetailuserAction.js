import axios from 'axios';
import {GET_DETAIL_USER, GET_STATUS_NEWS_USER} from '../../types';
import setToken from '../../helpers/setToken';

export const getDetailUser = id => async dispatch => {
  try {
    const response = await axios.get(`https://app-citizenjournalism.herokuapp.com/api/v1/user/details/${id}`);
    // console.log (response.data.result)
    dispatch({
      type : GET_DETAIL_USER,
      payload : response.data.result
    });
  } catch (error) {
    console.log (error.response.data);
  } 
}

export const getUserNews = () => async dispatch =>{
  if (localStorage.token) {
    setToken(localStorage.token)
  }
  let tokenCheck = localStorage.token
  let tokenUser = `Bearer ${tokenCheck}`
  try {
    const response = await axios.get(`https://app-citizenjournalism.herokuapp.com/api/v1/user/profile`,
    {
      headers:{
        Authorization: tokenUser
      }
    });
    // console.log(response.data.result.user)
    dispatch({
      type : GET_STATUS_NEWS_USER,
      payload : response.data.result.user
    });
  } catch(error) {}
}  


