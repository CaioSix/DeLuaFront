import { useSelector  } from "react-redux";
import CartItem from '../cart-item/index'
import * as Styles from "./styles";
import { selectProductTotalPrice } from "../../redux/cart/cart.selectors";
import Button from "../custom-button";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector( (root) => root.cartReducer);
  const valoresTotais = useSelector(selectProductTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map( (produto) => (
          <CartItem product={produto} />
        ))}
        <Styles.CartTotal>
            R$ {valoresTotais}
        </Styles.CartTotal>
        <Button />
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
