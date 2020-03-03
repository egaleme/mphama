import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


const EditComponent =(props)=>{

let getName
let getPrice

const handleEdit = (e) => {
  e.preventDefault();
//   const newName = getName.value;
  const newPrice = getPrice.value;
  const data = {
    id: 2,
    price: newPrice,
    date: moment().format()
  }
  props.dispatch({ type: 'UPDATE', id: props.product.id, data: data })
}

return (
<div key={props.product.id} className="post">
  <form className="form" onSubmit={handleEdit}>
    <input required ref={(input) => getPrice = input}
    defaultValue={props.product.price}  placeholder="Enter Price" /><br /><br />
    <button>Update</button>
  </form>
</div>
);

}
export default connect()(EditComponent);