import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payment from './Payment'
import App from './App'
export default function Main() {
  return (
    <Routes>
        <Route path='/*' element={<App/>}/>
        <Route path='/Payment/:id' element={<Payment />}/>
    </Routes>
  )
}
