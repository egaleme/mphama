import React, { Component } from 'react';
import ProductForm from './ProductForm';
import AllProducts from './AllProducts'

const App = ()=> {
      return (
        <div className="App">
          <div className="navbar">
            <h2 className="center ">Products List</h2>
            </div>
            <ProductForm />
            <AllProducts />
        </div>
      );

  }
export default App;