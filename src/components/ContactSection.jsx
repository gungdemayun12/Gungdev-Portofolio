import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';
import './ContactSection.css';

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/gungdehehehe', color: '#0077b5' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/gungdemayun12', color: '#666' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/_gungde', color: '#e4405f' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isInView = useInView(ref, { once: true, margin: '0px' });
  const shouldShow = isInView;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      const waNumber = "6282147331906";
      const waMessage = `Hello, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's work
            <span className="section-title-accent"> together</span>
          </h2>
          <p className="section-desc">
            Have an idea or a project? Contact me and let's discuss to bring your digital ideas to life.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="contact-form-group">
              <label htmlFor="contact-name" className="contact-label">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-email" className="contact-label">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="contact-input contact-textarea"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSending}
              id="contact-submit"
            >
              {isSending ? (
                <>
                  <div className="contact-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Info cards */}
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="contact-info-label">Email</h4>
                  <p className="contact-info-value">gungdemayun64@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="contact-info-label">Location</h4>
                  <p className="contact-info-value">Indonesia</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="contact-info-label">WhatsApp</h4>
                  <p className="contact-info-value">+62 821-4733-1906</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="contact-socials">
              <h4 className="contact-socials-label">Connect With Me</h4>
              <div className="contact-socials-grid">
                {socials.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-card"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
