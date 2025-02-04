import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#4A4A4A] mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-gray-600">
            Prenez contact avec nous pour discuter de vos besoins et découvrir comment WIP Academy peut vous aider à concrétiser votre projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8">
              Contactez-nous
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Email</h3>
                  <a href="mailto:contact@wipacademy.fr" className="text-gray-600 hover:text-[#FF6B35]">
                    contact@wipacademy.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Téléphone</h3>
                  <a href="tel:+33123456789" className="text-gray-600 hover:text-[#FF6B35]">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-[#FF6B35] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-[#4A4A4A]">Réseaux sociaux</h3>
                  <div className="space-y-2 mt-2">
                    <a href="#" className="block text-gray-600 hover:text-[#FF6B35]">LinkedIn</a>
                    <a href="#" className="block text-gray-600 hover:text-[#FF6B35]">Twitter</a>
                    <a href="#" className="block text-gray-600 hover:text-[#FF6B35]">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-8">
              Demande d'information
            </h2>
            <form className="space-y-6">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
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
                Envoyer
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );


export default Contact;