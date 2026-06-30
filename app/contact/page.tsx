import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Mail className="w-4 h-4" /> Contact
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Contactez-nous
              </h1>
              <p className="text-gray-600 text-lg">
                Une question, une suggestion ? Notre équipe est là pour vous répondre.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Envoyer <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@nyvoliko.mg</p>
                    <p className="text-gray-500 text-sm">Réponse sous 24h</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+261 34 00 000 00</p>
                    <p className="text-gray-500 text-sm">Lun-Ven 8h-17h</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-brand-highlight flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">Antananarivo 101, Madagascar</p>
                    <p className="text-gray-500 text-sm">Siège social</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-gray-600">Lundi au Vendredi : 8h - 17h</p>
                    <p className="text-gray-500 text-sm">Samedi : 9h - 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
