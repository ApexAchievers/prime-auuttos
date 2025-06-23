import { Menu, Search, User, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router";



export default function Navbar({ onToggle }) {
    return (
        <nav className="w-full bg-black text-white px-4 py-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Left: Menu + Logo */}
                <div className="flex items-center gap-4">
                    <button onClick={onToggle} className="p-2 rounded-full border border-white">
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-bold whitespace-nowrap">PRIME AUUTTOS</h1>
                </div>

                {/* Center: Search */}
                <div className="flex-grow max-w-2xl w-full">
                    <div className="flex bg-white rounded-md overflow-hidden">
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

                {/* Right: Icons */}
                <div className="flex items-center gap-4 whitespace-nowrap">
                    <Link to="/register" className="flex items-center gap-1">
                        <UserPlus className="w-6 h-6 bg-white text-black rounded-full p-1" />
                        <span className="text-sm">SignUp</span>
                    </Link>
                    <Link to="/login" className="flex items-center gap-1">
                        <User className="w-6 h-6 bg-white text-black rounded-full p-1" />
                        <span className="text-sm">Login</span>
                    </Link>
                    <ShoppingCart className="w-5 h-5" />
                </div>
            </div>
        </nav>

    );
}