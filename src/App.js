import './App.css';
import Blog from './components/Blog/Blog';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Header from './components/Header/HeaderSection';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
   <>
    <Header />
    <Services />
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
{/* Testimonials */}
  <Testimonials />
  {/* Blog */}
  <Blog />
  {/* CTA */}
  <CTA/>
  {/* Footer */}
 <Footer/>
   </>
  );
}

export default App;
