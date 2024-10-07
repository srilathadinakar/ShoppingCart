import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const Products = ({cartItem, RemoveFromCart, updateQuantity}) => {
    const total = cartItem.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    const discount = total * 0.10;
    const finalPrice = total - discount;

    return (
        <>
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col max-w-full gap-6 my-8 mx-3 lg:mx-0 text-center">    
            {
                cartItem.map((item)=>{
                    return(
                        <>
                        <div key={item.id}>
                            <div className="w-full flex flex-row flex-1 justify-between gap-8 items-center bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-800 dark:border-gray-700">
                                <img
                                    className="rounded-t-lg object-contain max-w-sm w-24"
                                    src={item.image}
                                    alt={item.title}
                                />
                         
                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h2>

                                <h5 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${item.price}
                                </h5>  

                                <div className="flex items-center p-3 space-x-2 text-xl">
                                    <button className=" px-2 py-1 rounded" onClick={() => updateQuantity(item.id, 'decrease')}>
                                    <FaMinusCircle />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className=" px-2 py-1 rounded" onClick={() => updateQuantity(item.id, 'increase')}>
                                    <FaCirclePlus />
                                    </button>
                                </div> 

                                <h1 className='text-xl font-semibold'>Total: <span className='text-2xl font-bold'>${item.quantity * item.price}</span></h1>

                                <button onClick={() => RemoveFromCart(item.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Remove
                                </button>               
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
            <div className='pb-16 flex flex-col align-middle justify-center'>
                <h5 className='flex justify-end align-middle pr-5 text-xl font-semibold'> Total : <span className='text-2xl'> ${total.toFixed(2)}</span></h5>
                <p className='flex justify-end pr-5 text-xl font-semibold'> Discount: <span className='text-2xl'>${discount.toFixed(2)}</span></p>
                <hr></hr>
                <h1 className='flex justify-end pr-5 text-xl font-semibold'> Final Price: <span className='text-2xl'>${finalPrice.toFixed(2)}</span></h1>
            </div>
        </div>
        </>
    );
};

export default Products;