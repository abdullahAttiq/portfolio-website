import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Cursor from './components/Cursor';
import PageTransition from './components/PageTransition';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a tick for the target section to mount, then scroll to it.
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
        window.scrollTo(0, 0);
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <PageTransition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="/project" element={<Navigate to="/project/escrowly" replace />} />
      </Routes>
    </>
  );
}
