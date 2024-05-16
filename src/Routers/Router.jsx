import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Success from '../Pages/Success'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Success" element={<Success />} />
    </Routes>
    </>
  )
}

export default Router