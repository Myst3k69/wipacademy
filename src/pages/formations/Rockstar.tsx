import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Server, Cloud, BookOpen, Users, ClipboardCheck, GraduationCap, UserCheck, Brain, Layout as LayoutIcon } from 'lucide-react';
import Layout from '../../components/Layout';

function Rockstar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Package RockStar
          </h1>
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] px-4 py-2 rounded-full font-semibold text-sm">
              5 000 € • 15 MOIS • DISTANCIEL
            </span>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Formation RockStar"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Devenez un expert technique complet capable de gérer tous les aspects du développement moderne.
            </p>
            <p className="text-gray-600 mb-8">
              Notre package le plus complet combine toutes nos formations pour une maîtrise totale du développement et du déploiement d'applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/je-postule"
                className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
              >
                Postuler
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Modules inclus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Les outils No-Code</h3>
                <p className="text-gray-600">
                  Prototypage et MVPs rapides.
                </p>
                <Link to="/formations/no-code" className="text-[#FF6B35] font-semibold mt-4 inline-block hover:text-[#ff8f35]">
                  Voir le détail →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Server className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Développement Web</h3>
                <p className="text-gray-600">
                  Applications web modernes.
                </p>
                <Link to="/formations/dev-web" className="text-[#FF6B35] font-semibold mt-4 inline-block hover:text-[#ff8f35]">
                  Voir le détail →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Développement Mobile</h3>
                <p className="text-gray-600">
                  Applications iOS et Android.
                </p>
                <Link to="/formations/dev-mobile" className="text-[#FF6B35] font-semibold mt-4 inline-block hover:text-[#ff8f35]">
                  Voir le détail →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Infrastructure / DevOps</h3>
                <p className="text-gray-600">
                  Déploiement et scalabilité.
                </p>
                <Link to="/formations/devops" className="text-[#FF6B35] font-semibold mt-4 inline-block hover:text-[#ff8f35]">
                  Voir le détail →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors text-lg"
            >
              J'ai une question !
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rockstar;