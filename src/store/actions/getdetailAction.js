import axios from 'axios';
import {GET_DETAIL_NEWS} from '../../types';


export const getDetail = id => async dispatch => {
  try {
    const response = await axios.get(`https://app-citizenjournalism.herokuapp.com/api/v1/news/id/${id}`);
    // console.log (response.data.result)
    dispatch({
      type : GET_DETAIL_NEWS,
      payload : response.data.result
    });
  } catch (error) {} 
}
