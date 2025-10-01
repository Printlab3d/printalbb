
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    getQuote: 'Get Quote',
    
    // Hero Section
    heroTagline: 'Łączymy druk 3D i inteligentną technologię NFC, by pomysły stawały się rzeczywistością.',
    heroDescription: 'Transforming ideas into reality with cutting-edge 3D printing, smart NFC integration, and immersive digital experiences',
    exploreServices: 'Poznaj Nasze Usługi',
    watchDemo: 'Zobacz Nasze Produkty',
    keychains: '3D Keychains',
    keychainsDesc: 'Custom designs with NFC',
    smartStands: 'Stojak z NFC',
    smartStandsDesc: 'Interaktywna ekspozycja',
    digitalMenus: 'Digital Menus',
    digitalMenusDesc: 'AR food visualization',
    
    // Services
    ourServices: 'Our Services',
    technologyInnovates: 'Technology That Innovates',
    servicesDescription: 'Pasja do druku 3D spotyka się z NFC – efektem są breloki oraz stojaki, które zachwycają wyglądem i funkcjonalnością.',
    keychainsTitle: '3D Printed Keychains',
    keychainsFullDesc: 'Premium custom keychains with optional NFC technology integration for smart functionality',
    keychainsFeatures: ['Custom Design', 'NFC Integration', 'Durable Materials', 'Quick Production'],
    standsTitle: 'Stojak z NFC',
    standsFullDesc: 'Innovative display stands with built-in NFC chips for seamless digital interaction',
    standsFeatures: ['Touch-Free Interaction', 'Custom Programming', 'Elegant Design', 'Multiple Formats'],
    arMenusTitle: 'Digital AR Menus',
    arMenusFullDesc: 'Revolutionary dining experience with AR food visualization through camera scanning',
    arMenusFeatures: ['AR Visualization', 'Real-time Scanning', 'Interactive Menu', 'Enhanced Experience'],
    poweredByTech: 'Powered by Advanced Technology',
    techDescription: 'Our solutions integrate seamlessly with modern digital ecosystems, providing intuitive user experiences through the latest in 3D printing, NFC, and augmented reality technologies.',
    
    // Portfolio
    ourWork: 'Our Work',
    innovationShowcase: 'Innovation Showcase',
    portfolioDescription: 'Explore our latest projects and see how we\'re transforming industries with cutting-edge 3D printing and smart technology solutions',
    allProjects: 'All Projects',
    customKeychains: 'Breloki z NFC na Zamówienie',
    customKeychainsDesc: 'Premium branded keychains with embedded NFC technology',
    displayStand: 'Stojak NFC',
    displayStandDesc: 'Interaktywny ekspozytor informacji', // Updated
    arMenuSystem: 'System Menu AR',
    arMenuSystemDesc: 'Revolutionary dining experience with AR visualization',
    corporateKeychains: 'Breloki Firmowe',
    corporateKeychainsDesc: 'Bulk corporate keychains with custom branding',
    view: 'View',
    details: 'Details',
    
    // About
    aboutPrintLab: 'About PrintLab3D',
    aboutDescription: 'We are pioneers in the intersection of 3D printing technology and smart digital experiences. Our mission is to transform how people interact with marketing objects through innovative NFC integration and AR.',
    projectsCompleted: 'Projects Completed',
    happyClients: 'Happy Clients',
    coretech: 'Core Technologies',
    supportAvailable: 'Support Available',
    shapingFuture: 'Shaping the Future of Digital Interaction',
    companyStory1: 'Founded with a vision to bridge the gap between physical and digital worlds, PrintLab3D specializes in creating smart, interactive products that enhance user experiences through cutting-edge technology.',
    companyStory2: 'Our expertise spans custom 3D printing, NFC integration, and augmented reality solutions, enabling businesses to create memorable, engaging interactions with their customers.',
    polishQuality: 'Polska Jakość',
    globalReach: 'Global Reach',
    coreValues: 'Our Core Values',
    precisionEngineering: 'Precision Engineering',
    precisionDesc: 'Every product is crafted with meticulous attention to detail and cutting-edge precision technology.',
    innovationFirst: 'Innovation First',
    innovationDesc: 'We push the boundaries of what\'s possible with 3D printing and smart technology integration.',
    clientCentered: 'Client-Centered',
    clientDesc: 'Your vision drives our innovation. We collaborate closely to bring your ideas to life.',
    qualityAssured: 'Quality Assured',
    qualityDesc: 'Premium materials and rigorous testing ensure every product meets our highest standards.',
    
    // Contact
    getInTouch: 'Get In Touch',
    letsCreate: 'Let\'s Create Together',
    contactDescription: 'Ready to transform your ideas into reality? Get in touch with our team of experts and discover how we can help you innovate.',
    connectWithUs: 'Connect With Us',
    emailUs: 'Email Us',
    responseTime: 'We\'ll respond within 24 hours',
    callUs: 'Call Us',
    consultations: 'Available for consultations',
    workingHours: 'Monday - Friday, 9AM - 6PM CET',
    visitUs: 'Visit Us',
    europeanUnion: 'European Union',
    scheduleAppointment: 'Schedule an appointment',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    subject: 'Subject',
    subjectPlaceholder: 'How can we help you?',
    message: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    sendingMessage: 'Sending Message...',
    sendMessage: 'Send Message',
    messageSent: 'Message Sent!',
    thankYou: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
    sendAnother: 'Send Another Message',
    
    // Footer
    footerDescription: 'Przekształcamy pomysły w rzeczywistość.',
    customSolutions: 'Custom Solutions',
    company: 'Company',
    aboutUs: 'About Us',
    allRights: 'All rights reserved.',
    madeWithLove: 'Made with ❤️ in Europe'
  },
  
  pl: {
    // Header
    services: 'Usługi',
    portfolio: 'Portfolio',
    about: 'O Nas',
    contact: 'Kontakt',
    getQuote: 'Wycena',
    
    // Hero Section
    heroTagline: 'Łączymy druk 3D i inteligentną technologię NFC, by pomysły stawały się rzeczywistością.',
    heroDescription: 'Przekształcamy pomysły w rzeczywistość dzięki najnowocześniejszemu drukowi 3D, inteligentnej integracji NFC i immersyjnym doświadczeniom cyfrowym',
    exploreServices: 'Poznaj Nasze Usługi',
    watchDemo: 'Zobacz Nasze Produkty',
    keychains: 'Breloki 3D',
    keychainsDesc: 'Projekty na zamówienie z NFC',
    smartStands: 'Stojak z NFC',
    smartStandsDesc: 'Interaktywna ekspozycja',
    digitalMenus: 'Menu Cyfrowe',
    digitalMenusDesc: 'Wizualizacja jedzenia AR',
    
    // Services
    ourServices: 'Nasze Usługi',
    technologyInnovates: 'Technologia Która Wprowadza Innowacje',
    servicesDescription: 'Pasja do druku 3D spotyka się z NFC – efektem są breloki oraz stojaki, które zachwycają wyglądem i funkcjonalnością.',
    keychainsTitle: 'Breloki Drukowane 3D',
    keychainsFullDesc: 'Wysokiej jakości breloki na zamówienie z opcjonalną integracją technologii NFC dla inteligentnej funkcjonalności',
    keychainsFeatures: ['Projekt na Zamówienie', 'Integracja NFC', 'Trwałe Materiały', 'Szybka Produkcja'],
    standsTitle: 'Stojak z NFC',
    standsFullDesc: 'Innowacyjne stojaki wystawowe z wbudowanymi chipami NFC do bezproblemowej interakcji cyfrowej',
    standsFeatures: ['Interakcja Bezkontaktowa', 'Programowanie na Zamówienie', 'Elegancki Design', 'Różne Formaty'],
    arMenusTitle: 'Cyfrowe Menu AR',
    arMenusFullDesc: 'Rewolucyjne doświadczenie kulinarne z wizualizacją jedzenia AR poprzez skanowanie aparatem',
    arMenusFeatures: ['Wizualizacja AR', 'Skanowanie w Czasie Rzeczywistym', 'Interaktywne Menu', 'Ulepszone Doświadczenie'],
    poweredByTech: 'Zasilane Zaawansowaną Technologią',
    techDescription: 'Nasze rozwiązania integrują się płynnie z nowoczesnymi ekosystemami cyfrowymi, zapewniając intuicyjne doświadczenia użytkownika poprzez najnowsze technologie druku 3D, NFC i rzeczywistości rozszerzonej.',
    
    // Portfolio
    ourWork: 'Nasze Prace',
    innovationShowcase: 'Wystawa Innowacji',
    portfolioDescription: 'Poznaj nasze najnowsze projekty i zobacz, jak przekształcamy branże dzięki najnowocześniejszemu drukowi 3D i inteligentnym rozwiązaniom technologicznym',
    allProjects: 'Wszystkie Projekty',
    customKeychains: 'Breloki z NFC na Zamówienie',
    customKeychainsDesc: 'Wysokiej jakości breloki firmowe z wbudowaną technologią NFC',
    displayStand: 'Stojak NFC',
    displayStandDesc: 'Interaktywny ekspozytor informacji', // Updated
    arMenuSystem: 'System Menu AR',
    arMenuSystemDesc: 'Rewolucyjne doświadczenie kulinarne z wizualizacją AR',
    corporateKeychains: 'Breloki Firmowe',
    corporateKeychainsDesc: 'Hurtowe breloki firmowe z niestandardowym brandingiem',
    view: 'Zobacz',
    details: 'Szczegóły',
    
    // About
    aboutPrintLab: 'O PrintLab3D',
    aboutDescription: 'Jesteśmy pionierami na przecięciu technologii druku 3D i inteligentnych doświadczeń cyfrowych. Nasza misja to przekształcenie sposobu, w jaki ludzie wchodzą w interakcję z obiektami marketingowymi poprzez innowacyjną integrację NFC i AR.',
    projectsCompleted: 'Zrealizowanych Projektów',
    happyClients: 'Zadowolonych Klientów',
    coretech: 'Technologie Podstawowe',
    supportAvailable: 'Dostępne Wsparcie',
    shapingFuture: 'Kształtowanie Przyszłości Interakcji Cyfrowej',
    companyStory1: 'Założona z wizją wypełnienia luki między światem fizycznym a cyfrowym, PrintLab3D specjalizuje się w tworzeniu inteligentnych, interaktywnych produktów, które poprawiają doświadczenia użytkowników poprzez najnowocześniejszą technologię.',
    companyStory2: 'Nasza ekspertyza obejmuje niestandardowy druk 3D, integrację NFC i rozwiązania rzeczywistości rozszerzonej, umożliwiając firmom tworzenie niezapomnianych, angażujących interakcji z klientami.',
    polishQuality: 'Polska Jakość',
    globalReach: 'Globalny Zasięg',
    coreValues: 'Nasze Podstawowe Wartości',
    precisionEngineering: 'Precyzyjna Inżynieria',
    precisionDesc: 'Każdy produkt jest wykonany z drobiazgową dbałością o szczegóły i najnowocześniejszą technologią precyzji.',
    innovationFirst: 'Innowacja Przede Wszystkim',
    innovationDesc: 'Przesuwamy granice tego, co możliwe w druku 3D i integracji inteligentnych technologii.',
    clientCentered: 'Skoncentrowani na Kliencie',
    clientDesc: 'Twoja wizja napędza nasze innowacje. Współpracujemy ściśle, aby wcielić Twoje pomysły w życie.',
    qualityAssured: 'Gwarantowana Jakość',
    qualityDesc: 'Wysokiej jakości materiały i rygorystyczne testy zapewniają, że każdy produkt spełnia nasze najwyższe standardy.',
    
    // Contact
    getInTouch: 'Skontaktuj Się',
    letsCreate: 'Twórzmy Razem',
    contactDescription: 'Gotowy przekształcić swoje pomysły w rzeczywistość? Skontaktuj się z naszym zespołem ekspertów i odkryj, jak możemy pomóc Ci wprowadzać innowacje.',
    connectWithUs: 'Połącz Się z Nami',
    emailUs: 'Napisz do Nas',
    responseTime: 'Odpowiemy w ciągu 24 godzin',
    callUs: 'Zadzwoń do Nas',
    consultations: 'Dostępni na konsultacje',
    workingHours: 'Poniedziałek - Piątek, 9:00 - 18:00 CET',
    visitUs: 'Odwiedź Nas',
    europeanUnion: 'Unia Europejska',
    scheduleAppointment: 'Umów się na spotkanie',
    fullName: 'Imię i Nazwisko',
    emailAddress: 'Adres Email',
    subject: 'Temat',
    subjectPlaceholder: 'W czym możemy pomóc?',
    message: 'Wiadomość',
    messagePlaceholder: 'Opowiedz nam o swoim projekcie...',
    sendingMessage: 'Wysyłanie Wiadomości...',
    sendMessage: 'Wyślij Wiadomość',
    messageSent: 'Wiadomość Wysłana!',
    thankYou: 'Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.',
    sendAnother: 'Wyślij Kolejną Wiadomość',
    
    // Footer
    footerDescription: 'Przekształcamy pomysły w rzeczywistość.',
    customSolutions: 'Rozwiązania na Zamówienie',
    company: 'Firma',
    aboutUs: 'O Nas',
    allRights: 'Wszystkie prawa zastrzeżone.',
    madeWithLove: 'Stworzone z ❤️ w Europie'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
