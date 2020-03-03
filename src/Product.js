import React, { Component } from 'react';
import { connect } from 'react-redux';

const Post = (props) => {
const length = props.product.prices.length - 1
return (
<div className="post">
  <h2 className="post_title">{props.product.name}</h2>

  {/* {props.product.prices.map((item, i)=>{
      return (
          <React.Fragment key={item.id}>
         <p className="post_message">{'\u20A6'} {item.price}</p> 
          </React.Fragment>
      )
  })} */}

<p className="post_message">{'\u20A6'} {props.product.prices[length].price}</p> 

  <div className="control-buttons">
    <button className="edit"
    onClick={() => props.dispatch({ type: 'EDIT_PRODUCT', id: props.product.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => props.dispatch({ type: 'DELETE_PRODUCT', id: props.product.id })}
    >Delete</button>
  </div>
</div>
);

}
export default connect()(Post);