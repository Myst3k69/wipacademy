import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Code, FileCode, Palette, Braces, GitBranch, BookOpen, Users, ClipboardCheck, GraduationCap, UserCheck, Brain, Layout as LayoutIcon } from 'lucide-react';
import Layout from '../../components/Layout';

function NoCode() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Les outils No-Code
          </h1>
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] px-4 py-2 rounded-full font-semibold text-sm">
              1 500 € • 3 MOIS • DISTANCIEL
            </span>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Formation No-Code"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Les outils NoCode ont envahi l'écosystème startup de par leur facilité de prise en main et leurs fonctionnalités rivalisant avec les technologies traditionnelles.
            </p>
            <p className="text-gray-600 mb-8">
              La formation no-code est accessible à toute personne souhaitant développer de nouvelles compétences. Apprenez à créer des applications web et mobiles sans écrire une seule ligne de code !
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
                Recevoir le programme
              </Link>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Le programme</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6">
                Notre formation No-Code vous permet de maîtriser les outils les plus populaires du marché pour créer des applications web et mobiles professionnelles sans coder.
              </p>
              <p className="text-gray-600">
                Vous apprendrez à utiliser des plateformes comme Webflow, Bubble, Airtable, Zapier et bien d'autres pour créer des applications complètes, des sites web dynamiques et des automatisations puissantes.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Outils et compétences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Webflow</h3>
                <p className="text-gray-600">Création de sites web professionnels</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Bubble</h3>
                <p className="text-gray-600">Applications web complexes</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <GitBranch className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Zapier</h3>
                <p className="text-gray-600">Automatisation des processus</p>
              </div>
            </div>
          </div>

          {/* Les 4 piliers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Les 4 piliers de la formation</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Une formation complète qui combine théorie et pratique pour vous rendre autonome dans la création d'applications no-code.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Cours en ligne</h3>
                <p className="text-gray-600">
                  Accédez à nos cours vidéo et ressources pédagogiques 24/7 pour apprendre à votre rythme.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Master Class</h3>
                <p className="text-gray-600">
                  Participez à des sessions live avec des experts du no-code qui partagent leurs meilleures pratiques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Coaching</h3>
                <p className="text-gray-600">
                  Bénéficiez d'un accompagnement personnalisé pour vous aider à progresser efficacement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
                <p className="text-gray-600">
                  Des points réguliers pour s'assurer que vous atteignez vos objectifs.
                </p>
              </div>
            </div>
          </div>

          {/* Pour qui */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Brain className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Entrepreneurs</h3>
                <p className="text-gray-600">
                  Créez rapidement votre MVP sans dépendre d'une équipe technique.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Product Managers</h3>
                <p className="text-gray-600">
                  Prototypez et testez vos idées sans attendre les développeurs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Créateurs</h3>
                <p className="text-gray-600">
                  Donnez vie à vos idées sans connaissances techniques préalables.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <LayoutIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Professionnels en reconversion</h3>
                <p className="text-gray-600">
                  Acquérez de nouvelles compétences recherchées sur le marché.
                </p>
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

export default NoCode;