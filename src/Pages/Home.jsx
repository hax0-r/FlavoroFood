import React from 'react'
import CategooryMenu from "../Components/CategoryMenu"
import Card from '../Components/Card'
import FoodData from '../Data/FoodData'

const Home = () => {
  return (
    <>
      <CategooryMenu />
      <div className="pt-7 max-w-[90%] m-auto flex flex-wrap gap-5 justify-center">
        {
          FoodData.map(({ img, name, price, desc, rating, id }) => (
            <Card key={id} img={img} name={name} price={price} rating={rating} desc={desc} />
          ))
        }
      </div>
    </>
  )
}

export default Home