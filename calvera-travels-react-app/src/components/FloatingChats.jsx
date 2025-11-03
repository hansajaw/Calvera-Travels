import React, { useEffect } from "react";
import "./FloatingChats.css";
import { FaWhatsapp, FaHeadset } from "react-icons/fa";

export default function FloatingChats() {
  useEffect(() => {
    // Load and hide default Tawk widget
    if (!window.Tawk_API) {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6908f0559dbef619524afe6f/1j95elk33";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);

      const checkTawk = setInterval(() => {
        if (window.Tawk_API) {
          window.Tawk_API.hideWidget();
          clearInterval(checkTawk);
        }
      }, 1000);
    }
  }, []);

  const handleWhatsApp = () => {
    const whatsappNumber = "94771234567"; // your number here
    const message = encodeURIComponent("Hi Calvera Travels! I'd like to learn more about your tours.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleTawkChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.showWidget();
      window.Tawk_API.maximize();
    } else {
      alert("Chat widget is still loading, please wait a moment.");
    }
  };

  return (
    <>
      {/* WhatsApp Floating Icon */}
      <button className="chat-fab chat-whatsapp" onClick={handleWhatsApp}>
        <FaWhatsapp />
      </button>

      {/* Tawk Floating Icon */}
      <button className="chat-fab chat-tawk" onClick={handleTawkChat}>
        <FaHeadset />
      </button>
    </>
  );
}
