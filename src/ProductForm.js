import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';


const ProductForm = (props)=> {

let getName
let getPrice

const handleSubmit = (e) =>{
  e.preventDefault()
  //
    const name = getName.value;
    const price =  getPrice.value;
    const id = props.products.length + 1
    const data = {
      id: id,
      name,
      price:{id:  1, price: price, date: moment().format()},
    }

    props.dispatch({
      type:'ADD_PRODUCT',
      data});
    getName.value = '';
    getPrice.value = '';
 
}


return (
<div className="post-container">
  <h1 className="post_heading">Create Product</h1>
  <form className="form" onSubmit={handleSubmit} >
   <input required type="text" ref={(input) => getName = input}
   placeholder="Enter Product Name" /><br /><br />
   <input type="number" required ref={(input) => getPrice = input}
    placeholder="Enter Product Price" /><br /><br />
   <button>Add</button>
  </form>
</div>
)
}

const mapStateToProps = (state) => {
  return {
      products: state
  }
}
export default connect(mapStateToProps)(ProductForm);