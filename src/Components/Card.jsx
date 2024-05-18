import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slices/CartSlice'

const Card = ({ img, name, price, desc, rating, id }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className=' w-[16rem] cursor-pointer shadow-xl ' >
                <img className='object-cover w-full m-auto h-[10rem]' src={img} alt="" />
                <div className='flex justify-between items-center py-2 px-3'>
                    <h3 className='font-semibold text-[1rem]'>{name}</h3>
                    <h4 className='text-gray-400'>${price}</h4>
                </div>
                <p className='px-3 pb-2 '>{desc.slice(0, 50)}...</p>
                <div className='flex py-3 justify-between items-center px-3'>
                    <div className='flex justify-center items-center'>
                        *
                        <p className='font-semibold'>{rating}</p>
                    </div>
                    <button onClick={() => { dispatch(addToCart({ id, name, price, img, rating, qty: 1 })) }} className='bg-gray-200 px-3 py-2 rounded-md border-gray-200 border-2 transition duration-[200ms] hover:bg-transparent hover:text-gray-500'>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Card
