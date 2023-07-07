import { Cart } from "./Cart";

export default {
  component: Cart,
};

export const Default = {
  args: {
    products: [
      {
        name: "Product 1",
        price: "R$30,00",
      },
      {
        name: "Product 2",
        price: "R$60,00",
      },
    ],
  },
};
