import React, { useState } from 'react';

interface DiagnosticFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clinicName: '',
    ownerName: '',
    email: '',
    phone: '',
    monthlyPatients: '',
    mainChallenges: '',
    hasTeam: '',
    currentTools: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message and close modal
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-cream rounded-3xl max-w-2xl w-full p-8 lg:p-12 shadow-2xl animate-scaleIn">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-charcoal/50 hover:text-charcoal transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              Formulário de Pré-Diagnóstico
            </h3>
            <p className="text-taupe">
              Preencha os dados abaixo para descobrir como podemos ajudar sua clínica
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Clinic Name */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Nome da Clínica
                </label>
                <input
                  type="text"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                  placeholder="Clínica Exemplo"
                />
              </div>

              {/* Owner Name */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                  placeholder="Dr(a). Nome Sobrenome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Monthly Patients */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Pacientes por mês (aproximadamente)
                </label>
                <select
                  name="monthlyPatients"
                  value={formData.monthlyPatients}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="0-50">Menos de 50</option>
                  <option value="50-100">50 a 100</option>
                  <option value="100-200">100 a 200</option>
                  <option value="200-500">200 a 500</option>
                  <option value="500+">Mais de 500</option>
                </select>
              </div>

              {/* Has Team */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Possui equipe?
                </label>
                <select
                  name="hasTeam"
                  value={formData.hasTeam}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="no">Não, trabalho sozinho(a)</option>
                  <option value="small">Sim, 1-3 pessoas</option>
                  <option value="medium">Sim, 4-10 pessoas</option>
                  <option value="large">Sim, mais de 10 pessoas</option>
                </select>
              </div>
            </div>

            {/* Current Tools */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Quais ferramentas usa atualmente? (CRM, agendamento, etc.)
              </label>
              <input
                type="text"
                name="currentTools"
                value={formData.currentTools}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all"
                placeholder="Ex: WhatsApp, Google Agenda, Excel..."
              />
            </div>

            {/* Main Challenges */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Quais seus principais desafios hoje?
              </label>
              <textarea
                name="mainChallenges"
                value={formData.mainChallenges}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-taupe/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all resize-none"
                placeholder="Descreva brevemente os principais desafios que enfrenta na gestão da sua clínica..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-terracotta text-cream py-4 rounded-xl font-semibold hover:bg-terracotta/90 transition-all transform hover:scale-[1.02]"
              >
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticForm;