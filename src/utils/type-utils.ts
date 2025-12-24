import type { JSX, Ref } from "react";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type CartModalProps = {
  title: string;
  actions: JSX.Element;
  ref: Ref<{ open: () => void }>;
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
  updateItemQuantity: (id: string, quantity: number) => void;
};

type ShoppingCartReducerAction = {
  type: string;
  payload: {
    id: string;
    amount?: number;
  };
};

export {
  type Product,
  type CartModalProps,
  type Item,
  type ProductProps,
  type ShopProps,
  type ShoppingCartState,
  type CartContextProps,
  type ShoppingCartReducerAction,
};
