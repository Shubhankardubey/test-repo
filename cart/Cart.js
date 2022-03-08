import React, {useState} from 'react'
import { nanoid } from 'nanoid'


const Cart = (props) => {
  const [data, setData] = useState(props.cartState)
  const [pricing,setPricing] = useState([])
  const [itemQuantity, setItemQuantity] = useState(1)
console.log(data)

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

function deleteItem(id) {
  const deletting = data.filter((abc) => abc.id !== id)
  console.log(deletting)
  setData(deletting)
  let price =[]
  let pricings = data.map(pric => {
    return pric.price
  })
  price.unshift(pricings)
  console.log(price)
  setPricing(price)
  props.setCount(prevState => prevState -1)
}

//why crash when question mark removed?
const total = pricing[0]?.reduce((partialSum, a) => partialSum + a, 0);
const totalRounded = Math.round(total * 100) / 100

  return (
    <div>
        <h1>Cart</h1>
        <h1>Total count:${totalRounded}</h1>
        <h2>Cart items: {props.count}</h2>

        {data.map(prod=> (
            <div className='cartContainer' key={nanoid()}>
            <p>{prod.title}</p>
             <img className='productImage' src={prod.image} alt="" />
             <p>${prod.price}</p>
             <h3>item Quantity: {itemQuantity}</h3>
             <button className='deleteItem' onClick={()=>deleteItem(prod.id)}>delete</button>
             <button className='increaseBtn' onClick={()=>props.addItems(prod.id) }>Increase</button>
             <button className='decreaseBtn'>Decrease</button>
         </div>
        ))}


    </div>
  )
}

export default Cart