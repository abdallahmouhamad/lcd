import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const messages: Record<string, string> = {
  '/programmes':
    'Bonjour, je souhaite des informations sur les programmes du Lycée Canadien de Dakar.',
  '/admissions':
    'Bonjour, je souhaite inscrire mon enfant au Lycée Canadien de Dakar.',
  default:
    'Bonjour, je souhaite des informations sur le Lycée Canadien de Dakar.',
};

export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '221787359256';
  const message = encodeURIComponent(messages[pathname] || messages.default);
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-6 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <MessageCircle size={28} />
    </a>
  );
}
