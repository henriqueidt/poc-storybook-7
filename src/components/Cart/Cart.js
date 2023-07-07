export const Cart = ({ products }) => {
  return (
    <ul>
      {products.map(({ name, price }) => (
        <li>
          <div>{name}</div>
          <div>{price}</div>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  );
};
