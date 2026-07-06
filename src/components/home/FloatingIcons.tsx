import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingIcons: React.FC = () => {
  return (
    <>
      <a
        href="https://wa.me/919910729150"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <MessageCircle size={30} />
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          right: 25px;
          bottom: 25px;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          animation: whatsappPulse 1.8s infinite;
          transition: 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        @keyframes whatsappPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }

          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }

          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 58px;
            height: 58px;
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingIcons;