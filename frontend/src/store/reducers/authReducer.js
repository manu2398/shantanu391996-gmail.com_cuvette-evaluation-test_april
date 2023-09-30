import { getDataAPI, postDataAPI } from "../../services/fetchData";
import { ALERT } from "./alertReducer";

//actionTypes
export const TYPES = {
  AUTH: "AUTH",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QTY: "UPDATE_QTY",
  CLEAR_CART: "CLEAR_CART",
};

//action creators

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });
    const res = await postDataAPI("user/login", data);
    dispatch({
      type: TYPES.AUTH,
      payload: {
        ...res.data,
        user: { ...res.data.user, cartItems: getItemsFromLocalStorage() },
      },
    });
    localStorage.setItem("token", res.data.token);

    dispatch({
      type: ALERT,
      payload: {
        success: true,
        msg: "Login Successfull",
      },
    });
  } catch (err) {
    dispatch({
      type: ALERT,
      payload: { success: false, error: err.response.data },
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });
    const res = await postDataAPI("user/register", data);
    dispatch({
      type: TYPES.AUTH,
      payload: { ...res.data },
    });
    localStorage.setItem("token", res.data.token);

    dispatch({
      type: ALERT,
      payload: {
        success: true,
        msg: "Register Successfull",
      },
    });
  } catch (err) {
    dispatch({
      type: ALERT,
      payload: { success: false, error: err.response.data },
    });
  }
};

export const getMe = () => async (dispatch) => {
  dispatch({ type: ALERT, payload: { loading: true } });
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const res = await getDataAPI("user/me", token);

      dispatch({
        type: TYPES.AUTH,
        payload: {
          ...res.data,
          user: { ...res.data.user, cartItems: getItemsFromLocalStorage() },
        },
      });

      dispatch({
        type: ALERT,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: "ALERT",
        payload: { error: err.response.data.message },
      });
      return err;
    }
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: ALERT, payload: { loading: true } });
  localStorage.removeItem("token");

  dispatch({
    type: TYPES.AUTH,
    payload: { user: { cartItems: getItemsFromLocalStorage() } },
  });

  dispatch({
    type: ALERT,
    payload: {},
  });
};

export const addToCart =
  (item, qty = 1) =>
  async (dispatch) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: { item, qty, prodId: item._id },
    });
  };

export const removeFromCart = (prodId) => async (dispatch) => {
  dispatch({
    type: TYPES.REMOVE_FROM_CART,
    payload: { prodId },
  });
};

export const updateItemQty = (prodId, qty) => async (dispatch) => {
  dispatch({
    type: TYPES.UPDATE_QTY,
    payload: { prodId, qty },
  });
};

export const clearCart = () => async (dispatch) => {
  localStorage.removeItem("cart");
  dispatch({
    type: TYPES.CLEAR_CART,
    payload: {},
  });
};

const getItemsFromLocalStorage = () => {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  if (cartData?.length > 0) {
    return cartData;
  } else {
    return [];
  }
};

// reducer
const initialState = {
  user: { cartItems: getItemsFromLocalStorage() },
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      return action.payload;

    case TYPES.ADD_TO_CART:
      const { prodId } = action.payload;

      const isPresent = state.user.cartItems.findIndex(
        (item) => item.prodId === prodId
      );

      if (isPresent !== -1) {
        return {
          ...state,
          user: {
            ...state.user,
            cartItems: [...state.user.cartItems].map((item) =>
              item.prodId === prodId ? { ...item, qty: item.qty + 1 } : item
            ),
          },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            cartItems: [...state.user.cartItems, action.payload],
          },
        };
      }

    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cartItems: [...state.user.cartItems].filter(
            (item) => item.prodId !== action.payload.prodId
          ),
        },
      };

    case TYPES.UPDATE_QTY:
      return {
        ...state,
        user: {
          ...state.user,
          cartItems: [...state.user.cartItems].map((item) =>
            item.prodId === action.payload.prodId
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        },
      };

    case TYPES.CLEAR_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cartItems: [],
        },
      };
    default:
      return state;
  }
};
