export function trackMetaLead(eventName?: string) {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      // Always fire standard Lead event
      window.fbq('track', 'Lead');
  
      // Optional: also send custom event for internal tracking
      if (eventName) {
        window.fbq('trackCustom', eventName);
      }
    }
  }