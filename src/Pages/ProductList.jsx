import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
