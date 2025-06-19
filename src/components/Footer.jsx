export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Prime Auuttos</h2>
          <p className="text-sm text-gray-300">
            Your one-stop shop for quality auto parts and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/vendor-dashboard">Dashboard</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">support@primeauuttos.com</p>
          <p className="text-sm text-gray-300">+233 24 000 0000</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} AutoPartsPro. All rights reserved.
      </div>
    </footer>
  );
}
