import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Brain, Code, BookOpen, Users, Rocket, Mail, Phone, Instagram, Facebook, Linkedin, Smartphone, Server, Database, Palette, GitBranch, Layout as LayoutIcon } from 'lucide-react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/WIPlogo.png" alt="WIP Academy" className="h-10" />
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

      {/* Hero Section */}
      <div className="bg-white text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Développez votre application avec expertise
              </h1>
              <div className="space-y-6 mb-8">
                <p className="text-xl">
                  Apprenez les compétences informatiques de demain, changez de carrière grâce à nos formations en développant votre propre projet !
                </p>
                <p className="text-xl">
                  Work In Progress vous propose des formations en développement Web et Mobile 100% digital. Cinq modules en ligne pour réaliser vos rêves.
                </p>
                <p className="text-xl">
                  Grâce à nos années d'expériences dans le domaine de la Tech, nos professionnels sont là pour vous accompagner lors de votre formation grâce à nos outils complémentaires (Master Class, Coaching et suivi ultra personnalisé).
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#formations" className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors whitespace-nowrap">
                  Découvrez nos formations
                </a>
                <a href="#contact" className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors whitespace-nowrap">
                  Commencez à apprendre gratuitement
                <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Formation en groupe"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gray-50" id="formations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Pourquoi rejoindre WIP Academy ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">
                Budget limité
              </h3>
              <p className="text-gray-600">
                Une alternative économique aux agences de développement coûteuses
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">
                Montée en compétences
              </h3>
              <p className="text-gray-600">
                Apprenez à développer et devenez autonome sur votre projet
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Code className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">
                Contrôle technique
              </h3>
              <p className="text-gray-600">
                Supervisez efficacement les développeurs qui interviendront sur votre projet
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">
                Compétences valorisables
              </h3>
              <p className="text-gray-600">
                Ajoutez une nouvelle corde à votre arc professionnel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="py-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">
                Notre approche pédagogique
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Code className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#4A4A4A]">Formation technique</h3>
                    <p className="mt-2 text-gray-600">
                      Développez votre MVP en utilisant votre projet comme fil rouge de la formation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#4A4A4A]">Coaching personnalisé</h3>
                    <p className="mt-2 text-gray-600">
                      Suivi hebdomadaire et validation de la faisabilité de votre projet
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Rocket className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#4A4A4A]">Webinars enrichissants</h3>
                    <p className="mt-2 text-gray-600">
                      Accès à des webinars sur le développement, marketing, financement et plus encore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Équipe WIP Academy"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Maîtriser les langages les plus demandés grâce à nos technologies enseignées
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">JavaScript</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">React.js</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">React Native</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">Node.js</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">HTML</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">CSS</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">MongoDB</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <GitBranch className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <span className="font-semibold text-[#4A4A4A]">Git</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pour qui */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Pour qui ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Porteur de projet</h3>
              <p className="text-gray-600">
                Que vous souhaitiez réaliser votre même votre produit ou encadrer d'autres personnes qui vont la réaliser, comprendre les enjeux tech est un élément fondamental
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Product Owner</h3>
              <p className="text-gray-600">
                Vous encadrez des équipes de développeurs mais sans toujours saisir les problématiques techniques soulevées.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Organismes d'accompagnement de porteurs de projets</h3>
              <p className="text-gray-600">
                Vous souhaitez intégrer une composante produit / technique à votre programme d'accompagnement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <LayoutIcon className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Chef de projet digital</h3>
              <p className="text-gray-600">
                Vous souhaitez être crédible auprès de vos équipes et proposer des solutions intégrant des composantes techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">
              Démarrez votre projet
            </h2>
            <p className="text-gray-600 mb-12">
              Choisissez les modules qui correspondent à vos besoins et votre budget. Formation 100% en distanciel.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="mailto:contact@wipacademy.fr" className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                contact@wipacademy.fr
              </a>
              <a href="tel:+33123456789" className="inline-flex items-center justify-center bg-[#4A4A4A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                +33 7 71 80 02 78
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;