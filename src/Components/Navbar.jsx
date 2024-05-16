import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-50 '>
                <div className="flex m-auto justify-between p-5 max-w-[80%] py-6  max-sm:flex-col ">
                    <h1 className='text-[2rem] font-bold max-sm:pb-5'>Flavoro Food</h1>
                    <input className='outline-none border w-[20rem] rounded-md border-gray-300 p-3 max-sm:w-full' type="search" placeholder='Search...' autoComplete='off' />
                </div>

            </nav>
        </>
    )
}

export default Navbar