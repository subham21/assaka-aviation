"use client";

export default function WhatsAppButton() {
  const phoneNumber = "919836257030"
  const message =
    "Hello, I would like to enquire about aviation courses."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-3 z-50"
    >
      <img
        src="/whatsapp-logo.png"
        alt="WhatsApp Chat"
        className="h-20 w-20 drop-shadow-lg animate-bounce hover:scale-110 transition-transform duration-550"
      />
    </a>
  )
}
