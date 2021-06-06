import { useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer, {defaultCart} from "./cart-reducer";

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (addedItem) => {
    cartDispatcher({ type: "ADD", val: addedItem });
  };

  const removeItemHandler = (name) => {
    cartDispatcher({ type: "REMOVE", val: name });
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    numberOfItemsInCart: cartState.numberOfItemsInCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    isCartEmpty: cartState.items.size === 0
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
