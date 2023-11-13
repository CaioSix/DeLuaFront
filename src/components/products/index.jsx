import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../product-item/index';
import * as Styles from './styles';
import { fetchProducts } from '../../redux/product/actions';


const Products = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productReducer);

  useEffect(() => {
    console.log('Componente Products - useEffect - Disparando ação fetchProducts');
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('Componente Products - Renderizando com o estado:', allProducts);




  async function handleLoginClick (){
    console.log("chamando no botao")
    await dispatch(fetchProducts())
    console.log("chamou no botao")
  }


  return (
    <Styles.Container>

    <Styles.Buttons onClick={handleLoginClick}>
      teste
    </Styles.Buttons>

      {allProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;
