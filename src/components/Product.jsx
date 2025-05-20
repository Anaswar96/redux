// import React, { use, useContext } from 'react';
// import ProductsContext from '../context/ProductsContext';
import { useEffect } from 'react';
import HomeCard from '../components/HomeCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/ProductSlice';

function Product() {
  // const { products, queryText } = useContext(ProductsContext);
     const dispatch = useDispatch()
  const product = useSelector((state) => state.products.product);
  console.log("items", product);

  useEffect(() => {
    dispatch(fetchData())
  },[])
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-4xl font-bold text-center text-[brown] mb-5">
        Checkout Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.products?.map((p) => (
          <HomeCard key={p.id} product={p}  />
        ))}
      </div>
    </div>
  );
}

export default Product;
