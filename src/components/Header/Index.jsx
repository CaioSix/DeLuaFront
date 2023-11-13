import {React, useMemo, useState} from 'react'
import Cart from "../cart/Index"
import  { Container, Logo, Buttons } from './styles'
import { useSelector, useDispatch } from 'react-redux';

import {loginUser, logoutUser} from '../../redux/user/actions'
import { selectProductsCount } from '../../redux/cart/cart.selectors';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser } = useSelector( (rootReducer) => rootReducer.userReducer)
  // const { products } = useSelector( (rootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch();
  
  const productsCount = useSelector(selectProductsCount);
  // const productsCount = useMemo( () => {
  //   return products.reduce( (acumulador, current) => acumulador + current.quantity, 0 );
  // }, [products]);


  function handleLoginClick (){
    dispatch(loginUser({name: "Caio", email: "Caio@caio.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

const handleCartClick = () => {
  setCartIsVisible(true);
};

  return (
<Container>
      <Logo>DeLua Resina</Logo>
      <Buttons>      
        
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div> }
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Container>
  )
}
