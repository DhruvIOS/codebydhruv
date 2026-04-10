import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Portfolio from './Pages/Portfolio';
import Freelance from './Pages/Freelance';
import './index.css';
import { Helmet } from 'react-helmet-async';

function App() {
  const canonicalUrl = `https://www.codebydhruv.dev${window.location.pathname}`;

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Helmet>
            <link rel="canonical" href={canonicalUrl} />
          </Helmet>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/hire" element={<Freelance />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
