import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Stores from './pages/Stores'
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';
function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path='/register' element={<ProtectedRoutes element={<Register/>} isPublic={true}/>}/>
        <Route path='/login' element={<ProtectedRoutes element={<Login/>} isPublic={true}/>}/>
        <Route path='/' element={<Stores/>}/>
        <Route path='/:storeId/products' element={<Products/>}/>
        <Route path='/orders' element={<ProtectedRoutes element={<Orders/>} isPublic={false}/>}/>
        <Route path='/orders/:orderId' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
