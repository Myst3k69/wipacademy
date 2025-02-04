import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import Layout from '../components/Layout';

function Blog() {
  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-16">
          Blog WIP Academy
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Article sur le développement web"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Comment choisir son stack technique ?
              </h2>
              <p className="text-gray-600 mb-4">
                Guide complet pour vous aider à choisir les technologies adaptées à votre projet.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/blog/choisir-stack-technique" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                  Lire la suite →
                </Link>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Développement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Article sur l'entrepreneuriat"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                De l'idée au MVP : par où commencer ?
              </h2>
              <p className="text-gray-600 mb-4">
                Les étapes clés pour transformer votre idée en un premier produit viable.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/blog/idee-au-mvp" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                  Lire la suite →
                </Link>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Entrepreneuriat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Article sur le financement"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Les sources de financement pour votre startup
              </h2>
              <p className="text-gray-600 mb-4">
                Panorama des différentes options de financement pour les startups tech.
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                Lire la suite →
              </a>
            </div>
          </div>
        </div>
        {/* Second Row of Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Article 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071901873-411886a10004"
              alt="Article sur le management"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Comment gérer une équipe de développeurs ?
              </h2>
              <p className="text-gray-600 mb-4">
                Les meilleures pratiques pour manager efficacement une équipe technique.
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                Lire la suite →
              </a>
            </div>
          </div>

          {/* Article 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
              alt="Article sur l'UI/UX"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Les principes clés du design UI/UX
              </h2>
              <p className="text-gray-600 mb-4">
                Guide complet pour créer des interfaces utilisateur intuitives et efficaces.
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                Lire la suite →
              </a>
            </div>
          </div>

          {/* Article 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Article sur la cybersécurité"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Sécuriser son application web
              </h2>
              <p className="text-gray-600 mb-4">
                Les bonnes pratiques de sécurité pour protéger votre application et vos utilisateurs.
              </p>
              <a href="#" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                Lire la suite →
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;