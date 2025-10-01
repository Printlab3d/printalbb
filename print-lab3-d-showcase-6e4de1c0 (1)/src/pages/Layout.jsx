

import React from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguage } from './components/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This inner component can access the context provided by the parent
const AppLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cfe7df0d39f29d6e4de1c0/3b011ec77_printlab_oem.jpg" 
                  alt="PrintLab3D" 
                  className="h-6 sm:h-10 w-auto object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="font-black text-lg sm:text-xl text-gray-900">PrintLab3D</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t('portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t('contact')}
              </button>
              
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Languages className="h-4 w-4" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    🇬🇧 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('pl')}>
                    🇵🇱 Polski
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full shadow-lg shadow-blue-500/25"
              >
                {t('getQuote')}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-3 transition-colors text-lg"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-3 transition-colors text-lg"
              >
                {t('portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-3 transition-colors text-lg"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-3 transition-colors text-lg"
              >
                {t('contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex space-x-2 py-2">
                <Button 
                  variant={language === 'en' ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => changeLanguage('en')}
                  className="flex-1"
                >
                  🇬🇧 English
                </Button>
                <Button 
                  variant={language === 'pl' ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => changeLanguage('pl')}
                  className="flex-1"
                >
                  🇵🇱 Polski
                </Button>
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full py-3 text-lg font-semibold"
              >
                {t('getQuote')}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-14 sm:pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-xl p-2 flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cfe7df0d39f29d6e4de1c0/3b011ec77_printlab_oem.jpg" 
                    alt="PrintLab3D" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="font-black text-2xl">PrintLab3D</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                {t('footerDescription')}
              </p>
              <div className="text-blue-400 font-medium">
                contact@printlab3d.eu
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t('services')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">{t('keychains')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('smartStands')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('digitalMenus')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('customSolutions')}</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t('company')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors"
                  >
                    {t('aboutUs')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="hover:text-white transition-colors"
                  >
                    {t('portfolio')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors"
                  >
                    {t('contact')}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PrintLab3D. {t('allRights')}
            </div>
            <div className="text-gray-400 text-sm">
              {t('madeWithLove')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// The main export now wraps the AppLayout with the provider
export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <AppLayout>{children}</AppLayout>
    </LanguageProvider>
  );
}

