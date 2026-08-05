import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../common/ScrollProgress';
import FloatingCTA from '../common/FloatingCTA';

export default function MainLayout() {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/client-portal');

  return (
    <div className="flex min-h-screen flex-col">
      {!isPortal && <ScrollProgress />}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      {!isPortal && <FloatingCTA />}
    </div>
  );
}
