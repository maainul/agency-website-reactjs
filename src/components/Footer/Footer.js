import './Footer.css'

function Footer (){
    return(
    <>
    <section className="footer">
    <div className="container">
      <div className="footer-wrapper">
        <div className="col-4">
          <span className="website-title">Tech Bees</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum, voluptatibus sapiente
            dolor suscipit, molestias quisquam incidunt architecto fuga dolores autem doloribus et dolorum
            magni
            laudantium at totam. Officia, quibusdam?</p>
          <div className="social-profile">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
            <i className="fa fa-linkedin" />
          </div>
        </div>
        <div className="col-4">
          <h1>Contact info</h1>
          <p>Tech Bees, Mesa, New Jersey 456521</p>
          <p>New York,USA</p>
          <p>(302) 555-0107</p>
          <p>techbees@gmail.com</p>
          <p>website.com</p>
        </div>
        <div className="col-4">
          <h1>About Us</h1>
          <p>Company</p>
          <p>Projects</p>
          <p>Awards</p>
          <p>Events</p>
          <p>Open Source</p>
        </div>
        <div className="col-4">
          <h1>Solutions</h1>
          <p>Customer Services</p>
          <p>Web Design</p>
          <p>App developlment</p>
          <p>Events</p>
          <p>Open Sources</p>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer2">
      <h4>Copyright Gowtham Tirri.All rights reserved</h4>
      <h4>Terms &amp; Use</h4>
      <h4>Privacy Policy</h4>
      <i id="scrolltp" className="fa fa-arrow-up" />
    </div>
  </section>
    </>
    )
}

export default Footer;