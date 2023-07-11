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

export const NoProducts = {
  args: {
    products: [],
  },
};

export const OneProduct = {
  args: {
    products: [
      {
        name: "Product 1",
        price: "R$30,00",
      },
    ],
  },
};

export const MultipleProducts = {
  args: {
    products: [
      {
        name: "Product 1",
        price: "R$30,00",
      },
      {
        name: "Product 2",
        price: "R$30,00",
      },
      {
        name: "Product 3",
        price: "R$30,00",
      },
      {
        name: "Product 4",
        price: "R$30,00",
      },
      {
        name: "Product 5",
        price: "R$30,00",
      },
    ],
  },
};
