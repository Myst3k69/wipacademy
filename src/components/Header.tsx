import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';



function Header() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/WIPlogo.png" alt="WIP Academy" className="h-10" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#FF6B35]">Accueil</Link>
            <Link to="/pedagogie" className="text-gray-700 hover:text-[#FF6B35]">Pédagogie</Link>
            <Link to="/formations" className="text-gray-700 hover:text-[#FF6B35]">Formations</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#FF6B35]">Blog</Link>
            <Link to="/je-postule" className="px-2 py-[1px] text-sm rounded border-2 border-[#FF6B35] bg-[#FF6B35] text-white hover:bg-white hover:text-[#FF6B35] transition-colors duration-200 flex items-center">Je Postule</Link>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35]" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35]" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35]" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;