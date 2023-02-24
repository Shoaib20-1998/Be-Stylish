import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from '../Landingpage/Main'
import Bag from '../Pages/Bag'
import Login from '../Pages/Login'
import Shirts from '../Pages/Shirts'
import Signup from '../Pages/Signup'
import Singleshirtpage from '../Pages/Singleshirtpage'

function Allroutes() {
  return (
     <>
       <Routes>
            <Route path='/' element={<Main /> }></Route> 
            <Route path="/shirts" element={<Shirts />}> </Route> 
            <Route path='/login' element={<Login /> }> </Route> 
            <Route path='/signup' element={<Signup /> }></Route> 
            <Route path='/cart' element={<Bag /> } ></Route>
            <Route path='/shirts/:id' element={<Singleshirtpage /> } ></Route>
       </Routes>
    </>
  )
}

export default Allroutes