import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
import User from './User/App'
import Guest from './Guest/App'
import Manager from './Manager/App'
import Payment from './Payment'
import "./index.css";
export default function App() {
  return (
    <Routes>
        <Route path='/Admin/*' element={<Admin/>}/>
        <Route path='/User/*' element={<User/>}/>
        <Route path='/*' element={<Guest/>}/>
        <Route path='/Manager/*' element={<Manager />}/>
        <Route path='/Payment/:id' element={<Payment />}/>
    </Routes>
  )
}
