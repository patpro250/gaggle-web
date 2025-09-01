import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Niti Book</h3>
          <p>
            Empowering libraries in Rwanda with innovative tools and smart
            reading solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/f&q" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p>Email: gaggleniti@gmail.com</p>
          <p>Phone: +250 785 578 822</p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white">
              🌐
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white">
              🐦
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white">
              📸
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gaggleniti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
