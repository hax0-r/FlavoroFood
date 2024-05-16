import React from 'react'

const Cart = () => {
    return (
        <>
            <div className=' flex flex-col justify-between py-7 px-5 fixed top-0 right-0 h-full w-[20rem] '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold '>My Order</h1>
                    <h2 className='font-bold cursor-pointer'>X</h2>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1>Items : </h1>
                    <h1>Total Amount : </h1>
                    <button className='bg-gray-200 py-2 rounded-md hover:bg-transparent transition duration-[200ms] border-2 border-gray-200 font-semibold hover:text-gray-600'>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart