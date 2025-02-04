import React from 'react';
import Layout from '../components/Layout';

function JePostule() {
  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Postulez à WIP Academy
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Remplissez le formulaire ci-dessous pour nous parler de votre projet et commencer votre formation.
          </p>

          <form className="space-y-6">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Informations personnelles</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  />
                </div>
              </div>
            </div>

            {/* Informations projet */}
            <div>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Votre projet</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du projet
                  </label>
                  <input
                    type="text"
                    id="project-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  />
                </div>
                <div>
                  <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description du projet
                  </label>
                  <textarea
                    id="project-description"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="formation-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Type de formation souhaité
                  </label>
                  <select
                    id="formation-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  >
                    <option value="">Sélectionnez une formation</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="custom">Formation sur mesure</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
            >
              Envoyer ma candidature
            </button>
          </form>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default JePostule;