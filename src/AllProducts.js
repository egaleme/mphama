import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import EditComponent from './EditComponent';

const AllProducts = (props)=>{
    useEffect(()=>{
      async function fetchData(){
          try {
              
        const res = await fetch('http://www.mocky.io/v2/5c3e15e63500006e003e9795')
        const data = await res.json()

        props.dispatch({
            type: 'FETCH_PRODUCTS',
            data: data.products
        })
          } catch (error) {
            console.log(error)
          }
      }

      fetchData()
    }, [])

        return (
            <div>
            <h1 className="post_heading">All Products</h1>
            {props.products.map((product) => (
            <div key={product.id}>
                {product.editing ? <EditComponent product={product} key={product.id} /> : <Product product={product}
                key={product.id} />}
            </div>
            ))}
            </div>
        );
   
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}
export default connect(mapStateToProps)(AllProducts);