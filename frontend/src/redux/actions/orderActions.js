import axios from "axios";
import * as actionTypes from '../constants/orderConstants';

export const createOrder = (order) => async(dispatch, getState) =>{
    dispatch({type: actionTypes.ORDER_CREATE_REQUEST, payload: order });

    try {
      const {
        userSignin: { userInfo },
      } = getState();
        const {data} = await axios.post('api/orders/order', order, {
          headers:{
            Authorization: `Bearer ${userInfo.token}`,
          }
        });
        dispatch({type: actionTypes.ORDER_CREATE_SUCCESS, payload:data.order})
        //localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const getOrders = () => async (dispatch) => {

  dispatch({ type: actionTypes.ORDER_LIST_REQUEST });
  try {
  
      const { data } = await axios.get("/api/orders");
      dispatch({
        type: actionTypes.ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };