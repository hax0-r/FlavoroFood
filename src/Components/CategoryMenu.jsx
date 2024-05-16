import React from 'react'

const CategoryMenu = () => {
    return (
        <>
            <div className="max-w-[90%] py-[2.5rem] m-auto">
                <h1 className='text-[1.5rem] pb-5 font-semibold opacity-70'>Find The Best Foods</h1>
                <div className='flex flex-wrap gap-4 font-medium'>
                    <button className='py-2 transition max-sm:max-w-max duration-[200ms] hover:text-slate-600 cursor-pointer border border-gray-200 border-2 hover:bg-transparent px-3 bg-slate-200 rounded-md max-w-[10rem] w-full'>All</button>
                    <button className='py-2 transition max-sm:max-w-max duration-[200ms] hover:text-slate-600 cursor-pointer border border-gray-200 border-2 hover:bg-transparent px-3 bg-slate-200 rounded-md max-w-[10rem] w-full'>Lunch</button>
                    <button className='py-2 transition max-sm:max-w-max duration-[200ms] hover:text-slate-600 cursor-pointer border border-gray-200 border-2 hover:bg-transparent px-3 bg-slate-200 rounded-md max-w-[10rem] w-full'>BreakFast</button>
                    <button className='py-2 transition max-sm:max-w-max duration-[200ms] hover:text-slate-600 cursor-pointer border border-gray-200 border-2 hover:bg-transparent px-3 bg-slate-200 rounded-md max-w-[10rem] w-full'>Dinner</button>
                    <button className='py-2 transition max-sm:max-w-max duration-[200ms] hover:text-slate-600 cursor-pointer border border-gray-200 border-2 hover:bg-transparent px-3 bg-slate-200 rounded-md max-w-[10rem] w-full'>Snacks</button>
                </div>
            </div>
        </>
    )
}

export default CategoryMenu