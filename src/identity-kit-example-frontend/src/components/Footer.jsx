import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        © {new Date().getFullYear()} AIxChange. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
