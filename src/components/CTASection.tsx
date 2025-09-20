import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  clinic: string;
  email: string;
  phone: string;
  city: string;
  specialty: string;
  message: string;
}

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    clinic: '',
    email: '',
    phone: '',
    city: '',
    specialty: 'harmonizacao',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-purple-950 to-purple-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-gradient from-purple-500/20 via-transparent to-transparent opacity-40" />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transforme Sua Clínica Agora
          </h2>
          <p className="text-xl text-gray-300 opacity-90">
            Preencha o formulário e receba uma consultoria gratuita para descobrir como podemos multiplicar seus resultados
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 lg:p-12 rounded-3xl border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-medium">
                Seu Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                placeholder="Dr(a). João Silva"
              />
            </div>
            <div>
              <label htmlFor="clinic" className="block text-white mb-2 font-medium">
                Nome da Clínica *
              </label>
              <input
                type="text"
                id="clinic"
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                placeholder="Clínica Exemplo"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-medium">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2 font-medium">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                placeholder="(11) 98765-4321"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="city" className="block text-white mb-2 font-medium">
                Cidade/Estado *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                placeholder="São Paulo - SP"
              />
            </div>
            <div>
              <label htmlFor="specialty" className="block text-white mb-2 font-medium">
                Especialidade Principal *
              </label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
              >
                <option value="harmonizacao">Harmonização Facial</option>
                <option value="ortodontia">Ortodontia</option>
                <option value="implantes">Implantes</option>
                <option value="estetica">Estética Dental</option>
                <option value="geral">Clínica Geral</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2 font-medium">
              Conte mais sobre seus desafios atuais
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 resize-none"
              placeholder="Descreva brevemente seus principais desafios e objetivos..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4 rounded-xl text-lg font-bold hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            Solicitar Consultoria Gratuita
          </button>
          
          <p className="text-gray-300 opacity-80 text-sm text-center mt-4">
            🔒 Suas informações estão seguras. Não enviamos spam.
          </p>
        </form>
      </div>
    </section>
  );
};

export default CTASection;