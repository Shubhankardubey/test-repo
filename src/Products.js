import React from 'react'

const Products = (props) => {

  return (
    
    <div>
      <div>{props.loading && <h1>Loading...</h1>}</div>
      <div className='cartContainer'>
         <h2 className='prodTitle'>{props.title}</h2>
      <img className='productImage' src={props.image} alt="" />
       <p className='prodDesc'>{props.description}</p>
        <p>${props.price}</p>
        <p>Rating:{props.rating}</p>
      </div>
        {props.cartState && props.cartState.length > 0 && props.cartState.find(x=>x['id'] === props.id) 
        ?  
        <>
        <button className='addToCartBtn' onClick={props.decreaseItem}>-</button>&nbsp;&nbsp;
          {props.cartState.find(x=>x['id'] === props.id)['quantity']}&nbsp;&nbsp;
        <button className='addToCartBtn' onClick={props.addItems}>+</button>
        </> : 
        <><button className='addToCartBtn' onClick={props.addItems}>Add to cart</button></>}
    </div>
  )
}

export default Products