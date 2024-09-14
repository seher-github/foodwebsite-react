import React from 'react'

const Footer = () => {
  return (
   <div className="Footer">
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: 'black', overflowX: 'hidden'}}>
      
      <div className="container-fluid px-5"> {/* Add some padding control */}
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Food Company
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Best Sellers</h6>
              <p><a className="text-white">Bootstrap</a></p>
              <p><a className="text-white">WordPress</a></p>
              <p><a className="text-white">BrandFlow</a></p>
              <p><a className="text-white">Bootstrap Angular</a></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p><a className="text-white">About Us</a></p>
              <p><a className="text-white">Contact Us</a></p>
              <p><a className="text-white">Subscribe</a></p>
              <p><a className="text-white">Help</a></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
              <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2020 Copyright:
                <a className="text-white"> Bootstrap.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
</div>
  )
}

export default Footer
