import React from 'react'

import  { Container, Logo, Buttons } from './styles'

export default function Header() {

  function handleLoginClick (){
    return 0;
  }

  function handleCartClick (){
    return 0;
  }
  return (
<Container>
      <Logo>DeLua Resina</Logo>
      <Buttons>
        
         
            <div onClick={handleLoginClick}>Login</div>
        
        <div onClick={handleCartClick}>Carrinho</div>
      </Buttons>

      {/* {/* <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} /> */}
    </Container>
  )
}
