
const productReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return state.concat(action.data)
    case 'ADD_PRODUCT':
      return state.concat([{id: action.data.id, name: action.data.name, prices: [{id: action.data.price.id, price: action.data.price.price, date :action.data.price.date}]}]);
    // case 'EDIT_PRODUCT':
    //   return state.map((product)=>product.id === action.id ? {...product,prices: product.prices.concat(action.data.newPrice)}:product)
    case 'EDIT_PRODUCT':
        return state.map((product) => product.id === action.id ? { ...product, editing: !product.editing } : product)
    case 'UPDATE':
        return state.map((product) => {
            if (product.id === action.id) {
            return {
            ...product,
            prices: product.prices.concat(action.data),
            editing: !product.editing
            }
            } else return product;
            })
    case 'DELETE_PRODUCT':
      return state.filter((product)=>product.id !== action.id);
    default:
      return state;
  }

}
export default productReducer;