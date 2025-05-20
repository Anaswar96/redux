import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Vzone</h3>
          <p className="text-sm text-[gray] mb-4">
        
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-[white]">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Support</h4>
          <ul className="space-y-1 text-sm text-[gray">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Connect</h4>
          <div className="flex space-x-4 text-[gray] text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[gray] mt-8">
        &copy; {new Date().getFullYear()} Vzone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
