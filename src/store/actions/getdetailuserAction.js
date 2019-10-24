import axios from 'axios';
import {GET_DETAIL_USER} from '../../types';


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