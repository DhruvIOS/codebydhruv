import './App.css';
import LandingPage from './Components/LadingPage';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import { Helmet } from 'react-helmet-async';

function App() {
  const canonicalUrl = `https://www.codebydhruv.dev${window.location.pathname}`;

  return (
    <div className="App">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <LandingPage />
      <AboutMe />


      <Projects />

    </div>

  );
}

export default App;
