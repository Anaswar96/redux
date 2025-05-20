import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/CartSlice';

const Cart = () => {

  const { items, totalPrice } = useSelector((state) => state.cart )
  const dispatch = useDispatch()
 
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto " style={{marginBottom: '200px'}}>
      <h1 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500 text-lg ">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow border"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-green-700 font-semibold text-lg">
                  ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 mt-4">
            <h2 className="text-xl font-bold text-green-800">
              Total: $
              {totalPrice.toFixed(2)}
            </h2>
            <button
              className="mt-4 md:mt-0 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
              onClick={() => alert('Thankyou for shopping with Vzone 😊 ')}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
