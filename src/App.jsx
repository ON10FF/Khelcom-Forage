import { useState, lazy, Suspense } from 'react';
import './App.css';

// Components always loaded (small, needed immediately)
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// Pages loaded lazily for better initial bundle size
const Home         = lazy(() => import('./pages/Home.jsx'));
const AboutServices = lazy(() => import('./pages/AboutServices.jsx'));
const Contact      = lazy(() => import('./pages/Contact.jsx'));

// Simple loading fallback
function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
      <div style={{ textAlign: 'center', color: 'var(--color-gray)' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem', animation: 'spin 1s linear infinite' }}>⏳</div>
        <p style={{ fontSize: '0.9rem' }}>Chargement…</p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/**
 * App – root component.
 * Uses simple state-based navigation (no router library needed).
 */
function App() {
  // activePage can be: 'home' | 'about' | 'contact'
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutServices onNavigate={setActivePage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={setActivePage} />
      <WhatsAppButton />
    </>
  );
}

export default App;
