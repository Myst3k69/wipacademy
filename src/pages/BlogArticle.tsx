import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';

function BlogArticle() {
  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-[#FF6B35]">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-[#FF6B35]">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Comment choisir son stack technique ?</span>
            </div>

            {/* Article Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-[#4A4A4A] mb-6">
                Comment choisir son stack technique ?
              </h1>
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>15 Mars 2024</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Par Thomas Dubois</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>Développement</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Stack technique"
              className="w-full h-96 object-cover rounded-xl mb-12"
            />

            {/* Article Content */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">Introduction</h2>
              <p className="text-gray-600 mb-8">
                Le choix d'une stack technique est une décision cruciale qui peut avoir un impact significatif sur le succès de votre projet. Dans cet article, nous allons explorer les différents facteurs à prendre en compte pour faire le bon choix.
              </p>

              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">1. Évaluer les besoins du projet</h2>
              <p className="text-gray-600 mb-4">
                Avant de choisir vos technologies, il est essentiel de bien comprendre :
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Les fonctionnalités clés de votre application</li>
                <li>L'échelle prévue et les besoins en performance</li>
                <li>Les contraintes techniques et budgétaires</li>
                <li>Les compétences disponibles dans votre équipe</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">2. Les critères de sélection</h2>
              <p className="text-gray-600 mb-8">
                Plusieurs facteurs doivent être pris en compte lors du choix de votre stack technique :
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">Maturité des technologies</h3>
                <p className="text-gray-600">
                  Privilégiez des technologies éprouvées avec une communauté active et une documentation complète.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">Scalabilité</h3>
                <p className="text-gray-600">
                  Assurez-vous que votre stack peut évoluer avec votre projet et supporter la croissance de vos utilisateurs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">Écosystème</h3>
                <p className="text-gray-600">
                  Évaluez la disponibilité des bibliothèques, des outils et des ressources pour chaque technologie.
                </p>
              </div>
            </div>

            {/* Author Bio */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Thomas Dubois"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#4A4A4A]">Thomas Dubois</h3>
                  <p className="text-gray-600">Expert en développement web et formateur chez WIP Academy. Passionné par les nouvelles technologies et l'entrepreneuriat.</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-gray-200 mt-12 pt-12">
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8">Articles similaires</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Article sur l'entrepreneuriat"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                      De l'idée au MVP : par où commencer ?
                    </h3>
                    <Link to="/blog/idee-au-mvp" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                      Lire la suite →
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                    alt="Article sur la cybersécurité"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                      Sécuriser son application web
                    </h3>
                    <Link to="/blog/securiser-application-web" className="text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12">
              <Link to="/blog" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogArticle;