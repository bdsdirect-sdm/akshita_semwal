import phones from "../images/phones.png"

export default function LandingPage(){
    return(
        <>
        <section className="landing-page">
            <div className="container">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col p-5">
                        <h1 className="text-white py-3">
                            We Create Applications With Excellent Technology.
                        </h1>
                        <p className="text-white fs-5 pe-4">
                            It Is A Long Established Fact That A Reader Will Be Distracted By
                             The Readable Content Of A Page When Looking At Its Layout. 
                             The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less 
                             Normal Distribution Of Letters, As Opposed To Using Content.
                        </p>
                        <button className="p-3 fs-5 border-0 bg-white rounded-3">Download Now</button>
                        <button className="btn fs-5 text-white">Explore More</button>
                    </div>
                    <div className="col">
                        <img src={phones} alt="display" width="100%" height="50%"></img>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}