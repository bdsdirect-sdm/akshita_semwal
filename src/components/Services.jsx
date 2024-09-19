import smarthphone from "../images/smartphone.svg";
import dashboard from "../images/dashboard.svg";
import layout from "../images/layout.svg";

export default function Services(){
    return(
        <>
        <section className="services">
            <div className="container p-5 text-center">
                <h1 className="p-3">
                    We provide various kinds of services for you
                </h1>
                <div className="w-75 m-auto">
                    <p className="text-secondary fs-5 mx-5">
                        It Is A Long Established Fact That A Reader Will Be Distracted By
                             The Readable Content Of A Page When Looking At Its Layout. 
                             The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less 
                             Normal Distribution Of Letters, As Opposed To Using Content.
                    </p>
                </div>
                

                <div className="row justify-content-around">
                    <div className="col shadow-sm p-3 rounded-3 m-4">
                        <img src={smarthphone} alt="Smartphone" width="50%"></img>
                        <h2 className="p-2">Unique App Ui</h2>
                        <p className="text-secondary fs-5">It Is A Long Established Fact That A Reader Will Be Distracted By
                        The Readable Content Of A Page</p>
                    </div>
                    <div className="col shadow-sm p-3 rounded-3 m-4">
                        <img src={dashboard} alt="Dashboard" width="50%"></img>
                        <h2 className="p-2">Excellent Dashboard</h2>
                        <p className="text-secondary fs-5">It Is A Long Established Fact That A Reader Will Be Distracted By
                        The Readable Content Of A Page</p>
                    </div>
                    <div className="col shadow-sm p-3 rounded-3 m-4">
                        <img src={layout} alt="Layout" width="50%"></img>
                        <h2 className="p-2">By Construction</h2>
                        <p className="text-secondary fs-5">It Is A Long Established Fact That A Reader Will Be Distracted By
                        The Readable Content Of A Page</p>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    );
}