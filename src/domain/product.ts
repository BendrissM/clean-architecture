export type ProductTitle = string;
export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
};

// calculate total price of list of products
export const totalPrice = (products: Product[]): PriceCents =>
  products.reduce((total, { price }) => total + price, 0);
