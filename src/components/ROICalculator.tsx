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

  const calculateROI = () => {
    const leads = parseFloat(leadsMonth) || 0;
    const conversion = parseFloat(conversionRate) || 0;
    const ticket = parseFloat(avgTicket) || 0;

    const currentProcedures = (leads * conversion) / 100;
    const currentRevenue = currentProcedures * ticket;
    
    const lostLeads = leads * 0.3;
    const recoverableProcedures = lostLeads * 0.1;
    const additionalRevenue = recoverableProcedures * ticket;
    const annualAdditional = additionalRevenue * 12;
    
    const investment = 25000;
    const paybackDays = Math.round((investment / additionalRevenue) * 30);
    const roi = Math.round((additionalRevenue / investment) * 100);

    const optimisticConversion = conversion + 12;
    const optimisticProcedures = (leads * optimisticConversion) / 100;
    const optimisticIncrease = optimisticProcedures - currentProcedures;
    const optimisticRevenue = optimisticIncrease * ticket;

    return {
      leads,
      conversion,
      ticket,
      currentProcedures: currentProcedures.toFixed(1),
      currentRevenue: currentRevenue.toFixed(0),
      lostLeads: lostLeads.toFixed(0),
      recoverableProcedures: recoverableProcedures.toFixed(1),
      additionalRevenue: additionalRevenue.toFixed(0),
      annualAdditional: annualAdditional.toFixed(0),
      paybackDays,
      roi,
      optimisticProcedures: optimisticIncrease.toFixed(1),
      optimisticRevenue: optimisticRevenue.toFixed(0)
    };
  };

  const handleCalculate = () => {
    if (leadsMonth && conversionRate && avgTicket) {
      setShowResults(true);
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
→ Receita sendo perdida/mês: R$ ${parseFloat(results.additionalRevenue).toLocaleString('pt-BR')}
→ Receita perdida/ano: R$ ${parseFloat(results.annualAdditional).toLocaleString('pt-BR')}

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
→ +R$ ${parseFloat(results.additionalRevenue).toLocaleString('pt-BR')}/mês
→ Retorno do investimento: ${results.paybackDays} dias
→ ROI primeiro mês: ${results.roi}%

CENÁRIO REALISTA (aumento de 12% na conversão total):
→ +${results.optimisticProcedures} procedimentos/mês
→ +R$ ${parseFloat(results.optimisticRevenue).toLocaleString('pt-BR')}/mês
→ Lucro adicional no 1º ano: R$ ${(parseFloat(results.optimisticRevenue) * 12).toLocaleString('pt-BR')}

SKIN IN THE GAME:
Eu, Eliseu, uso esse mesmo ecossistema para rodar a Eucalyptus. Não é teoria - é o que funciona na prática todos os dias. Se não funcionasse para mim, não venderia para você.

---

Gerado por Eucalyptus Automations
${new Date().toLocaleDateString('pt-BR')}`;

    navigator.clipboard.writeText(copy);
    alert('Copy copiada! Cole no seu documento.');
  };

  return (
    <motion.section 
      id="calculadora-roi"
      className="py-24 bg-gradient-to-br from-cream via-taupe/5 to-terracotta/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-terracotta text-cream px-6 py-3 rounded-full mb-4">
            <Icons.TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Eucalyptus Automations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">
            Calculadora de <span className="text-terracotta font-medium">ROI</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Descubra quanto dinheiro está sendo perdido por desorganização e quanto o Ecossistema Eucalyptus pode recuperar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-taupe/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-charcoal mb-6">Dados da Clínica</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">
                  Nome da Clínica (opcional)
                </label>
                <input
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-4 py-3 border border-taupe/20 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                  placeholder="Ex: Clínica Dra. Maria"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">
                  <Icons.Users className="w-4 h-4 inline mr-2" />
                  Leads por mês *
                </label>
                <input
                  type="number"
                  value={leadsMonth}
                  onChange={(e) => setLeadsMonth(e.target.value)}
                  className="w-full px-4 py-3 border border-taupe/20 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                  placeholder="Ex: 150"
                />
                <p className="text-sm text-charcoal/50 mt-1">Instagram + WhatsApp</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">
                  <Icons.Target className="w-4 h-4 inline mr-2" />
                  Taxa de conversão atual (%) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  className="w-full px-4 py-3 border border-taupe/20 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                  placeholder="Ex: 8"
                />
                <p className="text-sm text-charcoal/50 mt-1">De cada 100 leads, quantos viram pacientes?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">
                  💰 Ticket médio (R$) *
                </label>
                <input
                  type="number"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(e.target.value)}
                  className="w-full px-4 py-3 border border-taupe/20 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                  placeholder="Ex: 3500"
                />
                <p className="text-sm text-charcoal/50 mt-1">Valor médio de um procedimento</p>
              </div>

              <motion.button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-terracotta to-gold text-cream font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icons.TrendingUp className="w-5 h-5" />
                Calcular Potencial
              </motion.button>
            </div>
          </motion.div>

          <div className="space-y-6">
            {showResults && results ? (
              <>
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-8 border border-taupe/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-light text-charcoal mb-4">Situação Atual</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-taupe/10">
                      <span className="text-charcoal/70">Procedimentos/mês:</span>
                      <span className="font-semibold text-lg">{results.currentProcedures}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal/70">Receita mensal:</span>
                      <span className="font-semibold text-lg text-terracotta">
                        R$ {parseFloat(results.currentRevenue).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-red-50 to-terracotta/10 rounded-2xl shadow-xl p-8 border-2 border-terracotta/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-xl font-medium text-charcoal mb-4">💸 Dinheiro Perdido</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-terracotta/20">
                      <span className="text-charcoal/70">Leads perdidos/mês:</span>
                      <span className="font-semibold text-lg text-charcoal">{results.lostLeads}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-terracotta/20">
                      <span className="text-charcoal/70">Receita perdida/mês:</span>
                      <span className="font-bold text-xl text-terracotta">
                        R$ {parseFloat(results.additionalRevenue).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal/70">Receita perdida/ano:</span>
                      <span className="font-bold text-2xl text-terracotta">
                        R$ {parseFloat(results.annualAdditional).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-gold/20 to-terracotta/10 rounded-2xl shadow-xl p-8 border-2 border-gold/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="text-xl font-medium text-charcoal mb-4">✅ Com Eucalyptus</h3>
                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <p className="text-sm text-charcoal/60 mb-2">Cenário Conservador</p>
                      <div className="flex justify-between items-center">
                        <span className="text-charcoal/70">+Receita/mês:</span>
                        <span className="font-bold text-lg text-terracotta">
                          R$ {parseFloat(results.additionalRevenue).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-gold/30 rounded-lg p-4">
                      <p className="text-sm text-charcoal/70 mb-2">Cenário Realista (+12% conversão)</p>
                      <div className="flex justify-between items-center">
                        <span className="text-charcoal">+Receita/mês:</span>
                        <span className="font-bold text-xl text-charcoal">
                          R$ {parseFloat(results.optimisticRevenue).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-gold/30 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-charcoal/70">Payback:</span>
                        <span className="font-semibold text-charcoal">{results.paybackDays} dias</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-charcoal/70">ROI 1º mês:</span>
                        <span className="font-bold text-xl text-terracotta">{results.roi}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  onClick={generateCopy}
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-cream font-semibold py-4 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📋 Copiar Proposta Completa
                </motion.button>

                <motion.div 
                  className="bg-gold/20 border-2 border-gold/40 rounded-lg p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <p className="text-sm text-charcoal">
                    <strong>💪 Skin in the Game:</strong> Eu uso esse mesmo ecossistema para rodar a Eucalyptus. 
                    Se não funcionasse, não venderia para você.
                  </p>
                </motion.div>
              </>
            ) : (
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 h-full flex items-center justify-center border border-taupe/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center text-charcoal/40">
                  <Icons.TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Preencha os dados para ver o potencial</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.div 
          className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-taupe/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium text-charcoal mb-4">📊 Premissas do Cálculo</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-charcoal/60">
            <div>
              <p className="font-semibold text-charcoal mb-2">Cenário Conservador:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>30% dos leads são mal atendidos (média mercado)</li>
                <li>Recuperamos 10% desses leads perdidos</li>
                <li>Base em estudos de conversão em estética</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-charcoal mb-2">Cenário Realista:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Aumento de 12% na taxa de conversão total</li>
                <li>Baseado em cases reais de automação</li>
                <li>Follow-up estruturado + IA 24/7</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={redirectToExternalForm}
            className="bg-gradient-to-r from-terracotta to-gold text-cream px-8 py-4 rounded-full text-lg font-medium shadow-lg inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero estruturar minha clínica agora
            <Icons.ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ROICalculator;