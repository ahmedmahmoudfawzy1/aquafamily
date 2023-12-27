import React from 'react';
import WhatsAppLink from './WhatsAppLink';

const ContactPage = () => {
  const phoneNumber = "1112204836";

  return (
    <div>
      <h1>صفحة الاتصال</h1>
      <WhatsAppLink phoneNumber={phoneNumber} />
    </div>
  );
};

export default ContactPage;