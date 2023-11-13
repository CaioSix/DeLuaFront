import { useDispatch } from "react-redux";
import CartItem from '../../components/cart-item/index'
import * as Styles from "./styles";
import { selectProductTotalPrice } from "../../redux/cart/cart.selectors";
import { useSelector  } from "react-redux";
const Checkout  = ({ isVisible, setIsVisible }) =>{

    const handleEscapeAreaClick = () => setIsVisible(true);

    const { products } = useSelector( (root) => root.cartReducer);
    const valoresTotais = useSelector(selectProductTotalPrice)
    const dispatch = useDispatch();
    return(
    <>
        <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
        <Styles.CartContent>
          <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
          {products.map( (produto) => (
            <CartItem product={produto} />
          ))}
          <Styles.CartTotal>
              R$ {valoresTotais}
          </Styles.CartTotal>
        </Styles.CartContent>
    </>

    )
}

export default Checkout