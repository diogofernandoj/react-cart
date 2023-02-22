import products from "../../data/products";
import ProductItem from "../product-item";

import "./styles.css";

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default Products;
