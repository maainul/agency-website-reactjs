import './App.css';
function App() {
  return (
   <>
     <header>
 <div className="navbar">
      <div className="theme">
        <input type="checkbox" name id="checkbox" className="checkbox" />
        <label className="label" htmlFor="checkbox">
          <div className="ball" />
        </label>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#home">About</a></li>
        <li><a href="#home">Services</a></li>
        <li><a href="#home">Portfolio</a></li>
        <li><a href="#home">Blog</a></li>
        <li><a href="#home">Contact Us</a></li>
      </ul>
    </div>
    <div className="container hero">
      <div className="hero__content">
        <div className="hero__content__description">
          <h1>We are startup<br /> creative agency</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta libero atque, repellendus
            eos
            ut
            consequatur obcaecati amet nobis fugit eum, totam inventore vero aperiam laborum voluptatum,
            maxime
            quam
            eligendi?</p>
          <div className="btn-group">
            <button className="btn learnmore">learn More</button>
            <button className="btn">Contact Us</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={`${process.env.PUBLIC_URL}/images/hero-img.svg`} alt="Logo" />
        </div>
      </div>
    </div>
    </header>
      <section className="services section-gap">
    <div className="container">
      <div className="grid-wrapper">
        <div className="grid-box mobileapp">
          {/* <img src="images/mobileapp.png" alt /> */}
           <img src={`${process.env.PUBLIC_URL}/images/mobileapp.png`} alt="Logo" />
          <h2>Mobile App</h2>
        </div>
        <div className="grid-box webdesign">
           <img src={`${process.env.PUBLIC_URL}/images/webdesign.png`} alt="Logo" />
          <h2>Web Design</h2>
        </div>
        <div className="grid-box marketing">
           <img src={`${process.env.PUBLIC_URL}/images/marketing.png`} alt="Logo" />
          <h2>Marketing</h2>
        </div>
        <div className="grid-box branding">
            <img src={`${process.env.PUBLIC_URL}/images/branding.png`} alt="Logo" />
          <h2>Branding</h2>
        </div>
      </div>
      <div className="services-content">
        <div className="circle">
            <img src={`${process.env.PUBLIC_URL}/images/circle.svg`} alt="Logo" />
        </div>
        <h1 className="section-heading">Our best Services</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque neque nesciunt reprehenderit libero,
          quos sed modi maiores dolorum adipisci perspiciatis asperiores dignissimos perferendis sunt ipsam,
          sapiente dolor, optio nisi quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae eius expedita autem eveniet, voluptatibus at saepe debitis quae mollitia, laborum
          officiis in nihil nostrum magnam natus numquam? Eveniet, aperiam quam. </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi dolor, iste autem maiores
          ullam sint labore voluptatibus sequi neque.</p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </div>
  </section>
    <section className="container number">
    <div className="number-heading">
      <h1 className="section-heading">We lead from the front</h1>
      <p className="sub-heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque neque nesciunt
        reprehenderit libero,
        quos sed modi maiores dolorum adipisci perspiciatis asperiores dignissimos perferendis sunt ipsam,
        sapiente dolor, optio nisi quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae eius expedita autem eveniet, voluptatibus at saepe debitis quae mollitia, laborum
        officiis in nihil nostrum magnam natus numquam? Eveniet, aperiam quam. </p>
    </div>
    <div className="number-wrapper-outer">
      <div className="grid-wrapper number-wrapper">
        <div className="grid-box happyclients">
          <h2>2300+</h2>
          <h2>Happy Clients</h2>
        </div>
        <div className="grid-box projectProposal">
          <h2>750+</h2>
          <h2>Projects Completed</h2>
        </div>
        <div className="grid-box runningProject">
          <h2>570+</h2>
          <h2>Running Projects</h2>
        </div>
        <div className="grid-box awesomeDesigner">
          <h2>300+</h2>
          <h2>Awesome Designer </h2>
        </div>
      </div>
      <div className="number-img">
        <img src="images/team-mockup.png" alt />
      </div>
    </div>
  </section>
    <section className="container projects">
    <h1 className="section-heading">Our Recent Projects</h1>
    <div className="grid-wrapper img-boxes">
      <div className="grid-box-img">
        <img src="images/project-1.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
      <div className="grid-box-img">
        <img src="images/project-2.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
      <div className="grid-box-img">
        <img src="images/project-3.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
      <div className="grid-box-img">
        <img src="images/project-4.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
      <div className="grid-box-img">
        <img src="images/project-5.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
      <div className="grid-box-img">
        <img src="images/project-6.jpg" alt />
        <div className="hover">
          <h3>Creative</h3>
          <h4>Web Development</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icons" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
 <section className="testimonials container">
    <h1 className="section-heading">What our Clients say</h1>
    <div className="sub-heading">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi porro cumque mollitia pariatur, vero in
      sapiente voluptatem rerum, doloribus, doloremque voluptates labore molestiae illo facere nemo ut facilis aut
      repudiandae.
    </div>
    <div className="testimonials-groups">
      <div className="single-testimonial">
        <img src="images/team1.png" alt className="testimonial-img" />
        
        <div>
          <h2>John Smith</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident molestias voluptate
            aliquam nihil? Velit exercitationem quia praesentium facere alias omnis aliquid, repellat
            delectus laboriosam animi modi voluptatum odit vel?</p>
        </div>
      </div>
      <div className="single-testimonial">
        <img src="images/team1.png" alt className="testimonial-img" />
        <div>
          <h2>John Smith</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident molestias voluptate
            aliquam nihil? Velit exercitationem quia praesentium facere alias omnis aliquid, repellat
            delectus laboriosam animi modi voluptatum odit vel?</p>
        </div>
      </div>
      <div className="single-testimonial">
        <img src="images/team1.png" alt className="testimonial-img" />
        <div>
          <h2>John Smith</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident molestias voluptate
            aliquam nihil? Velit exercitationem quia praesentium facere alias omnis aliquid, repellat
            delectus laboriosam animi modi voluptatum odit vel?</p>
        </div>
      </div>
    </div>
  </section>
   <section className="blog container section-gap">
    <div className="single__blog">
      <img src="images/blog1.png" alt className="blog__img" />
      <div className="blog__desc">
        <h3>Powerful App for tracking daily activities</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos. Cum autem itaque
          molestias labore! Provident autem numquam nobis illum excepturi cupiditate labore non voluptatum
          delectus. A quasi quis in?</p>
      </div>
    </div>
    <div className="single__blog">
      <img src="images/blog2.png" alt className="blog__img" />
      <div className="blog__desc">
        <h3>Powerful App for tracking daily activities</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos. Cum autem itaque
          molestias labore! Provident autem numquam nobis illum excepturi cupiditate labore non voluptatum
          delectus. A quasi quis in?</p>
      </div>
    </div>
    <div className="single__blog">
      <img src="images/blog3.png" alt className="blog__img" />
      <div className="blog__desc">
        <h3>Powerful App for tracking daily activities</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos. Cum autem itaque
          molestias labore! Provident autem numquam nobis illum excepturi cupiditate labore non voluptatum
          delectus. A quasi quis in?</p>
      </div>
    </div>
  </section>
  {/* CTA */}
   <section className="cta container">
    <div className="ctn-container">
      <div className="cta__getStarted">
        <div className="cta__text">
          <h1>Get Connected With TechBees</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <a href="#" className="ctnBtn">Get Started</a>
      </div>
    </div>
  </section>
  {/* Footer */}
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
  );
}

export default App;
