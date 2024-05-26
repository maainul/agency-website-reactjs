import { Link } from "react-router-dom"


function CTA() {
    return (
        <>
            <section class="cta container">
                <div class="ctn-container">
                    <div class="cta__getStarted">
                        <div class="cta__text">
                            <h1>Get Connected With TechBees</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Link href="#" class="ctnBtn">Get Started</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA