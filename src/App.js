import { useState } from "react";
import ShoppingCart from "./Cart/ShoppingCart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const cartButtonClickHandler = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlayHandler = () => {
    setIsOverlayOpen(false);
  };

  return (
    <CartProvider>
      <Header cartButtonClicked={cartButtonClickHandler} />
      <Meals />
      {isOverlayOpen && <ShoppingCart closeOverlay={closeOverlayHandler} />}
    </CartProvider>
  );
}

export default App;
