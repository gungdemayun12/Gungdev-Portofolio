import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import './HeroSection.css';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = ['Gungdev'];
  const typingWords = ['Tech Enthusiast', 'Fullstack Developer'];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="hero-section" ref={ref}>
      {/* Ambient glow */}
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />

      {/* Grid background is now global on body */}

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      <motion.div className="hero-content container" style={{ y, opacity }}>
        {/* Status badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="hero-badge-dot" />
          <span>Available for work</span>
        </motion.div>

        {/* Title */}
        <div className="hero-title-wrapper">
          {titleWords.map((word, i) => (
            <motion.h1
              key={word}
              className="hero-title"
              initial={{ y: 80, opacity: 0, rotateX: 45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span>Hello, I'm <span className="hero-title-outline">{word}</span></span>
            </motion.h1>
          ))}
          <motion.h2
             className="hero-typing-text"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: '500', color: 'var(--text-secondary)', marginTop: '12px' }}
          >
             {currentText}<span className="hero-cursor">|</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Building modern websites with clean, responsive, and elegant interfaces.
          <br />
          Transforming ideas and designs into engaging digital experiences.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          className="hero-tech-stack"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px', justifyContent: 'flex-start' }}
        >
          {['Laravel'].map(tech => (
            <span key={tech} className="hero-badge" style={{ fontSize: '12px', padding: '4px 16px', background: 'transparent' }}>
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#projects" className="hero-btn hero-btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="hero-btn hero-btn--secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a href="https://github.com/gungdemayun12" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com/in/gungdehehehe" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="https://instagram.com/_gungde" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Instagram">
            <InstagramIcon size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line">
          <div className="hero-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}
