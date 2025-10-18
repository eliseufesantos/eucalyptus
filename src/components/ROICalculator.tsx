import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { redirectToExternalForm } from '../utils/externalForm';
import { Icons } from '../utils/icons';

const ROICalculator: React.FC = () => {
  const [clinicName, setClinicName] = useState('');
  const [leadsMonth, setLeadsMonth] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [avgTicket, setAvgTicket] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Validação: todos os campos obrigatórios preenchidos
  const isFormValid = leadsMonth && conversionRate && avgTicket;

  const calculateROI = () => {
    const leads = parseFloat(leadsMonth) || 0;
    const conversion = parseFloat(conversionRate) || 0;
    const ticket = parseFloat(avgTicket) || 0;

    const currentProcedures = (leads * conversion) / 100;
    const currentRevenue = currentProcedures * ticket;
    
    // Cenário Conservador
    const lostLeads = leads * 0.3;
    const recoverableProcedures = lostLeads * 0.1;
    const conservativeAdditionalRevenue = recoverableProcedures * ticket;
    const conservativeAnnualAdditional = conservativeAdditionalRevenue * 12;
    
    const investment = 25000;
    const conservativePaybackDays = Math.round((investment / conservativeAdditionalRevenue) * 30);
    const conservativeROI = Math.round((conservativeAdditionalRevenue / investment) * 100);

    // Cenário Realista
    const realisticConversion = conversion + 12;
    const realisticProcedures = (leads * realisticConversion) / 100;
    const realisticIncrease = realisticProcedures - currentProcedures;
    const realisticRevenue = realisticIncrease * ticket;
    const realisticAnnualAdditional = realisticRevenue * 12;
    const realisticPaybackDays = Math.round((investment / realisticRevenue) * 30);
    const realisticROI = Math.round((realisticRevenue / investment) * 100);

    return {
      leads,
      conversion,
      ticket,
      currentProcedures: currentProcedures.toFixed(1),
      currentRevenue: currentRevenue.toFixed(0),
      lostLeads: lostLeads.toFixed(0),
      recoverableProcedures: recoverableProcedures.toFixed(1),
      
      // Cenário Conservador
      conservativeAdditionalRevenue: conservativeAdditionalRevenue.toFixed(0),
      conservativeAnnualAdditional: conservativeAnnualAdditional.toFixed(0),
      conservativePaybackDays,
      conservativeROI,
      
      // Cenário Realista
      realisticProcedures: realisticIncrease.toFixed(1),
      realisticRevenue: realisticRevenue.toFixed(0),
      realisticAnnualAdditional: realisticAnnualAdditional.toFixed(0),
      realisticPaybackDays,
      realisticROI
    };
  };

  const handleCalculate = () => {
    if (isFormValid) {
      setIsCalculating(true);
      
      // Simula loading para melhor UX
      setTimeout(() => {
        setShowResults(true);
        setIsCalculating(false);
        
        // Scroll suave até os resultados
        setTimeout(() => {
          document.getElementById('roi-results')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      }, 800);
    }
  };

  const results = showResults ? calculateROI() : null;

  const generateCopy = () => {
    if (!results) return;

    const copy = `ANÁLISE ROI - ${clinicName || '[Nome da Clínica]'}

SITUAÇÃO ATUAL:
→ ${results.leads} leads/mês (Instagram + WhatsApp)
→ Taxa de conversão: ${results.conversion}%
→ Ticket médio: R$ ${parseFloat(avgTicket).toLocaleString('pt-BR')}
→ Procedimentos/mês: ${results.currentProcedures}
→ Receita mensal: R$ ${parseFloat(results.currentRevenue).toLocaleString('pt-BR')}

DIAGNÓSTICO:
Baseado na média do mercado, cerca de 30% dos leads não recebem atendimento adequado por desorganização operacional.

→ Leads perdidos/mês: ${results.lostLeads}
→ Potencial de conversão (10% conservador): ${results.recoverableProcedures} procedimentos
→ Receita sendo perdida/mês: R$ ${parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR')}
→ Receita perdida/ano: R$ ${parseFloat(results.conservativeAnnualAdditional).toLocaleString('pt-BR')}

ECOSSISTEMA EUCALYPTUS:
Sistema completo de automação inteligente:

✅ CRM Kommo personalizado
✅ IA conversacional 24/7
✅ Follow-up automático (zero lead esquecido)
✅ Notion com IA para gestão interna completa
✅ Anamnese digital (Zapsign)
✅ Dashboard em tempo real
✅ Treinamento completo da equipe
✅ 60 dias de suporte dedicado

INVESTIMENTO:
R$ 25.000 (pagamento único, sem mensalidade)

ROI PROJETADO:

CENÁRIO CONSERVADOR (recuperar 10% dos leads perdidos):
→ +${results.recoverableProcedures} procedimentos/mês
→ +R$ ${parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR')}/mês
→ Retorno do investimento: ${results.conservativePaybackDays} dias
→ ROI primeiro mês: ${results.conservativeROI}%

CENÁRIO REALISTA (aumento de 12% na conversão total):
→ +${results.realisticProcedures} procedimentos/mês
→ +R$ ${parseFloat(results.realisticRevenue).toLocaleString('pt-BR')}/mês
→ Lucro adicional no 1º ano: R$ ${parseFloat(results.realisticAnnualAdditional).toLocaleString('pt-BR')}

SKIN IN THE GAME:
Eu, Eliseu, uso esse mesmo ecossistema para rodar a Eucalyptus. Não é teoria - é o que funciona na prática todos os dias. Se não funcionasse para mim, não venderia para você.

---

Gerado por Eucalyptus Solutions
${new Date().toLocaleDateString('pt-BR')}`;

    navigator.clipboard.writeText(copy);
    alert('Copy copiada! Cole no seu documento.');
  };

  return (
    <motion.section 
      id="calculadora-roi"
      className="py-24 bg-cream"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header da Seção */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-terracotta text-cream px-6 py-3 rounded-full mb-6">
            <Icons.TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Eucalyptus Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">
            Quanto Você Está <span className="text-terracotta font-medium">Perdendo</span> Todo Mês?
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Descubra em 30 segundos quanto sua clínica perde por desorganização
          </p>
        </motion.div>

        {/* Layout Split View - 50% / 50% equilibrado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* COLUNA ESQUERDA - Formulário */}
          <motion.div 
            className="w-full bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[#edd08c]/60 h-fit"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-charcoal mb-6">Dados da Clínica</h3>
            <div className="space-y-6">
              {/* Campo: Nome da Clínica (opcional) */}
              <div>
                <label htmlFor="clinicName" className="block text-sm font-medium text-charcoal mb-2">
                  Nome da Clínica (opcional)
                </label>
                <input
                  id="clinicName"
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: Clínica Dra. Maria"
                  aria-label="Nome da clínica"
                />
              </div>

              {/* Campo: Leads por mês */}
              <div>
                <label htmlFor="leadsMonth" className="block text-sm font-medium text-charcoal mb-2">
                  <Icons.Users className="w-4 h-4 inline mr-2" />
                  Leads por mês *
                </label>
                <input
                  id="leadsMonth"
                  type="number"
                  value={leadsMonth}
                  onChange={(e) => setLeadsMonth(e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 150"
                  required
                  aria-label="Leads por mês"
                  aria-required="true"
                />
                <p className="text-sm text-taupe mt-1">Instagram + WhatsApp</p>
              </div>

              {/* Campo: Taxa de conversão */}
              <div>
                <label htmlFor="conversionRate" className="block text-sm font-medium text-charcoal mb-2">
                  <Icons.Target className="w-4 h-4 inline mr-2" />
                  Taxa de conversão atual (%) *
                </label>
                <input
                  id="conversionRate"
                  type="number"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 8"
                  required
                  aria-label="Taxa de conversão"
                  aria-required="true"
                />
                <p className="text-sm text-taupe mt-1">De cada 100 leads, quantos viram pacientes?</p>
              </div>

              {/* Campo: Ticket médio */}
              <div>
                <label htmlFor="avgTicket" className="block text-sm font-medium text-charcoal mb-2">
                  <Icons.DollarSign className="w-4 h-4 inline mr-2" />
                  Ticket médio (R$) *
                </label>
                <input
                  id="avgTicket"
                  type="number"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 3500"
                  required
                  aria-label="Ticket médio"
                  aria-required="true"
                />
                <p className="text-sm text-taupe mt-1">Valor médio de um procedimento</p>
              </div>

              {/* Botão Calcular */}
              <motion.button
                onClick={handleCalculate}
                disabled={!isFormValid || isCalculating}
                className={`w-full font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/20 ${
                  isFormValid && !isCalculating
                    ? 'bg-gradient-to-r from-terracotta to-gold text-cream hover:brightness-110 hover:shadow-xl'
                    : 'bg-taupe/30 text-taupe cursor-not-allowed'
                }`}
                whileHover={isFormValid && !isCalculating ? { scale: 1.02 } : {}}
                whileTap={isFormValid && !isCalculating ? { scale: 0.98 } : {}}
                aria-label="Calcular meu potencial"
              >
                {isCalculating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculando...
                  </>
                ) : (
                  <>
                    <Icons.TrendingUp className="w-5 h-5" />
                    Calcular Meu Potencial
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* COLUNA DIREITA - Resultados */}
          <div className="w-full flex flex-col" id="roi-results">
            {showResults && results ? (
              <motion.div 
                className="w-full flex flex-col space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Card Principal - VOCÊ ESTÁ PERDENDO */}
                <motion.div 
                  className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-terracotta"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-terracotta mb-4 text-center">
                    💸 VOCÊ ESTÁ PERDENDO
                  </h3>
                  
                  {/* Valor Principal */}
                  <motion.div 
                    className="text-center mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.p 
                      className="text-3xl md:text-4xl font-extrabold text-charcoal mb-2 leading-tight tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      R$ {parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </motion.p>
                    <p className="text-lg text-terracotta font-semibold">por mês</p>
                  </motion.div>

                  {/* Valor Anual */}
                  <div className="text-center pb-6 border-b-2 border-terracotta/30">
                    <p className="text-2xl font-bold text-taupe">
                      R$ {parseFloat(results.conservativeAnnualAdditional).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      <span className="text-lg font-normal"> /ano</span>
                    </p>
                  </div>

                  {/* Detalhes da Perda */}
                  <div className="mt-6 space-y-3 bg-white/60 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-taupe">Leads perdidos/mês:</span>
                      <span className="font-semibold text-lg text-terracotta">{results.lostLeads}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-taupe">Procedimentos recuperáveis:</span>
                      <span className="font-semibold text-lg text-terracotta">{results.recoverableProcedures}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Seção COM EUCALYPTUS SOLUTIONS */}
                <motion.div 
                  className="w-full bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[#edd08c]/60"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
                    ✅ COM EUCALYPTUS SOLUTIONS
                  </h3>

                  {/* Dois Cenários Lado a Lado */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Cenário Conservador */}
                    <motion.div 
                      className="bg-[#faf8f5] rounded-xl p-6 border border-[#edd08c]/60 shadow-md"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center mb-4">
                        <span className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                          Cenário Conservador
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-center pb-3 border-b border-[#edd08c]/50">
                          <p className="text-sm text-taupe mb-1">Receita Recuperada</p>
                          <p className="text-2xl font-bold text-terracotta">
                            +R$ {parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                          </p>
                          <p className="text-xs text-taupe">por mês</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-taupe">Payback:</span>
                          <span className="font-semibold text-terracotta">{results.conservativePaybackDays} dias</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-taupe">ROI 1º mês:</span>
                          <span className="font-bold text-lg text-terracotta">{results.conservativeROI}%</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Cenário Realista */}
                    <motion.div 
                      className="bg-[#edd08c]/5 rounded-xl p-6 border-2 border-[#edd08c]/60 shadow-md relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Badge "Mais Comum" */}
                      <div className="absolute -top-2 -right-2 bg-terracotta text-cream px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                        Mais comum
                      </div>
                      
                      <div className="text-center mb-4">
                        <span className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                          Cenário Realista
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-center pb-3 border-b border-[#edd08c]/50">
                          <p className="text-sm text-taupe mb-1">Receita Recuperada</p>
                          <p className="text-2xl font-bold text-terracotta">
                            +R$ {parseFloat(results.realisticRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                          </p>
                          <p className="text-xs text-taupe">por mês</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-taupe">Payback:</span>
                          <span className="font-semibold text-terracotta">{results.realisticPaybackDays} dias</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-taupe">ROI 1º mês:</span>
                          <span className="font-bold text-lg text-terracotta">{results.realisticROI}%</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Botão CTA Principal */}
                  <motion.button
                    onClick={redirectToExternalForm}
                    className="w-full bg-[#b87353] text-cream font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#a0654a] hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-terracotta/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Quero recuperar esse dinheiro"
                  >
                    Quero Recuperar Esse Dinheiro
                  </motion.button>
                </motion.div>

                {/* Botão Copiar Proposta */}
                <motion.button
                  onClick={generateCopy}
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-cream font-semibold py-4 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-charcoal/20"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Copiar proposta completa"
                >
                  📋 Copiar Proposta Completa
                </motion.button>

                {/* Skin in the Game */}
                <motion.div 
                  className="bg-[#edd08c]/20 border-2 border-[#edd08c]/60 rounded-xl p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <p className="text-sm text-charcoal">
                    <strong>💪 Skin in the Game:</strong> Eu uso esse mesmo ecossistema para rodar a Eucalyptus. 
                    Se não funcionasse, não venderia para você.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              // Placeholder quando não calculado - PERFEITO, NÃO MEXER
              <motion.div 
                className="bg-cream rounded-2xl shadow-lg p-12 h-full flex items-center justify-center border-2 border-dashed border-[#edd08c]/60 min-h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center text-taupe">
                  <div className="text-8xl mb-6">📊</div>
                  <p className="text-lg">Preencha os dados para ver o potencial</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Seção: Premissas do Cálculo - Elegante e Refinada */}
        <motion.section 
          className="mt-20 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Card com Glassmorphism */}
            <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-[#edd08c]/30 p-12">
            
            {/* Título Refinado */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-taupe text-sm font-medium tracking-wide uppercase mb-3">
                📊 Como calculamos
              </span>
              <h3 className="text-2xl font-semibold text-charcoal">
                Premissas do Cálculo
              </h3>
              <p className="text-taupe text-sm mt-2">
                Baseado em dados reais do mercado de estética
              </p>
            </div>
            
            {/* Grid 2 Colunas Elegante */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Cenário Conservador */}
              <motion.div 
                className="relative text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Badge Vertical Lateral */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-1 bg-terracotta rounded-full"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-4">
                    Cenário Conservador
                  </h4>
                  <ul className="space-y-3 inline-block text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        30% dos leads são mal atendidos (média mercado)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        Recuperamos 10% desses leads perdidos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        Base em estudos de conversão em estética
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Cenário Realista */}
              <motion.div 
                className="relative text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Badge Horizontal Superior (dourado para destacar) */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-1 bg-gold rounded-full"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-4">
                    Cenário Realista
                  </h4>
                  <ul className="space-y-3 inline-block text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        Aumento de 12% na taxa de conversão total
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        Baseado em cases reais de automação
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-sm text-charcoal leading-relaxed">
                        Follow-up estruturado + IA 24/7
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
            </div>
            
            {/* Nota de Rodapé */}
            <motion.p 
              className="text-center text-xs text-taupe mt-8 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Dados baseados em análise de 200+ clínicas de estética em SP
            </motion.p>
            
            </div>
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default ROICalculator;
