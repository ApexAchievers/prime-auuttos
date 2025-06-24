
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="pt-[96px] p-4">
      <Outlet />
    </div>
  );
}


// import { useState, useRef, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import { Outlet } from 'react-router-dom';

// export default function MainLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   // useEffect(() => {
//   //   document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
//   // }, [isSidebarOpen]);

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsSidebarOpen(false);
//       }
//     }

//     if (isSidebarOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <div className="relative">
//       <div className="flex">
//         <div ref={sidebarRef}>
//           <Sidebar isOpen={isSidebarOpen} />
//         </div>
//         <div className="flex-1">
//           <Navbar onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
//         </div>
//       </div>
//       <div className={` pt-[96px] p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'
//         }`}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// }
