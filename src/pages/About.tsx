import React from 'react';
import { Target, Users, Rocket, Brain } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-16">
          À propos de WIP Academy
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">
              Notre mission
            </h2>
            <p className="text-gray-600 mb-6">
              WIP Academy est née d'un constat simple : de nombreux entrepreneurs ont des idées innovantes mais sont freinés par les coûts de développement élevés des agences. Notre mission est de vous donner les compétences techniques nécessaires pour développer vous-même votre MVP et garder le contrôle de votre projet.
            </p>
            <p className="text-gray-600">
              En utilisant votre propre projet comme fil rouge de la formation, vous apprenez de manière concrète et pratique, tout en avançant sur le développement de votre application.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Formation WIP Academy"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">
            Les avantages de notre approche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[#4A4A4A] mb-2">Économique</h3>
              <p className="text-gray-600 text-sm">
                Réduisez significativement vos coûts de développement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[#4A4A4A] mb-2">Autonomie</h3>
              <p className="text-gray-600 text-sm">
                Maîtrisez les aspects techniques de votre projet
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[#4A4A4A] mb-2">Rapidité</h3>
              <p className="text-gray-600 text-sm">
                Lancez votre MVP dès la fin de la formation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[#4A4A4A] mb-2">Réseau</h3>
              <p className="text-gray-600 text-sm">
                Rejoignez une communauté d'entrepreneurs tech
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">
            Pour qui est cette formation ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Entrepreneurs avec un projet</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Vous avez une idée d'application innovante</li>
                <li>• Vous cherchez à réduire vos coûts de développement</li>
                <li>• Vous souhaitez garder le contrôle technique de votre projet</li>
                <li>• Vous êtes prêt à investir du temps pour apprendre</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Objectifs post-formation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Avoir un MVP fonctionnel de votre application</li>
                <li>• Être capable de pitcher techniquement votre projet</li>
                <li>• Pouvoir attirer des investisseurs et des associés</li>
                <li>• Maîtriser les bases du développement web</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;