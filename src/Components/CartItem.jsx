import React from 'react'

const CartItem = () => {
    return (
        <>
            <div className='flex flex-col gap-5 '> 
                <div className='flex items-center'>
                    <img className='h-[5rem] w-[5rem] mr-5 ' src="https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png" alt="" />
                    <div className="flex flex-col w-full pr-3" >
                        <div className="flex justify-between pb-2 items-center">
                            <h1 className='font-semibold'>Lorem, ipsum.</h1>
                            <button className='bg-gray-200 px-2  rounded-md border-2 hover:bg-transparent transition-all duration-[200ms] border-gray-200'>Del</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='font-semibold flex text-gray-600'>$130</h1>
                            <div className="flex justify-between items-center gap-3">
                                <button className='hover:bg-gray-200 px-2  rounded-md border-2 bg-transparent transition-all duration-[200ms] border-gray-200'>-</button>
                                <h1>1</h1>
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