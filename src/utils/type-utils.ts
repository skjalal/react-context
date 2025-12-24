import type { JSX, Ref } from "react";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type HeaderProps = {
  cart: {
    items: Item[];
  };
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
};

type CartModalProps = {
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
  title: string;
  actions: JSX.Element;
  ref: Ref<{ open: () => void }>;
};

type CartProps = {
  onUpdateItemQuantity: (productId: string, amount: number) => void;
};

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type ShopProps = {
  onAddItemToCart: (id: string) => void;
};

type ShoppingCartState = {
  items: Item[];
};

type CartContextProps = {
  items: Item[];
  addItemToCart: (id: string) => void;
};

export {
  type Product,
  type CartModalProps,
  type Item,
  type CartProps,
  type HeaderProps,
  type ProductProps,
  type ShopProps,
  type ShoppingCartState,
  type CartContextProps,
};
