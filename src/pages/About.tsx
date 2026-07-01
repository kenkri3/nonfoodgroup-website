import { useTranslation } from 'react-i18next';
import { Award, Leaf, Lightbulb, Handshake, ArrowRight, Globe, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Award, title: t('about.quality'), desc: t('about.quality_desc') },
    { icon: Leaf, title: t('about.sustainability'), desc: t('about.sustainability_desc') },
    { icon: Lightbulb, title: t('about.innovation'), desc: t('about.innovation_desc') },
    { icon: Handshake, title: t('about.partnership'), desc: t('about.partnership_desc') },
  ];

  const stats = [
    { icon: Globe, value: 'Norge', label: 'Landsdekkende' },
    { icon: Users, value: '1000+', label: 'Produkter' },
    { icon: TrendingUp, value: '7', label: 'Bransjer' },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-light border-b">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl">{t('about.intro')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Vår historie</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('about.history')}</p>
              <h2 className="text-2xl font-bold mb-4">Vår visjon</h2>
              <p className="text-gray-600 leading-relaxed">{t('about.mission')}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold mb-6">NonFoodGroup i tall</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dark">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="text-gray-600 text-sm">
                  Med vårt landsdekkende distribusjonsnett og digitale bestillingsløsninger 
                  sikrer vi at du alltid har tilgang til riktige produkter når du trenger dem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('about.values_title')}</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Dette er verdiene som driver oss i arbeidet vårt hver eneste dag.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <val.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-2xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Bli en del av reisen</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Vi brenner for det vi gjør, og er ikke redde for å ta i et tak for å sikre at våre kunder 
              får det beste. Bli med oss på reisen mot en mer bærekraftig og innovativ fremtid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary text-lg">
                Utforsk sortimentet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
