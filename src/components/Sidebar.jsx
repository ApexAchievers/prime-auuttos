import { Home, Layers, PackageSearch, Phone } from 'lucide-react';

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-[96] left-0 z-30 h-[calc(100%-96px)] w-60 bg-black p-6 shadow-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <ul className="space-y-6 text-white font-medium mt-16">
        <li className="flex items-center gap-2"><Home size={18} /> Home</li>
        <li className="flex items-center gap-2"><PackageSearch size={18} /> Parts</li>
        <li className="flex items-center gap-2"><Layers size={18} /> Categories</li>
        <li className="flex items-center gap-2"><Phone size={18} /> Contact</li>
      </ul>
    </div>
  );
}





