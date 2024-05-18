import React, { useState } from 'react'
import CartItem from './CartItem'

const Cart = () => {

    const [isActiveCart, setIsActiveCart] = useState(false)
    console.log("isActiveCart", isActiveCart);

    return (
        <>
            <div className={`z-10 flex flex-col justify-between py-7 px-5 fixed top-0 right-0 h-full w-[20rem] max-sm:w-full ${isActiveCart ? "translate-x-0" : "translate-x-full"} transition-all duration-[200ms]`}>
                <div className='flex flex-col'>
                    <div className=' pb-5 flex justify-between items-center'>
                        <h1 className='text-2xl font-semibold '>My Order</h1>
                        <h2 className='font-bold p-1 cursor-pointer' onClick={() => { setIsActiveCart(!isActiveCart) }}>X</h2>
                    </div>
                    <CartItem />
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1>Items : </h1>
                    <h1>Total Amount : </h1>
                    <button className='bg-gray-200 py-2 rounded-md hover:bg-transparent transition duration-[200ms] border-2 border-gray-200 font-semibold hover:text-gray-600'>Checkout</button>
                </div>
            </div>

            <div className="p-4 cursor-pointer bg-slate-300 border-slate-300 border-2 hover:bg-transparent hover:text-gray-600 transition-all duration-200 rounded-full fixed right-6 bottom-8" onClick={() => { setIsActiveCart(!isActiveCart) }}>Cart</div>
        </>
    )
}

export default Cart