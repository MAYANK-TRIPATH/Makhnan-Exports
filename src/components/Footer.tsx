import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:ml-24">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kesharwaniexports?utm_source=qr&igsh=NGg3bDk4dmVrOHRx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5zm10.7 2.25a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/kesharwani-exports-1b2150352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: keshariexports02@gmail.com</p>
            <p className="mb-2">Phone: +91 9452783490, 8696204335</p>
            <p>Address: Prayagraj, Uttar Pradesh</p>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

