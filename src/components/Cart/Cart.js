import { useState } from "react";

export const Cart = ({ products }) => {
  const [finalProducts, setFinalProducts] = useState(products);

  if (!finalProducts || finalProducts.length === 0) {
    return <div>Your cart is emptys</div>;
  }

  const removeProduct = (name) => {
    setFinalProducts((prods) => prods.filter((prod) => prod.name !== name));
  };

  return (
    <ul>
      {finalProducts.map(({ name, price }, index) => (
        <li key={name} data-testid={`${name}-listitem`}>
          <div>{name}</div>
          <div>{price}</div>
          <button onClick={() => removeProduct(name)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
