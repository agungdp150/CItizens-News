import axios from 'axios';
import {GET_VIDEO} from '../../types';


export const getVideo = () => async dispatch => {
  try{
    const response = await axios.get (`https://app-citizenjournalism.herokuapp.com/api/v1/news/findcategory/Video`);
    // console.log(response.data)
    dispatch({
      type : GET_VIDEO,
      payload : response.data.result
    })
  } catch(error){}
}

