# Configuração do Formulário Externo

## Como configurar o redirecionamento para seu formulário externo

### 1. Edite o arquivo `src/utils/externalForm.ts`

Substitua a URL `https://seu-formulario-externo.com` pela URL real do seu formulário:

```typescript
export const redirectToExternalForm = () => {
  // Substitua esta URL pela URL do seu formulário externo
  const externalFormUrl = 'https://sua-url-real-aqui.com';
  
  // Abre o formulário em uma nova aba
  window.open(externalFormUrl, '_blank', 'noopener,noreferrer');
};
```

### 2. Opções de redirecionamento

O arquivo oferece duas opções:

1. **Nova aba** (padrão): `redirectToExternalForm()` - Abre o formulário em uma nova aba
2. **Mesma aba**: `redirectToExternalFormSameTab()` - Redireciona na mesma aba

### 3. Botões que redirecionam

Os seguintes botões agora redirecionam para o formulário externo:

- **Header**: Botão "Diagnóstico Gratuito" (desktop e mobile)
- **Hero**: Botão "Quero entender como estruturar minha clínica"
- **PainSection**: Botão "Faça Sua Avaliação Gratuita"
- **CTA**: Botão "Preencher Formulário"

### 4. Personalização

Você pode personalizar o comportamento editando o arquivo `src/utils/externalForm.ts`:

- Adicionar parâmetros de URL
- Implementar tracking de eventos
- Adicionar validações antes do redirecionamento
- Personalizar a mensagem ou comportamento

### 5. Exemplo de uso avançado

```typescript
export const redirectToExternalForm = () => {
  // Adicionar tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_click', {
      event_category: 'engagement',
      event_label: 'external_form'
    });
  }
  
  // URL com parâmetros
  const baseUrl = 'https://seu-formulario.com';
  const params = new URLSearchParams({
    source: 'website',
    campaign: 'eucalyptus-landing'
  });
  
  const externalFormUrl = `${baseUrl}?${params.toString()}`;
  window.open(externalFormUrl, '_blank', 'noopener,noreferrer');
};
```
