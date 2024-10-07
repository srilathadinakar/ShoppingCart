import React, { useState } from "react";

const Card = ({ item, AddtoCart, RemoveFromCart }) => {

  const [status, setStatus] = useState(true);

  const handleAdd = () => {
    setStatus(false);
    AddtoCart(item)
  };

  const handleRemove = () => {
    setStatus(true);
    RemoveFromCart(item.id);
  };

  return (
    <>
      <div key={item.id}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center w-full h-auto">
          <img
            className="p-8 rounded-t-lg w-3/4 h-48"
            src={item.image}
            alt={item.title}
          />
          </div>

          <div className="px-5 pb-5">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">
              {item.title}
            </h5>

            <div className="py-5">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
            </div>

            <div>
              {status ? (
                <button
                  onClick={handleAdd}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={handleRemove}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
