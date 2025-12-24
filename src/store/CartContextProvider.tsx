import React, { useState, type PropsWithChildren } from "react";

import { CartContext } from "./CartContext.tsx";
import type {
  CartContextProps,
  ShoppingCartState,
} from "../utils/type-utils.ts";
import { DUMMY_PRODUCTS } from "../utils/dummy-products.ts";

const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({
    items: [],
  });

  const handleAddItemToCart = (id: string) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id)!;
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  };

  const handleUpdateCartItemQuantity = (productId: string, amount: number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  };

  const ctxValue: CartContextProps = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext value={ctxValue}>{children}</CartContext>;
};

export default CartContextProvider;
