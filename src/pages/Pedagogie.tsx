import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, BookOpen, ClipboardCheck, Users, Video, Laptop, Users2, GraduationCap, CalendarClock, MessagesSquare, FileCheck, Award, UserCheck, PlaySquare } from 'lucide-react';
import Layout from '../components/Layout';

function Pedagogie() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Une pédagogie adaptée pour vous donner la meilleure expérience durant votre apprentissage
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            La formation à distance est au cœur de notre méthodologie. Notre format d'enseignement à distance permet aux apprenants d'être dans le meilleur état d'esprit possible pour apprendre : des formations disponible 24/24 et 7j/7 sur votre support favori, des étudiants au fur et à mesure qu'ils progressent vers leurs objectifs. Tous disponibles à partir de l'ordinateur personnel de l'étudiant dans un environnement pratique et détendu.
          </p>
        </div>
      </div>

      {/* Formation 100% Digital */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6 flex items-center">
                <Laptop className="h-8 w-8 text-[#FF6B35] mr-3" />
                Formation 100% Digital
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Apprenez d'où vous voulez, comme vous le voulez !
              </p>
              <p className="text-gray-600 mb-6">
                Être à la maison est un endroit confortable et productif pour de nombreuses personnes. C'est pourquoi Work In Progress offre des opportunités d'apprentissage à distance aux étudiants qui souhaitent devenir développeurs Web mais qui sont trop occupés par leurs obligations scolaires, professionnelles ou familiales pour suivre des cours en présentiel.
              </p>
              <p className="text-gray-600">
                Un programme de formation qui ne nécessite rien de plus qu'un ordinateur en bon état de fonctionnement et une connexion Internet haut débit.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Formation digitale"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Communauté */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Communauté d'apprenants"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6 flex items-center">
                <Users2 className="h-8 w-8 text-[#FF6B35] mr-3" />
                Une communauté soudée
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Work In Progress est avant tout un travail d'équipe, les efforts conjugués de chaque élève au profit de tous. Les élèves sont invités à communiquer entre eux, à partager une tâche et à s'entraider.
                </p>
                <p>
                  De jour comme de soir, en semaine ou le week-end, l'étudiant n'est jamais seul : il est constamment en contact avec la communauté.
                </p>
                <p>
                  Ce format très permissif vous aidera à transformer votre expérience d'apprentissage en une aventure passionnante. Fini le temps des professeurs et des cours ennuyeux, il est maintenant temps de s'amuser et d'apprendre en s'impliquant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accompagnement */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-6">
            Un accompagnement sur-mesure
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Work In Progress n'est pas qu'une plateforme en ligne proposant des formations au développement web et mobile. Nous sommes là pour vous aider à faire de vos rêves une réalité !
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Master Class</h3>
              <p className="text-gray-600">
                Des professionnels aborderont des thématiques clés pour le développement de votre projet : le référencement (SEO), le développement agile de projets digitaux, product design : UI / UX / Design Thinking / Growth Hacking, comment financer votre innovation, comment lever des fonds grâce à la blockchain…
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <UserCheck className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Coaching</h3>
              <p className="text-gray-600">
                L'entrepreneuriat est une aventure solitaire ! Nos coachs spécialisés en accompagnement de porteurs de projets sont là pour vous guider, vous motiver et vous aider à surmonter les obstacles. Ils vous apportent leur expertise, leur réseau et leur expérience pour vous aider à concrétiser votre projet. Des sessions hebdomadaires personnalisées vous permettent d'avancer efficacement et de rester focalisé sur vos objectifs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
              <p className="text-gray-600">
                L'objectif final de cet apprentissage est de réaliser votre projet. Pour avancer sur les bons rails, un rendez-vous chaque semaine afin de faire le point sur votre avancée…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plateforme collaborative */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4A4A4A] mb-16">
            Plateforme collaborative
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Agenda partagé</h3>
                  <p className="text-gray-600">Rendez-vous coaching et suivi personnalisé</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessagesSquare className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Messagerie</h3>
                  <p className="text-gray-600">Interaction directe avec les formateurs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Exercices pratiques</h3>
                  <p className="text-gray-600">Mise en pratique des concepts appris</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Évaluations</h3>
                  <p className="text-gray-600">Quiz, certificats et validations</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Points individuels</h3>
                  <p className="text-gray-600">Suivi personnalisé de votre progression</p>
                </div>
              </div>
              <div className="flex items-start">
                <PlaySquare className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Webinars</h3>
                  <p className="text-gray-600">Sessions en direct et replays disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8">
              Envie d'en savoir plus ?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors">
                J'ai une question !
              </Link>
              <Link to="/formations" className="inline-flex items-center justify-center bg-white border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
                Voir nos formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pedagogie;