import {GET_DETAIL_USER} from '../../types';

const initialState = {
  detailUser : {
    image : {
      secure_url : ''
    }
  }
}

export default function (state = initialState, action) {
  const {type, payload} = action

  switch(type) {
    case GET_DETAIL_USER :
      return {
        ...state,
        ...payload,
        detailUser : payload
      }

      default : 
      return state
  }
}