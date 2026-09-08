import React from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-line"></div>
      <a href="#" className="social-icon" aria-label="Facebook">
        FB
      </a>
      <a href="#" className="social-icon" aria-label="Instagram">
        IG
      </a>
      <a href="#" className="social-icon" aria-label="YouTube">
        YT
      </a>
      <a href="#" className="social-icon" aria-label="TikTok">
        TK
      </a>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialSidebar;
