import { Menu, Search, User, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router"; 

export default function Navbar({ onToggle, toggleButtonRef }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white p-4 shadow-md">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col w-full md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              {/* ✅ Correct use of ref and onClick */}
              <button
                ref={toggleButtonRef}
                onClick={onToggle}
                className="p-2 rounded-full border border-white"
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/">
              <h1 className="font-bold whitespace-nowrap text-lg md:text-xl transition-all">
                PRIME AUUTTOS
              </h1>
               </Link>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap md:hidden">
              <Link to="/register" className="flex items-center gap-1">
                <UserPlus className="w-6 h-6 bg-white text-black rounded-full p-1" />
                <span className="text-xs">SignUp</span>
              </Link>
              <Link to="/login" className="flex items-center gap-1">
                <User className="w-6 h-6 bg-white text-black rounded-full p-1" />
                <span className="text-xs">Login</span>
              </Link>
              <Link to="/cart-test">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center md:mx-4">
            <div className="flex bg-white rounded-md overflow-hidden w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for products and brands"
                className="flex-grow px-4 py-2 text-black outline-none"
              />
              <button className="p-3 text-black">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 whitespace-nowrap">
            <Link to="/register" className="flex items-center gap-1">
              <UserPlus className="w-6 h-6 bg-white text-black rounded-full p-1" />
              <span className="text-sm">SignUp</span>
            </Link>
            <Link to="/login" className="flex items-center gap-1">
              <User className="w-6 h-6 bg-white text-black rounded-full p-1" />
              <span className="text-sm">Login</span>
            </Link>
            <Link to="/cart-test">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="w-full md:hidden">
          <div className="flex bg-white rounded-md overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Search for products and brands"
              className="flex-grow px-4 py-2 text-black outline-none"
            />
            <button className="p-3 text-black">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
