import axios from 'axios';
import {ALL_USERS} from '../../types';

export const getAllUser = () => async dispatch => {
  try {
    const response = await axios.get(`https://app-citizenjournalism.herokuapp.com/api/v1/user`);
    // console.log(response.data.result)
    dispatch({
      type : ALL_USERS,
      payload : response.data.result
    })
  } catch (error){}
}