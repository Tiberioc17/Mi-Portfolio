import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_eiixgbv',    
      'template_kc8971o',   
      formData,
      '9ENoo4WCE3uIvq1t7'          
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado! Me pondré en contacto contigo pronto.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Intenta de nuevo.'
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            <span className="text-indigo-700">Contáctame</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            ¿Tienes una oportunidad laboral? ¡Hablemos! Estoy disponible para colaboraciones y nuevos desafíos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto ">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <MapPin size={24} className="text-indigo-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Ubicación</h3>
                  <p className="text-gray-600">Bogotá Colombia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Mail size={24} className="text-indigo-700" />
                </div>
                <div className="ml-4 ">
                  <h3 className="text-lg font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">Carvajaltiberio1@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Phone size={24} className="text-indigo-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+57 3158619989</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium transition-all ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-indigo-800 hover:shadow-lg'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar mensaje <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div 
                    className={`mt-4 p-3 rounded-lg text-center ${
                      submitStatus.success 
                        ? 'bg-green-50 text-green-800' 
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;