const ContactForm = () => {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8 mb-4 mb-lg-0">
            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate={false}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} placeholder="Enter Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-lg-3">
                <button type="submit" className="main_btn">Send Message</button>
              </div>
            </form>


          </div>

          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-home"></i></span>
              <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-tablet"></i></span>
              <div className="media-body">
                <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-email"></i></span>
              <div className="media-body">
                <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;