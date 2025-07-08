import React from 'react';
import './Footer.css';
import { FaFeatherAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-left">
        <FaFeatherAlt className="footer-logo" />
        <span className="footer-name">Varshitha</span>
      </div>
      <div className="footer-right">
        All rights reserved @2025
      </div>
    </footer>
  );
}
