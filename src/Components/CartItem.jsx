import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/Slices/CartSlice'

const CartItem = ({ img, name, price, qty, id }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className='flex flex-col gap-5 '>
                <div className='flex items-center'>
                    <img className='h-[5rem] w-[5rem] mr-5 ' src={img} alt="" />
                    <div className="flex flex-col w-full pr-3" >
                        <div className="flex justify-between pb-2 items-center">
                            <h1 className='font-semibold'>{name}</h1>
                            <button onClick={() => dispatch(removeFromCart({ id, img, name, price, qty }))} className='bg-gray-200 px-2  rounded-md border-2 hover:bg-transparent transition-all duration-[200ms] border-gray-200'>Del</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='font-semibold flex text-gray-600'>${price}</h1>
                            <div className="flex justify-between items-center gap-3">
                                <button className='hover:bg-gray-200 px-2  rounded-md border-2 bg-transparent transition-all duration-[200ms] border-gray-200'>-</button>
                                <h1>{qty}</h1>
                                <button className='hover:bg-gray-200 px-2  rounded-md border-2 bg-transparent transition-all duration-[200ms] border-gray-200'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem