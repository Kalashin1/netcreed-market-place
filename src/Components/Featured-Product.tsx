const FeaturedProduct = () => {
  return (
    <section className="feature_product_area section_gap_bottom_custom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="main_title">
              <h2><span>Featured product</span></h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="img/product/feature-product/f-p-1.jpg" alt="" />
                <div className="p_icon">
                  <a href="!#">
                    <i className="ti-eye"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-heart"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="product-btm">
                <a href="!#" className="d-block">
                  <h4>Latest men’s sneaker</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="img/product/feature-product/f-p-2.jpg" alt="" />
                <div className="p_icon">
                  <a href="!#">
                    <i className="ti-eye"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-heart"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="product-btm">
                <a href="!#" className="d-block">
                  <h4>Red women purses</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="img/product/feature-product/f-p-3.jpg" alt="" />
                <div className="p_icon">
                  <a href="!#">
                    <i className="ti-eye"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-heart"></i>
                  </a>
                  <a href="!#">
                    <i className="ti-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="product-btm">
                <a href="!#" className="d-block">
                  <h4>Men stylist Smart Watch</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct;