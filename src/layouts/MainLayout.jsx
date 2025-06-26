import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ScrollToTop from '../components/ScrollToTop';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <ScrollToTop />

      {/* Pass toggle handler and ref to Navbar */}
      <Navbar
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleButtonRef={toggleButtonRef}
      />

      {/* Sidebar only rendered once and uses ref */}
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main content area that shifts with sidebar */}
      <div
        className={`p-4 pt-[96px] transition-all duration-300 ${
          isSidebarOpen ? 'ml-60' : 'ml-0'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
