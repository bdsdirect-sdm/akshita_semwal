import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Accomplishments from './components/Accomplishments';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (<>
    <Header/>
    <LandingPage/>
    <Services/>
    <WhyUs/>
    <Accomplishments/>
    <Portfolio/>
    <Footer/>
    </>
  );
}

export default App;
