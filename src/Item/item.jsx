import React,{useState} from 'react'
import img1 from '../man.jpg';
import './item.css'
const Item = () => {
  const [quantity, setQuantity]=useState(1)
const handleMinus=()=>{
  setQuantity(quantity-1)
}
const handlePlus=()=>{
  setQuantity(quantity+1)
}
  return (<div className='bars'>
    <div className='item-main'>
      <div className="item-image">
         <img src={img1} alt="" />
         </div>
         <div className="item-title"> <h3>T-shirt</h3></div>
        
        <div className="quantity"> 
        <i class="fa-solid fa-minus minus"onClick={handleMinus}></i>
        <input type='number' value={quantity}/>
        <i class="fa-solid fa-plus plus" onClick={handlePlus}></i>
        </div>
        <div className="item-price">
          Rs.500
        </div>
       <div className="remove-item">
       <i class="fa-regular fa-trash-can"></i>
       </div>
      
    </div>
    <div>
      <hr />
    </div>
    </div>
  )
}

export default Item