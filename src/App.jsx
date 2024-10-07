import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {

  const[cart,setCart] = useState([]);

  const AddtoCart = (product) =>{
    if(cart.find((item)=>item.id === product.id)){
      alert("Product Already Added to the Cart")
    }
    else{
      setCart([...cart,{...product,quantity:1}])
    }
  }

  const RemoveFromCart = (id) =>{
    setCart(cart.filter(ele=>ele.id !== id));
  };

  const updateQuantity = (id, type) =>{
    setCart(cart.map((ele)=>ele.id === id ? {...ele, quantity:type === "increase"?ele.quantity+1 : Math.max(1, ele.quantity - 1)} : ele));
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar cartCount={cart.length} />
        </div>
        <Routes>
          <Route path='/' element={<Home AddtoCart={AddtoCart} RemoveFromCart={RemoveFromCart} />} />   
          <Route path='/products' element={<Products cartItem={cart} RemoveFromCart={RemoveFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;