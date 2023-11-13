import ProductActionTypes from "./action-types";

const initialState = {
    allProducts: [],
 
}

// redux/product/reducer.js

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ProductActionTypes.GET_PRODUCT:
        console.log('Reducer - processando ação GET_PRODUCT');
        console.log('Dados recebidos:', action.payload);
        return {
          ...state,
          allProducts: action.payload,
        };
      default:
        return state;
    }
  };
  
export default productReducer;
