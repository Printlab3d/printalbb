import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../context/LanguageContext';

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Portfolio items with galleries
  const portfolioItems = [
    {
      id: 1,
      title: t('customKeychains'),
      category: "keychains",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      description: t('customKeychainsDesc'),
      gallery: [
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: t('corporateKeychains'),
      category: "keychains",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
      description: t('corporateKeychainsDesc'),
      gallery: [
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092918484-8313e1f7e8f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: t('displayStand'),
      category: "stands",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: t('displayStandDesc'),
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: t('arMenuSystem'),
      category: "digital",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: t('arMenuSystemDesc'),
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: t('allProjects') },
    { id: 'keychains', name: t('keychains') },
    { id: 'stands', name: t('smartStands') },
    { id: 'digital', name: t('digitalMenus') }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openGallery = (item) => {
    setSelectedGallery(item);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.gallery.length) % selectedGallery.gallery.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {t('innovationShowcase')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('portfolioDescription')}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-600 hover:text-blue-600 hover:border-blue-400"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay - always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        onClick={() => openGallery(item)}
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {t('view')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="max-w-5xl w-full">
            <div className="relative">
              <img
                src={selectedGallery.gallery[currentImageIndex]}
                alt={selectedGallery.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {selectedGallery.gallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {selectedGallery.gallery.length}
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedGallery.title}</h3>
              <p className="text-gray-300">{selectedGallery.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}