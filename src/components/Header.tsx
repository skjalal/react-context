import React, { useRef } from "react";
import CartModal from "./CartModal.tsx";
import { useCart } from "../store/CartContext.tsx";

const Header: React.FC = () => {
  const { items } = useCart();
  const modal = useRef<{ open: () => void }>(null);

  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    modal.current?.open();
  };

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
