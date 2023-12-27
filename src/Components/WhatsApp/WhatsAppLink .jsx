import React from "react";

const WhatsAppLink = ({ phoneNumber }) => {

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      اتصل بنا عبر الواتساب
    </a>
  );
};

export default WhatsAppLink;
