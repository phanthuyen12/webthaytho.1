import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/css/Faqs.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does Toshi pricing compare to competitors?",
      answer: "We offer the industry's lowest management rate at just 8%, with premium-level service and no hidden fees—unmatched by any competitor."
    },
    {
      question: "Do you offer property protection and liability coverage?",
      answer: "Absolutely. Our Plus and Premium plans provide extensive coverage to ensure complete peace of mind for your investment."
    },
    {
      question: "Who handles guest communication and emergencies?",
      answer: "Our 24/7 customer support team, led by hospitality veterans from Marriott, personally manages all guest interactions to maintain top-level satisfaction and care."
    },
    {
      question: "How quickly can my property be onboarded and listed?",
      answer: "Our dedicated onboarding team typically lists your property within days, ensuring minimal downtime and immediate income generation."
    },
    {
      question: "How should I choose my tier out of the three?",
      answer: "Choose Core (8%) if you seek maximum affordability with essential services. Plus (10%) is ideal for those wanting enhanced protection and dedicated consultation. Premium (13%) suits owners looking for comprehensive, hands-free management with added services like inspections, design consultations, and permit assistance."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-heading">FAQS</h1>
      
      {faqs.map((faq, index) => (
       <div 
  className={`faq-item ${activeIndex === index ? 'active' : ''} ${index === 1 || index === 3 ? 'custom-bg' : ''}`} 
  key={index}
  onClick={() => toggleFAQ(index)}
>

          <div className="faq-background"></div>
          <div className="faq-content">
            {/* Icon trước câu hỏi - đổi thành dấu + đơn giản */}
            <i className="bi bi-plus-lg" style={{ marginRight: '10px', fontSize: '30px' }}></i>
            
            <div className="faq-question">{faq.question}</div>
            
            {/* Icon sau câu hỏi - đổi thành dấu + hoặc - đơn giản */}
            <i 
              className={`bi ${activeIndex === index ? 'bi-dash-lg' : 'bi-plus-lg'}`}
              style={{ fontSize: '30px' }}
            ></i>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;