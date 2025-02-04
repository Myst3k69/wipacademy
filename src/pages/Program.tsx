import React from 'react';
import { Code, Users, Rocket, Brain, Target, BookOpen } from 'lucide-react';

function Program() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-16">
          Programme de formation
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Modules */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8 flex items-center">
              <Code className="mr-3 h-6 w-6 text-[#FF6B35]" />
              Modules techniques
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Développement Web</h3>
                <p className="text-gray-600">Maîtrisez les technologies web modernes pour créer des applications performantes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Architecture logicielle</h3>
                <p className="text-gray-600">Apprenez à structurer votre code de manière professionnelle et maintenable</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Base de données</h3>
                <p className="text-gray-600">Concevez et implémentez une base de données adaptée à votre projet</p>
              </div>
            </div>
          </div>

          {/* Support Services */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8 flex items-center">
              <Users className="mr-3 h-6 w-6 text-[#FF6B35]" />
              Services d'accompagnement
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Coaching personnel</h3>
                <p className="text-gray-600">Suivi hebdomadaire pour vous guider dans votre progression</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Suivi de projet</h3>
                <p className="text-gray-600">Validation technique et accompagnement sur la faisabilité</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">Webinars thématiques</h3>
                <p className="text-gray-600">Marketing digital, financement, pitch, gestion de projet et plus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6 text-center">
            Formule personnalisable
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Choisissez les modules qui correspondent à vos besoins. Le tarif est adapté en fonction de vos choix de modules techniques et de services d'accompagnement.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#contact" className="inline-flex items-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors">
              Demander un devis personnalisé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;