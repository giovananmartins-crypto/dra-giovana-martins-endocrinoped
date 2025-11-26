/**
 * Google Analytics e Event Tracking via Google Tag Manager
 * 
 * IMPORTANTE: Este arquivo dispara eventos para o GTM (Google Tag Manager),
 * que então distribui para GA4, Google Ads, etc.
 * 
 * NUNCA disparar eventos diretamente para GA4 ou Google Ads!
 * Sempre usar GTM como intermediário para evitar duplicação.
 */

// Tipo para eventos do dataLayer do GTM
interface DataLayerEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  event_value?: number;
  [key: string]: string | number | undefined;
}

// Declaração do tipo dataLayer para TypeScript
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

/**
 * Função helper para disparar eventos no GTM
 * Todos os eventos passam pelo GTM, que distribui para GA4, Google Ads, etc.
 */
export function trackEvent(
  eventName: string,
  eventCategory?: string,
  eventLabel?: string,
  eventValue?: number
) {
  // Verificar se está no navegador (não no servidor)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: eventCategory,
      event_label: eventLabel,
      event_value: eventValue,
    });
  }
}

/**
 * Objeto com funções específicas para facilitar o rastreamento
 * Cada função dispara um evento específico no GTM
 */
export const analytics = {
  /**
   * Rastrear clique no botão WhatsApp
   * @param label - Label opcional para identificar onde foi clicado (ex: "Contact Page", "Header")
   */
  whatsappClick: (label?: string) => {
    trackEvent('whatsapp_click', 'Contact', label || 'WhatsApp Button');
  },

  /**
   * Rastrear clique em link telefônico
   * @param label - Label opcional para identificar onde foi clicado
   */
  phoneCall: (label?: string) => {
    trackEvent('phone_call', 'Contact', label || 'Phone Button');
  },

  /**
   * Rastrear envio de formulário de contato
   * @param label - Label opcional para identificar qual formulário
   */
  formSubmit: (label?: string) => {
    trackEvent('form_submit', 'Contact', label || 'Contact Form');
  },

  /**
   * Rastrear clique no botão/link do Doctoralia
   * @param label - Label opcional para identificar onde foi clicado
   */
  doctoraliaClick: (label?: string) => {
    trackEvent('doctoralia_click', 'Appointment', label || 'Doctoralia Button');
  },

  /**
   * Rastrear clique em CTA (Call to Action)
   * @param label - Label obrigatório para identificar qual CTA foi clicado
   */
  ctaClick: (label: string) => {
    trackEvent('cta_click', 'CTA', label);
  },

  /**
   * Rastrear visualização de página de serviço
   * @param serviceName - Nome do serviço visualizado
   */
  serviceView: (serviceName: string) => {
    trackEvent('service_view', 'Engagement', serviceName);
  },

  /**
   * Rastrear leitura de artigo do blog
   * @param articleTitle - Título do artigo
   */
  blogRead: (articleTitle: string) => {
    trackEvent('blog_read', 'Engagement', articleTitle);
  },
};

