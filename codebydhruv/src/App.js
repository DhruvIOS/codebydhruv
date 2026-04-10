import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Portfolio from './pages/Portfolio';
import Freelance from './pages/Freelance';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
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
