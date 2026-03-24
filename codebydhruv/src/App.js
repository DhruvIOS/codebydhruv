import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Portfolio from './pages/Portfolio';
import Freelance from './pages/Freelance';
import './index.css';

function App() {
  return (
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
  );
}

export default App;
