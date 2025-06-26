import { Home, Layers, PackageSearch, Phone } from 'lucide-react'
import { Link } from 'react-router';

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-[64px] left-0 z-40 h-[calc(100%-64px)] w-80 bg-black p-6 shadow-md overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

      <ul className="space-y-2 text-white font-medium ">
       <li className="flex items-center gap-2 "><Home size={18} /> Home</li>
         <Link to="/contact"><li className="flex items-center gap-2"><Phone size={18} /> Contact</li></Link>

         
         <Link to="/vendor-dashboard"><li className="flex items-center gap-2"><Phone size={18} /> Vendor Dashborad</li></Link>

        <li className="text-white mt-6 ">
          <div className="flex items-center gap-2 text-gray-600"><Layers size={18} /> Categories</div>
          <ul className="ml-6 mt-4 space-y-6 text-sm list-disc">

            <li><Link to="/body-exterior">Body & Exterior</Link></li>
            <li><Link to="/interior-component">Interior Components</Link></li>
            <li><Link to="/bike-accessories">Bike Parts & Accessories</Link></li>
            <li><Link to="/suspension-steering">Suspension & Steering</Link></li>
            <li><Link to="/breaking-system">Breaking Systems</Link></li>
            <li><Link to="/fluid-lubricants">Fluid & Lubricants</Link></li>
            <li><Link to="/cycling-essentials">Cycling Essentials</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/climate-comfort">Climate & Comfort</Link></li>
            <li><Link to="/battery-electricity">Electrical & Battery System</Link></li>
            <li><Link to="/light-indicators">Lighting & Indicators</Link></li>
            <li><Link to="/transmission-drivetrain">Transmission & Drivetrain</Link></li>
            <li><Link to="/engine-mechanical">Engine & Mechanical Components</Link></li>
          </ul>
        </li>
      </ul>
    </div>

  );
}













