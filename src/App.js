import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Accomplishments from './components/Accomplishments';
import Portfolio from './components/Portfolio';

function App() {
  return (<>
    <Header/>
    <LandingPage/>
    <Services/>
    <WhyUs/>
    <Accomplishments/>
    <Portfolio/>
    </>
  );
}

export default App;
