import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToExternalForm } from '../utils/externalForm';
import { Icons } from '../utils/icons';

const ROICalculator: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');

  const [clinicName, setClinicName] = useState('');
  const [leadsMonth, setLeadsMonth] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [avgTicket, setAvgTicket] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

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

      conservativeAdditionalRevenue: conservativeAdditionalRevenue.toFixed(0),
      conservativeAnnualAdditional: conservativeAnnualAdditional.toFixed(0),
      conservativePaybackDays,
      conservativeROI,

      realisticProcedures: realisticIncrease.toFixed(1),
      realisticRevenue: realisticRevenue.toFixed(0),
      realisticAnnualAdditional: realisticAnnualAdditional.toFixed(0),
      realisticPaybackDays,
      realisticROI,
    };
  };

  const handleCalculate = () => {
    if (isFormValid) {
      setIsCalculating(true);

      setTimeout(() => {
        setShowResults(true);
        setIsCalculating(false);

        setTimeout(() => {
          document.getElementById('roi-results')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
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
Nós usamos esse mesmo ecossistema para rodar a Eucalyptus. Não é teoria - é o que funciona na prática todos os dias.

---

Gerado por Eucalyptus Solutions
${new Date().toLocaleDateString('pt-BR')}`;

    navigator.clipboard.writeText(copy);
    alert('Copy copiada! Cole no seu documento.');
  };

  return (
    <section
      ref={sectionRef}
      id="calculadora-roi"
      className="py-24 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-terracotta text-cream px-6 py-3 rounded-full mb-6">
            <Icons.TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Eucalyptus Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Quanto Você Está <span className="text-terracotta">Perdendo</span> Todo Mês?
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Descubra em 30 segundos quanto sua clínica perde por desorganização
          </p>
        </div>

        {/* Layout 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* COLUNA 1: Formulário */}
          <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-gold/60 h-fit animate-on-scroll delay-100">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">Dados da Clínica</h3>
            <div className="space-y-6">
              {/* Nome (opcional) */}
              <div>
                <label htmlFor="clinicName" className="block text-sm font-medium text-charcoal mb-2">
                  Nome da Clínica (opcional)
                </label>
                <input
                  id="clinicName"
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-smooth text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: Clínica Dra. Maria"
                />
              </div>

              {/* Leads/mês */}
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
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-smooth text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 150"
                  required
                />
                <p className="text-sm text-taupe mt-1">Instagram + WhatsApp</p>
              </div>

              {/* Taxa conversão */}
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
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-smooth text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 8"
                  required
                />
                <p className="text-sm text-taupe mt-1">De cada 100 leads, quantos viram pacientes?</p>
              </div>

              {/* Ticket médio */}
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
                  className="w-full px-4 py-3 bg-cream border border-taupe rounded-xl focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-smooth text-charcoal placeholder:text-taupe/60 focus:outline-none"
                  placeholder="Ex: 3500"
                  required
                />
                <p className="text-sm text-taupe mt-1">Valor médio de um procedimento</p>
              </div>

              {/* Botão Calcular */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid || isCalculating}
                className={`w-full font-semibold py-4 px-8 rounded-xl transition-smooth flex items-center justify-center gap-2 shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/20 ${
                  isFormValid && !isCalculating
                    ? 'bg-gradient-to-r from-terracotta to-gold text-cream hover:shadow-xl hover-lift'
                    : 'bg-taupe/30 text-taupe cursor-not-allowed'
                }`}
              >
                {isCalculating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Calculando...
                  </>
                ) : (
                  <>
                    <Icons.TrendingUp className="w-5 h-5" />
                    Calcular Meu Potencial
                  </>
                )}
              </button>
            </div>
          </div>

          {/* COLUNA 2: Resultados */}
          <div className="w-full flex flex-col" id="roi-results">
            {showResults && results ? (
              <div className="w-full flex flex-col space-y-6 animate-on-scroll">
                {/* Card Principal - Você Está Perdendo */}
                <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-terracotta">
                  <h3 className="text-xl font-bold text-terracotta mb-4 text-center">
                    💸 VOCÊ ESTÁ PERDENDO
                  </h3>

                  <div className="text-center mb-6">
                    <p className="text-4xl md:text-5xl font-extrabold text-charcoal mb-2">
                      R$ {parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </p>
                    <p className="text-lg text-terracotta font-semibold">por mês</p>
                  </div>

                  <div className="text-center pb-6 border-b-2 border-terracotta/30">
                    <p className="text-2xl font-bold text-taupe">
                      R$ {parseFloat(results.conservativeAnnualAdditional).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      <span className="text-lg font-normal"> /ano</span>
                    </p>
                  </div>

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
                </div>

                {/* Card - Com Eucalyptus */}
                <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-gold/60">
                  <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
                    ✅ COM EUCALYPTUS SOLUTIONS
                  </h3>

                  {/* Dois Cenários */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Conservador */}
                    <div className="bg-cream rounded-xl p-6 border border-gold/60 shadow-md card-hover">
                      <div className="text-center mb-4">
                        <span className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                          Cenário Conservador
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="text-center pb-3 border-b border-gold/50">
                          <p className="text-sm text-taupe mb-1">Receita Recuperada</p>
                          <p className="text-2xl font-bold text-terracotta">
                            +R$ {parseFloat(results.conservativeAdditionalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
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
                    </div>

                    {/* Realista */}
                    <div className="bg-gold/5 rounded-xl p-6 border-2 border-gold/60 shadow-md relative card-hover">
                      <div className="absolute -top-2 -right-2 bg-terracotta text-cream px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                        Mais comum
                      </div>

                      <div className="text-center mb-4">
                        <span className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                          Cenário Realista
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="text-center pb-3 border-b border-gold/50">
                          <p className="text-sm text-taupe mb-1">Receita Recuperada</p>
                          <p className="text-2xl font-bold text-terracotta">
                            +R$ {parseFloat(results.realisticRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
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
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={redirectToExternalForm}
                    className="w-full bg-terracotta text-cream font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-terracotta/90 hover:shadow-xl transition-smooth focus:outline-none focus:ring-4 focus:ring-terracotta/20 hover-lift"
                  >
                    Quero Recuperar Esse Dinheiro
                  </button>
                </div>

                {/* Botão Copiar */}
                <button
                  onClick={generateCopy}
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-cream font-semibold py-4 rounded-xl transition-smooth focus:outline-none focus:ring-4 focus:ring-charcoal/20 hover-lift"
                >
                  📋 Copiar Proposta Completa
                </button>

                {/* Skin in the Game */}
                <div className="bg-gold/20 border-2 border-gold/60 rounded-xl p-4">
                  <p className="text-sm text-charcoal">
                    <strong>💪 Skin in the Game:</strong> Nós usamos esse mesmo ecossistema para rodar a Eucalyptus.
                    Se não funcionasse, não venderia para você.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-cream rounded-2xl shadow-lg p-12 h-full flex items-center justify-center border-2 border-dashed border-gold/60 min-h-[500px]">
                <div className="text-center text-taupe">
                  <div className="text-8xl mb-6">📊</div>
                  <p className="text-lg">Preencha os dados para ver o potencial</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Premissas do Cálculo */}
        <section className="mt-20 py-12 animate-on-scroll delay-200">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-gold/30 p-12">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 text-taupe text-sm font-medium tracking-wide uppercase mb-3">
                  📊 Como calculamos
                </span>
                <h3 className="text-2xl font-semibold text-charcoal">Premissas do Cálculo</h3>
                <p className="text-taupe text-sm mt-2">
                  Baseado em dados reais do mercado de estética
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Conservador */}
                <div className="relative text-center">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-1 bg-terracotta rounded-full" />

                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-charcoal mb-4">Cenário Conservador</h4>
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
                </div>

                {/* Realista */}
                <div className="relative text-center">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-1 bg-gold rounded-full" />

                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-charcoal mb-4">Cenário Realista</h4>
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
                </div>
              </div>

              <p className="text-center text-xs text-taupe mt-8 italic">
                Dados baseados em análise de 200+ clínicas de estética em SP
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ROICalculator;
