import tick_squared from "../images/check_square.svg";
import tick_circle from "../images/check_circle.svg";
import people from "../images/user_circle.svg";

export default function Accomplishments(){
    return(<>
    <section className="accomplishments">
        <div className="container align-items-center text-center">
            <div className="w-75 m-auto">
                <h1>We Completed 1200+ Projects Yearly Successfully & Counting</h1>
                <p className="fs-4 p-3">It Is A Long Established Fact That A Reader Will Be Distracted By
                The Readable Content Of A Page When Looking At Its Layout.</p>
            </div>
            
            <div className="row my-5 justify-content-around align-items-center">
                <div className="col shadow-sm py-4 px-2 rounded-end-pill">
                    <div className="row align-items-center">
                        <div className="col text-end">
                            <img src={tick_circle} alt="check"></img>
                        </div>
                        <div className="col text-start text-primary">
                            <h2>100+</h2>
                            <p className="fs-5">Projects Complete</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col text-end">
                            <img src={tick_squared} alt="check"></img>
                        </div>
                        <div className="col text-start">
                            <h2 className="text-primary">100+</h2>
                            <p className="fs-5">Active Projects</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col text-end">
                            <img src={people} alt="user_group"></img>
                        </div>
                        <div className="col text-start">
                            <h2 className="text-primary">90+</h2>
                            <p className="fs-5">Clients Satisfied</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col text-end">
                            <img src={people} alt="user_group"></img>
                        </div>
                        <div className="col text-start">
                            <h2 className="text-primary">56</h2>
                            <p className="fs-5">Countries Available</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
    </>);
}