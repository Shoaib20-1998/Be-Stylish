import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from '../Landingpage/Main'
import Bag from '../Pages/Bag'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Shirts from '../Pages/Shirts'
import Signup from '../Pages/Signup'
import Singleshirtpage from '../Pages/Singleshirtpage'
import PrivateRoute from './privateroute'

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
            <Route path='/checkout' element={ <PrivateRoute> <Checkout /> </PrivateRoute>} ></Route>
       </Routes>
    </>
  )
}

export default Allroutes