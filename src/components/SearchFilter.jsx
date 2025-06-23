import { Search, Filter, X, ChevronDown } from "lucide-react";
import { Search, X } from "lucide-react";

export default function SearchFilter() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute top-3 left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* Filter Dropdown */}
      <select className="w-full sm:w-40 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
        <option value="all">All</option>
        <option value="vendors">Vendors</option>
        <option value="users">Users</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {/* Reset Button */}
      <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition">
        <X size={16} /> Reset
      </button>
    </div>
  );
}
