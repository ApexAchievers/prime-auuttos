import { Menu, Search, User, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router";



export default function Navbar({ onToggle }) {
    return (
        <div className="w-full py-6 bg-black text-white p-4 flex justify-between items-center">
            {/* Hamburger Icon */}
            <button onClick={onToggle} className="mr-4 block p-4 rounded-full hover:bg-gray-400">
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold  text-right pr-8 ml-26">PRIME AUUTTOS</h1>
            <div className="flex items-center w-full max-w-3xl bg-white rounded-md overflow-hidden">
                <input
                    type="text"
                    placeholder="Search for products and brands"
                    className="flex-grow px-4 py-2 text-black outline-none"
                />
                <button className="p-3 text-black">
                    <Search className="w-5 h-5" />
                </button>
            </div>

            <div className="space-x-4 flex items-center">
                <Link to="/register">
                    <div className="flex items-center space-x-2">
                        <UserPlus className="bg-white rounded-full text-black w-7 h-7 p-1.5" />
                        <h4>SignUp</h4>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="flex items-center space-x-2">
                        <User className=" text-black bg-white rounded-full p-1.5 w-7 h-7" />
                        <h4>Login</h4>
                    </div>
                </Link>

                <ShoppingCart className="w-5 h-5" />

            </div>
        </div>
    );
}


