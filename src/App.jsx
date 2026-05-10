import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
const LanyardSection = lazy(() => import('./components/LanyardSection'));
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className="app">
        <main>
          <div className="hero-lanyard-wrapper" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HeroSection />
            <Suspense fallback={null}>
              <LanyardSection />
            </Suspense>
          </div>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default App;
