import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Cloud, Database, Shield, GitBranch, Terminal, BookOpen, Users, ClipboardCheck, GraduationCap, UserCheck, Brain, Layout as LayoutIcon } from 'lucide-react';
import Layout from '../../components/Layout';

function DevOps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Infrastructure / DevOps
          </h1>
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] px-4 py-2 rounded-full font-semibold text-sm">
              2 500 € • 4 MOIS • DISTANCIEL
            </span>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="Formation DevOps"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Maîtrisez les pratiques DevOps et l'infrastructure cloud moderne.
            </p>
            <p className="text-gray-600 mb-8">
              Apprenez à mettre en place et gérer des infrastructures cloud scalables, à automatiser les déploiements et à implémenter des pratiques DevOps modernes pour optimiser le cycle de développement logiciel.
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
                Notre formation DevOps couvre l'ensemble des pratiques et outils modernes nécessaires pour gérer efficacement l'infrastructure et les déploiements.
              </p>
              <p className="text-gray-600">
                Vous apprendrez à utiliser les principaux outils cloud, à mettre en place des pipelines CI/CD, à gérer des conteneurs avec Docker et Kubernetes, et à implémenter des pratiques de sécurité et de monitoring.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Technologies couvertes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Cloud Computing</h3>
                <p className="text-gray-600">AWS, Google Cloud, Azure</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Terminal className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">CI/CD</h3>
                <p className="text-gray-600">Jenkins, GitLab CI, GitHub Actions</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Sécurité</h3>
                <p className="text-gray-600">DevSecOps et bonnes pratiques</p>
              </div>
            </div>
          </div>

          {/* Les 4 piliers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Les 4 piliers de la formation</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Une formation complète pour devenir un expert DevOps.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Cours en ligne</h3>
                <p className="text-gray-600">
                  Des cours détaillés sur les pratiques DevOps et l'infrastructure cloud.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Master Class</h3>
                <p className="text-gray-600">
                  Des sessions avec des experts DevOps sur des cas pratiques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Coaching</h3>
                <p className="text-gray-600">
                  Un accompagnement personnalisé sur vos projets d'infrastructure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
                <p className="text-gray-600">
                  Des revues régulières de vos configurations et déploiements.
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
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Développeurs</h3>
                <p className="text-gray-600">
                  Évoluez vers des rôles DevOps et SRE.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Administrateurs systèmes</h3>
                <p className="text-gray-600">
                  Modernisez vos compétences avec le cloud et DevOps.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Tech Leads</h3>
                <p className="text-gray-600">
                  Implémentez des pratiques DevOps dans votre équipe.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <LayoutIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Architectes cloud</h3>
                <p className="text-gray-600">
                  Approfondissez vos connaissances en infrastructure moderne.
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

export default DevOps;