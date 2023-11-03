import React from "react";

const CTASection = () => {
  return (
    <section className="CTA">
      <div className="container">
          <h2>Let's start <strong>customizing</strong> your <br /> card now</h2>
          <div>
            <a className='btn' href="#">
              <span className="squre-1"></span>
              <span className="squre-2"></span>
              <span className='content'>Get Started</span>
              <span className='ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="14" viewBox="0 0 61 14" fill="none">
                  <path d="M0 6.73913H60M60 6.73913L59.3071 6.42883C56.4668 5.15685 53.922 3.3081 51.8343 1V1M60 6.73913L59.648 6.89828C56.5938 8.27934 53.9145 10.3716 51.8343 13V13" stroke="white" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
        </div>
      </div>
      <div className="CTA-Inner-overlay"></div>
      <div className="CTA-Inner-overlay"></div>
    </section>
  );
};

export default CTASection;
