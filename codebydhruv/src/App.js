import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LadingPage';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      <LandingPage />
      <AboutMe />


      <Projects />

    </div>
   
  );
}

export default App;
