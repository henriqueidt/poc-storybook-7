export const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div>{price}</div>
      <button>Add to Cart</button>
    </div>
  );
};
