import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, SprayCan, Droplets, Monitor, Shield, Check, Waves, Wifi, Server } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-light border-b">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Vi tilbyr mer enn bare produkter. Våre spesialiserte tjenester hjelper din bedrift med å opprettholde 
            høy standard på hygiene, renhold og digital tilstedeværelse.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <SprayCan className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('services.dyprens_title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('services.dyprens_desc')}</p>
              <div className="space-y-3">
                {[
                  'Effektiv fjerning av biologisk begroing på fasader, tak og uteområder',
                  'Green Cleaner (Alltid Rent) – vårt mest populære vaskemiddel for dyprens',
                  'Spesialrens for fjerning av harde mineralavleiringer og rust',
                  'Gjør gamle fuger som nye – fjerner belegg og misfarging',
                  'Impregnering: Standard, Super, Textil, Tre og Anti Graffiti',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <Shield className="w-16 h-16 text-primary/40 mb-4" />
                <h3 className="text-xl font-bold mb-2">Arita Construction</h3>
                <p className="text-gray-600">
                  Aritas produktutviklere har over 40 års erfaring i bransjen og har utviklet disse produktene 
                  på detaljnivå for å oppfylle de strengeste krav til resultat og holdbarhet.
                </p>
                <p className="text-primary font-medium mt-4 italic">
                  "Vi løser problemet, og vi har produktene for å bevare resultatet!"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
                <Waves className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Markedsledende teknologi</h3>
                <p className="text-gray-600">
                  Vår teknologi fjerner biofilm, bakterier og virus effektivt. Total desinfeksjon 
                  for både vannsystemer og overflater – helt uten bruk av klor.
                </p>
                <div className="mt-4 text-2xl font-bold text-blue-600">99,999%</div>
                <p className="text-sm text-gray-500">Eliminering av patogener og biofilm</p>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('services.vann_title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('services.vann_desc')}</p>
              <div className="space-y-3">
                {[
                  'Total desinfeksjon av overflater og systemer',
                  'Eliminerer 99,999% av patogener og biofilm',
                  'Ingen bruk av klor eller skadelige kjemikalier',
                  'Effektiv for både vannsystemer og overflater',
                  'Ideell for helseinstitusjoner, hotell og matproduksjon',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('services.web_title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('services.web_desc')}</p>
              <div className="space-y-3">
                {[
                  'Moderne og responsive nettløsninger',
                  'Trygg hosting og teknisk oppfølging',
                  'Skreddersydd etter din bedrifts behov',
                  'Profesjonell digital identitet',
                  'Lynrask ytelse og høy oppetid',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 lg:p-12">
                <Wifi className="w-16 h-16 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Vikingnet</h3>
                <p className="text-gray-600">
                  Vikingnet leverer skreddersydde nettløsninger og hosting som er skapt for fart og stabilitet. 
                  Vi sørger for at din digitale identitet alltid er profesjonell og tilgjengelig.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700">Hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700">Webdesign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ønsker du en uforpliktende samtale?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            La oss skreddersy en løsning for din bedrift. Vi tilbyr personlig oppfølging og konkurransedyktige priser.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Kontakt oss
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
