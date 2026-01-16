import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';
import DeliverySolution from './pages/DeliverySolution';
import FleetSolution from './pages/FleetSolution';
import Integration from './pages/Integration';
import './styles/global.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight - 20,
          behavior: 'smooth'
        });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/delivery-solution" element={<DeliverySolution />} />
        <Route path="/fleet-solution" element={<FleetSolution />} />
        <Route path="/integration" element={<Integration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
