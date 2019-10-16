import axios from 'axios';
import {GET_DATA_CATEGORY} from '../../types';

export const getCategory = category => async dispatch => {
  try {
    const response = await axios.get(`https://app-citizenjournalism.herokuapp.com/api/v1/news/category/${category}`);
    console.log(response.data.result)
    dispatch({
      type : GET_DATA_CATEGORY,
      payload : response.data.result
    });
  } catch (error){
    console.log(error.response.data);
  }
}
