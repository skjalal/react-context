import React, { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import type { CartModalProps } from "../utils/type-utils.ts";
import Cart from "./Cart.tsx";

const CartModal: React.FC<CartModalProps> = ({
  ref,
  cartItems,
  onUpdateCartItemQuantity,
  title,
  actions,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          dialog.current?.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default CartModal;
