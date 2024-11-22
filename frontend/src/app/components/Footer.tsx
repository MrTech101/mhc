import React from 'react';
import styles from '@/app/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Mahendra Health Care. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <img src="/images/facebook-icon.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram-icon.png" alt="Instagram" className="h-6" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/images/youtube-icon.png" alt="YouTube" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
