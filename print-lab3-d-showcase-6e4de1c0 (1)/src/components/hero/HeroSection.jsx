
import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: "🔑", title: t('keychains'), desc: t('keychainsDesc') },
    { icon: "📱", title: t('smartStands'), desc: t('smartStandsDesc') },
    { icon: "🍽️", title: t('digitalMenus'), desc: t('digitalMenusDesc') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            PrintLab
          </span>
          <span className="text-blue-400">3D</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          {t('heroTagline')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            {t('exploreServices')}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('portfolio')}
            className="w-full sm:w-auto border-2 border-blue-400 bg-blue-400/10 text-white hover:bg-blue-400/20 hover:border-blue-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm text-sm sm:text-base transition-all duration-300"
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            {t('watchDemo')}
          </Button>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
