import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartSlice';

function HomeCard({ product }) {
  const dispatch = useDispatch();


  return (
    <div className="bg-[whitesmoke] shadow-md rounded-xl overflow-hidden w-[220px] sm:w-[250px] m-4 hover:shadow-xl 
    transition-all duration-300">
      
      <Link to={`/product-details/${product.id}`} className="block cursor-pointer">
      <img
        src={product?.thumbnail}
        alt={product?.title}
        className="w-full h-40 object-cover"
      />
      </Link>

      <div className="p-4 flex flex-col justify-between h-[220px]">
        <h3 className="text-lg font-semibold text-[black] mb-1 truncate">
          {product.title}
        </h3>

        <p className="text-sm text-[black] line-clamp-2 mb-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-[#861e2c] font-bold text-lg">${product.price}</span>
          <span className="flex items-center text-sm text-[#482cc2]">
            <Star size={16} className="mr-1" />
            {product.rating}
          </span>
        </div>

        <button onClick={() => dispatch(addItem(product))}
 className="flex items-center justify-center bg-[green] hover:bg-[#861e2c] text-[whitesmoke] text-sm font-medium py-2 px-3 rounded-full transition">
          <ShoppingCart size={16} className="mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default HomeCard;
