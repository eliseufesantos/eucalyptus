// External form redirection utility
export const redirectToExternalForm = () => {
  // Substitua esta URL pela URL do seu formulário externo
  const externalFormUrl = 'https://seu-formulario-externo.com';
  
  // Abre o formulário em uma nova aba
  window.open(externalFormUrl, '_blank', 'noopener,noreferrer');
};

// Alternativa: redirecionar na mesma aba
export const redirectToExternalFormSameTab = () => {
  const externalFormUrl = 'https://seu-formulario-externo.com';
  window.location.href = externalFormUrl;
};
