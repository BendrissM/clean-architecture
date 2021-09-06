import { Product } from "./product";

export type Cart = {
  products: Product[];
};

// add product to cart
export const addProduct = (cart: Cart, product: Product): Cart => ({
  ...cart,
  products: [...cart.products, product],
});

// check if an item is in cart
export const contains = (cart: Cart, product: Product): boolean =>
  cart.products.some(({ id }) => id === product.id);
