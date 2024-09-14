import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'

const BestSeller = () => {
  return (
    <div className='BestSeller'>
        <div className="container">
  <div className="row">
    <div>
  <div className="col1st col-12">
    <h2>Best Sellers</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto amet laborum veritatis quidem 
        consectetur omnis expedita iure? Modi, aliquid error. consectetur omnis expedita iure? Modi, aliquid error.</p>
  </div>
  <div classname="col2nd col-12">
    <div className="row">
  <div className="card" style={{width: '19rem'}}>
    <img src={img1} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">The Best</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>
  <div className="card" style={{width: '19rem'}}>
    <img src={img2} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">The Best</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>
  <div className="card" style={{width: '19rem'}}>
    <img src={img3} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">The Best</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>
  </div>

</div>

</div>

  </div>
</div>
      
    </div>
  )
}

export default BestSeller
