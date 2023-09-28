import products from "../../data/products";
import ProductItem from "../product-item/index";
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;
