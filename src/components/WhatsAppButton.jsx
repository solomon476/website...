import React, { useState } from 'react';

/**
 * Global floating WhatsApp button — appears on all pages.
 * Pulses to attract attention and shows a tooltip on hover.
 */
export default function WhatsAppButton({ phone = '254714729996', message = "Hi Solian Wolves, I'd like to discuss a project." }) {
  const [hovered, setHovered] = useState(false);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .wa-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .wa-fab-tooltip {
          background: #fff;
          color: #0f1115;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          white-space: nowrap;
          animation: fadeIn 0.2s ease;
          border: 1px solid #e0e0e0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .wa-fab-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37,211,102,0.4);
          animation: wa-pulse 2s infinite;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          flex-shrink: 0;
        }
        .wa-fab-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37,211,102,0.5);
          animation: none;
        }
      `}</style>
      <div className="wa-fab">
        {hovered && (
          <div className="wa-fab-tooltip">Chat with us on WhatsApp 💬</div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-fab-btn"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.112 1.522 5.845L0 24l6.345-1.507A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.681-.497-5.224-1.367l-.375-.221-3.865.919.976-3.769-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
