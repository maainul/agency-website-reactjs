
import './Services.css'


function Services(){
    return (
<>
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
</>

    )
}

export default Services