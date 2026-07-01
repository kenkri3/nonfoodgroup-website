import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-light border-b">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.address_label')}</h3>
                    <p className="text-gray-600">{t('contact.address')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.phone_label')}</h3>
                    <a href="tel:+4746742315" className="text-gray-600 hover:text-primary transition-colors">
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.email_label')}</h3>
                    <a href="mailto:post@nonfoodgroup.no" className="text-gray-600 hover:text-primary transition-colors">
                      {t('contact.email_value')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Åpningstider</h3>
                <p className="text-gray-600">Man–Fre: 08:00 – 16:00</p>
                <p className="text-gray-500 text-sm mt-1">Lørdag–Søndag: Stengt</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.form_title')}</h2>
              {submitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">{t('contact.success')}</h3>
                  <p className="text-green-600">
                    Vi vil kontakte deg så snart som mulig.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t('contact.send')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">La oss skreddersy en løsning for din bedrift</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Start samarbeidet i dag. Opprett kundekonto, få tilgang til hele sortimentet, 
            personlige prisavtaler og dedikert kundeservice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Se vårt sortiment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
