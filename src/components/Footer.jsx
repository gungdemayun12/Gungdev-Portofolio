import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="footer-logo-mark">G</span>
              <span className="footer-logo-text">ungdev</span>
            </div>
            <p className="footer-desc">
              Fullstack Developer — Creating modern, clean, and responsive websites.
            </p>
          </div>

          <div className="footer-right">
            <p className="footer-copy">
              © {currentYear} Gungdev. Made with <Heart size={12} className="footer-heart" /> in Indonesia
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line" />
        </div>
      </div>
    </footer>
  );
}
