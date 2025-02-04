import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Server, Database, Code, FileCode, Palette, Braces, GitBranch, Accessibility, Cloud, Rss, BookOpen, Users, ClipboardCheck, GraduationCap, UserCheck, Brain, Layout as LayoutIcon } from 'lucide-react';
import Layout from '../../components/Layout';

function DecouverteWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4A4A4A] mb-8">
            Découverte du Web
          </h1>
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] px-4 py-2 rounded-full font-semibold text-sm">
              GRATUIT • 2 MOIS • DISTANCIEL
            </span>
          </div>

          {/* Introduction Video/Image */}
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Formation Découverte du Web"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Introduction Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Le monde du Web vous intéresse, mais vous n'y connaissez rien? Vous décrochez quand vous entendez du vocabulaire geek?
            </p>
            <p className="text-gray-600 mb-8">
              Rejoignez notre cours "Découverte du Web" pour apprendre les bases du développement Web et découvrir si le domaine vous convient. Ce cours d'introduction est un excellent moyen de démarrer à votre propre rythme avant d'envisager un changement de carrière. Vous n'avez besoin d'aucune compétence ou qualification particulière pour accéder à ce cours. Il vous suffit d'un ordinateur et de remplir le formulaire suivant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/je-postule"
                className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
              >
                Postuler
              </Link>
              <Link 
                to="/formations/decouverte-web/programme"
                className="inline-flex items-center justify-center border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                Recevoir le programme de formation
              </Link>
            </div>
          </div>

          {/* Programme Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Le programme</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6">
                Notre programme est conçu pour vous donner un aperçu des bases du développement Web, y compris une introduction à HTML, CSS et JavaScript. Vous apprendrez les bases du développement Web, y compris comment utiliser des wireframes pour développer vos propres pages Web.
              </p>
              <p className="text-gray-600">
                L'objectif de ce cours en ligne gratuit est de vous fournir une série de cours, d'exercices et de quiz pour vous initier au codage et aux algorithmes de base. Vous pouvez commencer le cours de préparation à tout moment, le parcourir à votre rythme et en toute autonomie. A l'issue de cette formation d'initiation, vous disposerez des compétences nécessaires pour valider votre intérêt pour le développement web et entamer une formation complémentaire ou une reconversion professionnelle dans les secteurs du numérique.
              </p>
            </div>
          </div>

          {/* Compétences Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Des compétences clés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Web</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">HTTP</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Serveurs</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Noms de domaine</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <FileCode className="h-8 w-8 text-[#FF6B35]" />
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
                  <Braces className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">JavaScript</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Git</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Accessibility className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Accessibilité</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Hébergement</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Rss className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <span className="font-semibold text-[#4A4A4A]">Veille technologique</span>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Braces className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">JavaScript</h3>
                <p className="text-gray-600">Langage Informatique</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">HTML / CSS</h3>
                <p className="text-gray-600">Langage informatique</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <GitBranch className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">GIT</h3>
                <p className="text-gray-600">Outils de travail en équipe</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/je-postule"
                className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
              >
                Postuler
              </Link>
              <Link 
                to="/formations/decouverte-web/programme"
                className="inline-flex items-center justify-center border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                Recevoir le programme de formation
              </Link>
            </div>
          </div>

          {/* Formation orientée projets */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12">Une formation orientée projets</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Formation en groupe"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Apprentissage</h3>
                <p className="text-gray-600 mb-8">
                  Nous basons nos modules sur la réplication de sites web et d'applications mobiles du monde réel, afin de couvrir tous les concepts importants : authentification des utilisateurs, paiement en ligne…
                </p>

                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Travaillez sur votre projet</h3>
                <p className="text-gray-600 mb-8">
                  Vous pourrez participer à la réalisation de votre MVP (Minimum Viable Product) grâce à nos outils complémentaires. En effet, Work In Progress est la première entreprise à vous proposer des modules de formations ainsi que des outils permettant de vous accompagner dans la réalisation de votre propre projet.
                </p>
                <p className="text-gray-600 mb-8">
                  Vous avez une idée de projet ? Prenez le temps de discuter avec nos professionnels qui sont disponibles pour vous accompagner à la réalisation de votre MVP.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
                >
                  J'ai une question !
                </Link>
              </div>
            </div>
          </div>

          {/* Les 4 piliers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Les 4 piliers de la formation</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Des cours créés par des experts du digital à suivre 24h/24 et 7j/7 sur votre support favori, et tutorés pour vous accompagner vers la certification.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Cours en ligne</h3>
                <p className="text-gray-600">
                  Pour faciliter votre apprentissage, retrouvez tous nos cours 100% en ligne ! Pour cela, vous avez besoin d'un ordinateur et d'une connexion internet. Une flexibilité permettant d'apprendre d'ou vous souhaitez. Un seul objectif : faire de vous un développeur web compétent et autonome !
                </p>
              </div>

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
                  L'entrepreneuriat est une aventure solitaire ! Des coach spécialisés en porteurs de projets répondront à vos différentes questions et problématiques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-4">Suivi personnalisé</h3>
                <p className="text-gray-600">
                  L'objectif final de cet apprentissage est de réaliser votre projet. Pour avancer sur les bons rails, un rendez-vous chaque semaine afin de faire le point sur votre avancé…
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/je-postule"
                className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8f35] transition-colors"
              >
                Postuler
              </Link>
              <Link 
                to="/formations/decouverte-web/programme"
                className="inline-flex items-center justify-center border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                Recevoir le programme de formation
              </Link>
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

          {/* Final CTA */}
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

export default DecouverteWeb;