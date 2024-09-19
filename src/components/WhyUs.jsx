import iphone from "../images/iphone.png";

export default function WhyUs(){
    return (<>
    <section className="why-us">
        <div className="container p-5 text-center">
            <h1>Why Us?</h1>
            <div className="w-75 m-auto">
                    <p className="text-secondary fs-5 mx-5">
                        It Is A Long Established Fact That A Reader Will Be Distracted By
                             The Readable Content Of A Page When Looking At Its Layout. 
                             The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less 
                             Normal Distribution Of Letters, As Opposed To Using Content.
                    </p>
                </div>
            <div className="row justify-content-evenly align-items-center">
                <div className="col-6">
                    <img src={iphone} alt="iphone" width="80%"></img>
                </div>
                <div className="col text-start">
                    <h1 className="py-3">Build the app that everyone loves.</h1>
                    <p className="text-secondary fs-4">It Is A Long Established Fact That A Reader Will Be Distracted By
                             The Readable Content Of A Page When Looking At Its Layout. 
                             The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less 
                             Normal Distribution Of Letters, As Opposed To Using Content.</p>

                    <p className="py-3 text-secondary fs-4">It Is A Long Established Fact That A Reader Will Be Distracted By
                    The Readable Content Of A Page When Looking At Its Layout.</p>

                    <button className="py-3 px-4 fs-4 border-1 text-secondary rounded-3">Get More</button>
                </div>
            </div>
        </div>
    </section>
    </>);
}