import { useDispatch } from "react-redux";

import { addProductToCart } from "../../redux/cart/slice";

import "./style.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductButton = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <div className="info">
        <span>{product.name}</span>
        <span>R${product.price}</span>
      </div>
      <button onClick={handleAddProductButton} className="add-to-cart-button">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductItem;
