import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white text-[#4A4A4A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <img src="/WIPlogo.png" alt="WIP Academy" className="h-10" />
              </li>
              <li className="text-gray-600">contact@wip.academy</li>
              <li className="text-gray-600">07 71 80 02 78</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#FF6B35]">Suivez Nous</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF6B35]">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF6B35]">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF6B35]">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#FF6B35]">Modules</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formations/decouverte-web" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Les bases du développement web
                </Link>
              </li>
              <li>
                <Link to="/formations/no-code" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Les outils No-code
                </Link>
              </li>
              <li>
                <Link to="/formations/dev-web" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Le développement web React JS
                </Link>
              </li>
              <li>
                <Link to="/formations/dev-mobile" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Le développement mobile React Native
                </Link>
              </li>
              <li>
                <Link to="/formations/devops" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  L'infrastructure / DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#FF6B35]">Packages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formations/fullstack" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Développeur FullStack
                </Link>
              </li>
              <li>
                <Link to="/formations/web-mobile" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  Développeur Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/formations/rockstar" className="text-gray-600 hover:text-[#FF6B35] cursor-pointer">
                  RockStar
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} WIP Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;