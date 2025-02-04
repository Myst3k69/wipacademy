import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, Database, FileCode, Palette, Braces, GitBranch, BookOpen, Users, ClipboardCheck, GraduationCap, UserCheck, Brain, Layout as LayoutIcon } from 'lucide-react';
import Layout from '../../components/Layout';

function DevWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Développement Web : Stack Javascript
          </h1>
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] px-4 py-2 rounded-full font-semibold text-sm">
              1 500 € • 4 MOIS • DISTANCIEL
            </span>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Formation Développement Web"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Devenez développeur web fullstack en maîtrisant JavaScript et ses frameworks les plus demandés sur le marché.
            </p>
            <p className="text-gray-600 mb-8">
              Cette formation vous donnera toutes les compétences nécessaires pour créer des applications web modernes, du front-end au back-end, en utilisant les technologies les plus populaires de l'écosystème JavaScript.
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
                Notre formation couvre l'ensemble du stack JavaScript moderne, vous permettant de devenir un développeur fullstack autonome.
              </p>
              <p className="text-gray-600">
                Vous apprendrez à créer des applications web complètes en utilisant React.js pour le front-end et Node.js pour le back-end, ainsi que les meilleures pratiques de l'industrie.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Technologies couvertes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Braces className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">React.js</h3>
                <p className="text-gray-600">Front-end moderne et réactif</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Server className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Node.js</h3>
                <p className="text-gray-600">Back-end JavaScript</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Database className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">MongoDB</h3>
                <p className="text-gray-600">Base de données NoSQL</p>
              </div>
            </div>
          </div>

          {/* Les 4 piliers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Les 4 piliers de la formation</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Une approche pratique et complète pour devenir développeur web fullstack.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Cours en ligne</h3>
                <p className="text-gray-600">
                  Des cours vidéo détaillés couvrant chaque aspect du développement web moderne.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Master Class</h3>
                <p className="text-gray-600">
                  Des sessions avec des développeurs expérimentés sur des sujets avancés.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Coaching</h3>
                <p className="text-gray-600">
                  Un suivi personnalisé pour vous aider à surmonter les obstacles techniques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
                <p className="text-gray-600">
                  Des revues de code régulières pour garantir votre progression.
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
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Débutants en programmation</h3>
                <p className="text-gray-600">
                  Aucune expérience préalable requise, juste de la motivation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Développeurs en reconversion</h3>
                <p className="text-gray-600">
                  Passez à JavaScript et aux technologies web modernes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Entrepreneurs</h3>
                <p className="text-gray-600">
                  Développez vous-même votre application web.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <LayoutIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Professionnels du web</h3>
                <p className="text-gray-600">
                  Montez en compétences sur les technologies modernes.
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

export default DevWeb;