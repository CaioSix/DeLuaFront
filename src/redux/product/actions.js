import ProductActionTypes from "./action-types";
import axios from 'axios';

export const fetchProductsSuccess = (products) => ({
  type: ProductActionTypes.GET_PRODUCT,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      console.log('Iniciando ação fetchProducts');
      const response = await axios.get('https://localhost:7032/api/products');
      console.log("Ate aqui foi ")
      console.log('Dados da API:', response.data);
      dispatch(fetchProductsSuccess(response.data));
      console.log('Ação fetchProducts concluída com sucesso');
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };
};

