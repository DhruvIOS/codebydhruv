import './App.css';
import LandingPage from './Components/LadingPage';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">

      <Navbar />
      <LandingPage />
      <AboutMe />


      <Projects />

    </div>

  );
}

export default App;
