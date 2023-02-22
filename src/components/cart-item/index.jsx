import { useDispatch } from "react-redux";

import { decrementProductQuantity, incrementProductQuantity, removeProductFromCart } from "../../redux/cart/slice";

import "./styles.css";

const CartItem = ({ itemInfo }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={itemInfo.imageUrl} alt={itemInfo.name} />
      <div className="info">
        <span>{itemInfo.name}</span>
        <span>R${itemInfo.price}</span>
        <div className="quantity">
          <button onClick={() => dispatch(decrementProductQuantity(itemInfo.id))}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{itemInfo.quantity}</span>
          <button onClick={() => dispatch(incrementProductQuantity(itemInfo.id))}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <button className="remove-item" onClick={() => dispatch(removeProductFromCart(itemInfo.id))}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
