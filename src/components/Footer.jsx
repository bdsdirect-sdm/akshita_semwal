import "./styles.css";
import pinterest from "../images/pinterest.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/facebook.svg";
import logo from "../images/pixbey.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer(){
    return(<>
        <section className="footer p-3">
            <div className="container py-5">
                <div className="row">
                    <div className="col py-4">
                        <img src={logo} alt="logo"/>
                        <div className="row">
                            <div className="col">
                                <img src={fb} alt="fb"/>
                            </div>
                            <div className="col">
                                <img src={twitter} alt="twitter"/>
                            </div>
                            <div className="col">
                                <img src={linkedin} alt="linkedin"/>
                            </div>
                            <div className="col">
                                <img src={pinterest} alt="pinterest"/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="px-2 py-4">Links</li>
                            <li className="text-secondary p-2">Home</li>
                            <li className="text-secondary p-2">Pricing</li>
                            <li className="text-secondary p-2">Download</li>
                            <li className="text-secondary p-2">About</li>
                            <li className="text-secondary p-2">Service</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="px-2 py-4">Support</li>
                            <li className="text-secondary p-2">FAQ</li>
                            <li className="text-secondary p-2">How It</li>
                            <li className="text-secondary p-2">Features</li>
                            <li className="text-secondary p-2">Contact</li>
                            <li className="text-secondary p-2">Reporting</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="px-2 py-4">Contact Us</li>
                            <li className="p-2 text-secondary">+880 12345678</li>
                            <li className="p-2 text-secondary">youremail@gmail.to</li>
                            <li className="p-2 text-secondary">Rangpur City</li>
                        </ul>
                        <p className="text-secondary">Terms of use | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </section>
        </>);
}