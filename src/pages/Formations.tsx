import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BookOpen, Code, Smartphone, Server, Rocket, Target, Brain, Users, Video, GraduationCap, UserCheck, ClipboardCheck, CheckCircle2, Wallet, School } from 'lucide-react';
import Layout from '../components/Layout';

function Formations() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#4A4A4A] mb-6">
              Work In Progress vous apprend les compétences de demain
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Nous offrons une variété de programmes de formation pour vous aider à devenir un développeur hautement qualifié. Notre formation s'adapte à votre profil et à votre projet.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En commençant par le début, vous pourrez choisir de bifurquer vers un autre parcours ou d'enchaîner les cours selon vos envies.
            </p>
          </div>
        </div>
      </div>

      {/* Individual Formations */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Nos formations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Découverte du web */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-[#FF6B35] mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">Découverte du web</h3>
                  <p className="text-[#FF6B35] font-semibold">Gratuit • 2 mois • Distanciel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Le monde du Web vous intéresse, mais vous n'y connaissez rien? Vous décrochez quand vous entendez du vocabulaire geek? Ce cours a pour objectif de vous mettre à niveau. Une chose importante que vous devez retenir : aucune connaissance préalable n'est requise !
              </p>
              <Link to="/formations/decouverte-web" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Outils No Code */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-[#FF6B35] mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">Outils No Code</h3>
                  <p className="text-[#FF6B35] font-semibold">1 500 € • 3 mois • Distanciel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Les outils NoCode ont envahi l'écosystème startup de par leur facilité de prise en main et leurs fonctionnalités rivalisant avec les technologies traditionnelles. La formation no-code est accessible à toute personne souhaitant développer de nouvelles compétences.
              </p>
              <Link to="/formations/no-code" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Développement Web */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-[#FF6B35] mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">Développement Web : Stack Javascript</h3>
                  <p className="text-[#FF6B35] font-semibold">1 500 € • 4 mois • Distanciel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Ce module de formation tourne autour du JavaScript et ses frameworks les plus plébiscités en entreprise. Cette formation vous assure des connaissances fullstack (front et back end), c'est à dire une totale autonomie sur la conception de votre applicatif.
              </p>
              <Link to="/formations/dev-web" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Développement Mobile */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-[#FF6B35] mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">Développement Mobile</h3>
                  <p className="text-[#FF6B35] font-semibold">1 500 € • 4 mois • Distanciel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Les smartphones, tablettes et autres appareils mobiles font partie de l'environnement quotidien et ouvrent sans cesse de nouvelles perspectives. Apprenez à créer des applications mobiles cross platform avec déploiement sur les stores.
              </p>
              <Link to="/formations/dev-mobile" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Infra / DevOps */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Server className="h-8 w-8 text-[#FF6B35] mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">Infra / DevOps</h3>
                  <p className="text-[#FF6B35] font-semibold">2 500 € • 4 mois • Distanciel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Le DevOps est le meilleur moyen de développer, de livrer et de maintenir des applications. Apprenez à créer une culture agile, réactive, orientée données, ainsi que les processus qui la soutiennent.
              </p>
              <Link to="/formations/devops" className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#ff8f35]">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Nos Packages - Découvrez nos modules de formation adaptés à votre projet !
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Développeur FullStack */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
              <div className="text-center mb-6">
                <Code className="h-12 w-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#4A4A4A]">Développeur FullStack</h3>
                <p className="text-[#FF6B35] font-semibold mt-2">2 500 € • 7 mois • Distanciel</p>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Outils No-Code
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Développement web
                </li>
              </ul>
              <Link to="/formations/fullstack" className="block text-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors mt-2.5">
                En savoir plus
              </Link>
            </div>

            {/* Développeur Web & Mobile */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
              <div className="text-center mb-6">
                <Smartphone className="h-12 w-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#4A4A4A]">Développeur Web & Mobile</h3>
                <p className="text-[#FF6B35] font-semibold mt-2">3 500 € • 11 mois • Distanciel</p>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Outils No-Code
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Développement web
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Développement mobile
                </li>
              </ul>
              <Link to="/formations/web-mobile" className="block text-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors mt-2.5">
                En savoir plus
              </Link>
            </div>

            {/* RockStar */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
              <div className="text-center mb-6">
                <Rocket className="h-12 w-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#4A4A4A]">RockStar</h3>
                <p className="text-[#FF6B35] font-semibold mt-2">5 000 € • 15 mois • Distanciel</p>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Outils No-Code
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Développement web
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Développement mobile
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                  Infra / DevOps
                </li>
              </ul>
              <Link to="/formations/rockstar" className="block text-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors mt-2.5">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils complémentaires */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">
              Nos outils complémentaires
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Accessible pour tous les niveaux, nous saurons vous aiguiller en vous apportant un soutien adapté pour réaliser vos objectifs !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Master Class</h3>
              <p className="text-gray-600 mb-6">
                Des professionnels aborderont des thématiques clés pour le développement de votre projet : SEO, développement agile, product design, financement, blockchain...
              </p>
              <p className="font-semibold text-[#FF6B35]">500 € - Accès illimité</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <UserCheck className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Coaching</h3>
              <p className="text-gray-600 mb-6">
                L'entrepreneuriat est une aventure solitaire ! Des coachs spécialisés en porteurs de projets répondront à vos différentes questions et problématiques.
              </p>
              <p className="font-semibold text-[#FF6B35]">500 € - 3 séances d'1h par Formation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
              <p className="text-gray-600 mb-6">
                L'objectif final de cet apprentissage est de réaliser votre projet. Pour avancer sur les bons rails, un rendez-vous chaque semaine afin de faire le point sur votre avancée.
              </p>
              <p className="font-semibold text-[#FF6B35]">1000€ à 2500€ - 20 à 60 séances selon la formation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            L'accès à la formation simplifiée
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Faîtes le choix d'une formation</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Choisissez une offre d'accompagnement</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Financement jusqu'à 100% avec le CPF</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">
              Vous êtes intéressé par d'autres formations ?
            </h2>
            <p className="text-gray-600">
              Nous collaborons avec les meilleurs experts en tech et nous pouvons créer des formations à la demande.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                />
              </div>
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
                Téléphone (facultatif)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet de la formation
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Autres
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
            >
              Merci
            </button>
          </form>
        </div>
      </div>

    </Layout>
  );
}

export default Formations;