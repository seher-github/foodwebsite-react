import React from 'react'
import img from '../Assets/img1.jpg'

const Special = () => {
  return (
    <div className='Special'>
        <div className="container text-center">
  <div className="row align-items-center">
    <div className="col">
    <img src={img} className="card-img-top" alt="..." />
     
    </div>
    <div className="col col2">
      <h2>Oriental Taste</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est excepturi veritatis quaerat 
        soluta saepe labore mollitia deleniti dolorem reprehenderit molestias facilis, aliquam amet dicta 
        fugiat repellat earum voluptatem! </p>
        <button className="btn btn-success" type="submit">Order Now</button>
    </div>
    
  </div>
</div>
      
    </div>
  )
}

export default Special
