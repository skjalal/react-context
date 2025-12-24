import React, { useReducer, type PropsWithChildren } from "react";

import { CartContext } from "./CartContext.tsx";
import type {
  CartContextProps,
  ShoppingCartState,
  ShoppingCartReducerAction,
} from "../utils/type-utils.ts";
import { DUMMY_PRODUCTS } from "../utils/dummy-products.ts";

const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartReducerAction
) => {
  const { id, amount } = action.payload;
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

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
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount!;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return { ...state };
};

const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  const handleAddItemToCart = (id: string) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: { id },
    });
  };

  const handleUpdateCartItemQuantity = (id: string, amount: number) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { id, amount },
    });
  };

  const ctxValue: CartContextProps = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext value={ctxValue}>{children}</CartContext>;
};

export default CartContextProvider;
