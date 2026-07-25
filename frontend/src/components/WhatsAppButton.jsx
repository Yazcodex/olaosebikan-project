import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '2348062346890';
  const message = 'Hello! I am interested in ordering bread from OLAOSEBIKAN Breads.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-green-500 p-4 text-white shadow-lg shadow-green-900/20 transition hover:scale-110 hover:bg-green-600"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
