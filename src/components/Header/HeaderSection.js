import './HeaderSection.css'

function HeaderSection(){
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
        </>
    )

}

export default HeaderSection