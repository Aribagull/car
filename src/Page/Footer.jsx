import { FaFacebookF, FaInstagram, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../Assets/Logo/logo-2-retina.webp"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between px-10 py-16">
        <div>
        <img src={logo} className="w-32" />
          <p className="text-sm leading-relaxed mt-7 w-80">
            Ignissimos ducimus qui blanditiis prae sentium voluptatum deleniti.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Office</h3>
          <p className="text-sm">Germany —</p>
          <p className="text-sm">785 15h Street, Office 478,</p>
          <p className="text-sm mb-3">Berlin, De 81566</p>

          <a href="mailto:info@email.com" className="block text-sm underline mb-2">
            info@email.com
          </a>
          <p className="text-sm font-semibold text-white">+1 840 841 25 69</p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 border border-gray-500 rounded-md hover:bg-gray-800"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-500 rounded-md hover:bg-gray-800"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-500 rounded-md hover:bg-gray-800"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-500 rounded-md hover:bg-gray-800"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mx-24"></div>
      <div className="mx-24 text-base text-gray-200 py-4">
        ThemeREX © 2025. All rights reserved.
      </div>
    </footer>
  );
}
