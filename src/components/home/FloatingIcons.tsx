import { useState } from "react";
import { Phone, X } from "lucide-react";
import logo from "../../assets/logo.png";

const PHONE = "+919910729150";
const WHATSAPP_URL =
  "https://wa.me/919910729150?text=Hi!%20I'm%20interested%20in%20BHL%20Group%20real%20estate%20and%20investment%20solutions.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingIcons() {
  const [whatsappOpen, setWhatsappOpen] = useState(true);

  return (
    <>
      {/* Call Now — Left */}
      <a href={`tel:${PHONE}`} className="float-call-btn" aria-label="Call Now">
        <span className="float-call-ring" />
        <span className="float-call-ring float-call-ring-delay" />
        <span className="float-call-icon">
          <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
        </span>
        <span className="float-call-label">Call Now</span>
      </a>

      {/* WhatsApp Chat Widget */}
      {whatsappOpen && (
        <div className="whatsapp-widget">
          <div className="whatsapp-widget-header">
            <div className="whatsapp-widget-profile">
              <img src={logo} alt="BHL Group" className="whatsapp-widget-avatar" />
              <div>
                <p className="whatsapp-widget-name">BHL Group</p>
                <p className="whatsapp-widget-status">online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWhatsappOpen(false)}
              className="whatsapp-widget-close"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="whatsapp-widget-body">
            <div className="whatsapp-widget-bubble">
              <p className="whatsapp-widget-bubble-name">BHL Group</p>
              <p className="whatsapp-widget-bubble-text">
                Hi! I'm interested in BHL Group real estate and investment solutions.
              </p>
            </div>
          </div>

          <div className="whatsapp-widget-footer">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-widget-start"
            >
              Start chat
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp FAB — Right */}
      <button
        type="button"
        onClick={() => setWhatsappOpen((open) => !open)}
        className="whatsapp-float"
        aria-label={whatsappOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {whatsappOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <WhatsAppIcon className="w-8 h-8" />
        )}
      </button>
    </>
  );
}
