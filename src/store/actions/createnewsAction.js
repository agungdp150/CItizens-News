import axios from 'axios';
import {
  UPLOAD_NEWS_SUCCESS,
  UPLOAD_NEWS_FAIL
} from '../../types';
import setToken from '../../helpers/setToken'


export const newsPostAction = (data, id) => async dispatch => {
  if (localStorage.token) {
    setToken(localStorage.token)
  }

  try {
    const response = await axios.post(
      `https://app-citizenjournalism.herokuapp.com/api/v1/news/create`, data.newsDesc
    );
    const id = response.data.result._id
    const res = await axios.post(
      `https://app-citizenjournalism.herokuapp.com/api/v1/news/upload/${id}`, data.image
     
    )
    // console.log(response);
    console.log(res);
    dispatch({
      type: UPLOAD_NEWS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log("error", error.response);
    dispatch({
      type: UPLOAD_NEWS_FAIL
    })
  }
}