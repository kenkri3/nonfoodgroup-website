import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              NONFOOD<span className="text-primary">GROUP</span>
            </h3>
            <p className="text-gray-300 mb-2">{t('footer.tagline')}</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.home')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.products')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                {t('contact.address')}
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                {t('contact.phone')}
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {t('contact.email_value')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          <p className="text-gray-500 text-sm">{t('footer.developed_by')} Vikingnet.no</p>
        </div>
      </div>
    </footer>
  );
}
