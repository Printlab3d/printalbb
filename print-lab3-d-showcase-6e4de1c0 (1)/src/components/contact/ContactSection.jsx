import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SendEmail } from '@/api/integrations';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await SendEmail({
        to: 'contact@printlab3d.eu',
        subject: `Contact Form: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t('messageSent')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('thankYou')}
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              {t('sendAnother')}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Mail className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">{t('getInTouch')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {t('letsCreate')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('connectWithUs')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{t('emailUs')}</h4>
                  <p className="text-blue-600 font-medium">contact@printlab3d.eu</p>
                  <p className="text-gray-600 text-sm">{t('responseTime')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{t('callUs')}</h4>
                  <p className="text-gray-600">{t('consultations')}</p>
                  <p className="text-gray-600 text-sm">{t('workingHours')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-green-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{t('visitUs')}</h4>
                  <p className="text-gray-600">{t('europeanUnion')}</p>
                  <p className="text-gray-600 text-sm">{t('scheduleAppointment')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('fullName')}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                    placeholder={t('fullName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('emailAddress')}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                  placeholder={t('subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors resize-none"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('sendingMessage')}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t('sendMessage')}
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}