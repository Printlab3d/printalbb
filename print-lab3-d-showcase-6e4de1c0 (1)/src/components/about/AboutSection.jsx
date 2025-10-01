
import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react'; // Removed Quote icon
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { number: "500+", label: t('projectsCompleted') },
    { number: "500+", label: t('happyClients') },
    { number: "3", label: t('coretech') },
    { number: "24/7", label: t('supportAvailable') }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('precisionEngineering'),
      description: t('precisionDesc')
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('innovationFirst'),
      description: t('innovationDesc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('clientCentered'),
      description: t('clientDesc')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('qualityAssured'),
      description: t('qualityDesc')
    }
  ];

  // Testimonials data has been removed

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {t('aboutPrintLab')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Company story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('shapingFuture')}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('companyStory1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('companyStory2')}
            </p>

            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="font-semibold">{t('polishQuality')}</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-600">
                <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
                <span className="font-semibold">{t('globalReach')}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center">
              <div className="text-8xl">🚀</div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('coreValues')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials section has been removed */}

      </div>
    </section>
  );
}
