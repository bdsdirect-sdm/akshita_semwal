import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";

export default function Portfolio(){
    return (<>
        <section className="portfolio">
            <div className="container p-5 text-center">
            <h1 className="p-3">
                    Our Portfolio
                </h1>
                <div className="w-75 m-auto">
                    <p className="text-secondary fs-5 mx-5">
                        It Is A Long Established Fact That A Reader Will Be Distracted By
                             The Readable Content Of A Page When Looking At Its Layout. 
                             The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less 
                             Normal Distribution
                    </p>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                        <img src={p1} alt="portfolio" width="100%"/>
                    </div>
                    <div className="col">
                        <img src={p2} alt="portfolio" width="100%"/>
                    </div>
                    <div className="col">
                        <img src={p3} alt="portfolio" width="100%"/>
                    </div>
                    <div className="col">
                        <img src={p3} alt="portfolio" width="100%"/>
                    </div>
                </div>
            </div>
        </section>
        </>);
}