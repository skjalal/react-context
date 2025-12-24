import { createContext } from "react";
import type { CartContextProps } from "../utils/type-utils.ts";

const defaultAddItemToCrt = (id: string) => {
  console.log("Default function invoke: " + id);
};

export const CartContext = createContext<CartContextProps>({
  items: [],
  addItemToCart: defaultAddItemToCrt,
});
