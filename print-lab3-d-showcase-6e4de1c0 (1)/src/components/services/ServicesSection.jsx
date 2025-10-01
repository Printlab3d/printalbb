import React from 'react';
import { Cpu, Smartphone, Camera, Zap, Layers, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: t('keychainsTitle'),
      description: t('keychainsFullDesc'),
      features: t('keychainsFeatures'),
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: t('standsTitle'),
      description: t('standsFullDesc'),
      features: t('standsFeatures'),
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: t('arMenusTitle'),
      description: t('arMenusFullDesc'),
      features: t('arMenusFeatures'),
      gradient: "from-cyan-600 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Zap className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">{t('ourServices')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {t('technologyInnovates')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="group">
              <div className="relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology showcase */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 rounded-3xl p-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <Layers className="w-8 h-8 text-blue-400" />
              <Wifi className="w-8 h-8 text-cyan-400" />
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('poweredByTech')}
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('techDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}