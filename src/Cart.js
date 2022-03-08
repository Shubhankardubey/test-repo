import React, {useState} from 'react'
import { nanoid } from 'nanoid'


const Cart = (props) => {
  const [data, setData] = useState(props.cartState)
  const [pricing,setPricing] = useState([])
  const [itemQuantity, setItemQuantity] = useState(1)
console.log("in Cart.js",data)

React.useEffect(()=>{
  priceSum()
},[])

function priceSum() {
  let price =[]
  let pricings = data.map(pric => {
    return pric.price
  })
  price.push(pricings)
  setPricing(price)
}

function decreaseItem(e,id) {
  e.preventDefault()
  console.log("id",id)
  //const deletting = data.filter((abc) => abc.id !== id)
  let cartItems = copyVariable(data)
  // console.log("cartItems",cartItems)
  // return
  let alreadyAddedItemsIndex = cartItems.findIndex(eachItemsInCart=>eachItemsInCart['id'] === id)
  cartItems[alreadyAddedItemsIndex]['quantity'] = cartItems[alreadyAddedItemsIndex]['quantity'] - 1
  let itemsRemainingInCart = cartItems.filter(Boolean).filter(x=>x['quantity'] > 0)
  setData(itemsRemainingInCart)
  if(itemsRemainingInCart.length === 0){
    props.changePage(1)
  }
  props.updateCart(itemsRemainingInCart)
  // let price =[]
  // let pricings = data.map(pric => {
  //   return pric.price
  // })
  // price.unshift(pricings)
  // console.log(price)
  // setPricing(price)
  //props.setCount(prevState => prevState -1)
}

function deleteItem(id){
  const deletting = data.filter((abc) => abc.id !== id)
  setData(deletting)
  if(deletting.length === 0){
    props.changePage(1)
  }
  props.updateCart(deletting)
}

function copyVariable(variable){
  return variable
}

//why crash when question mark removed?
// const total = pricing[0]?.reduce((partialSum, a) => partialSum + a, 0);
// const totalRounded = Math.round(total * 100) / 100

  return (
    <div>
        <h1>Cart</h1>
        <h1>Total count:${data && data.map(x=>x['price']*x['quantity']).reduce((a,b)=>a+b,0)}</h1>
        <h2>Cart items: {data.length}</h2>

        {data && data.filter && data.map(prod=> (
            <div className='cartContainer' key={nanoid()}>
            <p>{prod.title}</p>
             <img className='productImage' src={prod.image} alt="" />
             <p>${prod.price}</p>
             <h3>item Quantity: {prod.quantity}</h3>
             <button className='deleteItem' onClick={()=>deleteItem(prod.id)}>delete</button>
             <button className='increaseBtn' onClick={()=>props.addItems(prod.id) }>Increase</button>
             <button className='decreaseBtn' onClick={(e)=>decreaseItem(e,prod.id)}>Decrease</button>
         </div>
        ))}


    </div>
  )
}

export default Cart