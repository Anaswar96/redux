import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../features/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const {product} = useSelector((state) => state.products);
  const dispatch = useDispatch()

  console.log("detail page product", product);
  

  const currentProduct = product.products?.find((product) => product.id === Number(id));

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-[black]">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-6 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-[green]">Product Details</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img
            src={currentProduct.thumbnail}
            alt={currentProduct.title}
            className="w-full h-64 object-cover rounded-lg shadow-sm"
          />

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#861e2c]">{currentProduct.title}</h3>
            <p className="text-lg text-[black] font-medium">${currentProduct.price}</p>
            <p className="text-[black]">
              {currentProduct.description || "No description available for this product."}
            </p>

            <button
            onClick={() => dispatch(addItem(currentProduct))}
              className="mt-4 inline-block bg-[green] text-white px-5 py-2 rounded-lg hover:bg-[#861e2c] transition">
            
             Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
