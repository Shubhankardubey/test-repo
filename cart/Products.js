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
     
        <button className='addToCartBtn' onClick={props.addItems}>Add to cart</button>
    </div>
  )
}

export default Products