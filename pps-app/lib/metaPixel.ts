type FBQ = {
    (...args: any[]): void;
  };
  
  declare global {
    interface Window {
      fbq?: FBQ;
    }
  }
  
  export function trackMetaLead(eventId?: string) {
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;
  
    const dedupeKey = eventId ? `meta_lead_${eventId}` : "meta_lead_default";
  
    if (sessionStorage.getItem(dedupeKey)) return;
  
    window.fbq("track", "Lead", {}, eventId ? { eventID: eventId } : undefined);
  
    sessionStorage.setItem(dedupeKey, "true");
  }