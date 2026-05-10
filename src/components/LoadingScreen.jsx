import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, User, Globe } from 'lucide-react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('intro'); // intro -> exit -> done

  useEffect(() => {
    // Increase duration to give background assets (videos, images) time to load
    const introDuration = 1500;
    const exitDuration = 3500;

    // Keep the loading screen visible for a few seconds, then exit
    const timer1 = setTimeout(() => setPhase('exit'), introDuration);
    const timer2 = setTimeout(() => onComplete(), exitDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } }
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loading-screen"
          variants={containerVariants}
          initial="hidden"
          animate={phase === 'intro' ? 'visible' : 'exit'}
        >
          {/* Noise overlay for cinematic effect */}
          <div className="loading-noise" />

          <div className="loading-content-wrapper">
            {/* Top Icons */}
            <motion.div className="loading-icons" variants={itemVariants}>
              <motion.div className="loading-icon-circle" variants={iconVariants}>
                <Code2 size={16} color="white" />
              </motion.div>
              <motion.div className="loading-icon-circle" variants={iconVariants}>
                <User size={16} color="white" />
              </motion.div>
              <motion.div className="loading-icon-circle" variants={iconVariants}>
                <Globe size={16} color="white" />
              </motion.div>
            </motion.div>

            {/* Main Text */}
            <motion.div className="loading-text-container" variants={itemVariants}>
              <h2 className="loading-text-small">Welcome to my</h2>
              <h1 className="loading-text-large">Portfolio Website</h1>
            </motion.div>

            {/* Link Pill */}
            <motion.div className="loading-pill" variants={itemVariants}>
              www.gungdev.vercel.app
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
