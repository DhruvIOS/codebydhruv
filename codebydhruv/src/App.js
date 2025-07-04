import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LadingPage';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      <LandingPage />

      <AboutMe />

    </div>
   
  );
}

export default App;
