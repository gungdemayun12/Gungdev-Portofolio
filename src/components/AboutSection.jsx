import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiReact, SiNextdotjs, SiHtml5, SiLaravel, SiPhp, SiTailwindcss, SiBootstrap, SiMysql, SiWordpress, SiGithub, SiGit, SiDart, SiFlutter } from 'react-icons/si';
import { FaFileExcel, FaFileWord, FaFilePowerpoint, FaPaintBrush, FaDatabase, FaJava } from 'react-icons/fa';
import './AboutSection.css';

const DIGITAL_SKILLS = [
  { icon: <SiReact style={{ color: '#22d3ee' }} />, name: "React" },
  { icon: <SiNextdotjs className="skill-icon-adapt" />, name: "Next.js" },
  { icon: <SiHtml5 style={{ color: '#f97316' }} />, name: "HTML" },
  { icon: <SiLaravel style={{ color: '#ef4444' }} />, name: "Laravel" },
  { icon: <SiPhp style={{ color: '#818cf8' }} />, name: "PHP Native" },
  { icon: <SiTailwindcss style={{ color: '#22d3ee' }} />, name: "Tailwind CSS" },
  { icon: <SiBootstrap style={{ color: '#a855f7' }} />, name: "Bootstrap" },
  { icon: <SiMysql style={{ color: '#60a5fa' }} />, name: "MySQL" },
  { icon: <SiWordpress style={{ color: '#93c5fd' }} />, name: "WordPress" },
  { icon: <SiGithub className="skill-icon-adapt" />, name: "GitHub" },
  { icon: <SiGit style={{ color: '#f97316' }} />, name: "Git" },
  { icon: <FaJava style={{ color: '#f89820' }} />, name: "Java" },
  { icon: <SiDart style={{ color: '#0175c2' }} />, name: "Dart" },
  { icon: <SiFlutter style={{ color: '#02569b' }} />, name: "Flutter" },
];

const OFFICE_SKILLS = [
  { icon: <FaFileExcel style={{ color: '#22c55e' }} />, name: "Ms Excel" },
  { icon: <FaFileWord style={{ color: '#60a5fa' }} />, name: "Ms Word" },
  { icon: <FaFilePowerpoint style={{ color: '#fb923c' }} />, name: "PowerPoint" },
  { icon: <FaPaintBrush style={{ color: '#67e8f9' }} />, name: "Canva" },
  { icon: <FaDatabase style={{ color: '#facc15' }} />, name: "Pentaho" },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4" />
        <path d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5S15.03 6.5 12 6.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="#34A853" />
        <path d="M7.5 12c0-2.49 2.01-4.5 4.5-4.5V5c-3.87 0-7 3.13-7 7h2.5z" fill="#FBBC05" />
        <path d="M12 19c3.87 0 7-3.13 7-7h-2.5c0 2.49-2.01 4.5-4.5 4.5V19z" fill="#EA4335" />
      </svg>
    ),
    name: "Looker Studio",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const isInView = useInView(ref, { once: true, margin: isMobile ? '500px' : '0px' });
  const shouldShow = isMobile || isInView;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about creating
            <span className="section-title-accent"> digital experiences</span>
          </h2>
          <p className="section-desc">
            A dedicated Fullstack Developer passionate about building modern web applications
            with clean, responsive, and elegant interfaces. Always prioritizing code quality
            and user experience.
          </p>
        </motion.div>

        {/* Skills Sets */}
        <div className="about-skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>

          <motion.div variants={containerVariants} initial={isMobile ? 'visible' : 'hidden'} animate={shouldShow ? 'visible' : 'hidden'} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', background: '#22d3ee', borderRadius: '50%' }}></span>
              Digital Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {DIGITAL_SKILLS.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
                  background: 'var(--bg-glass)', border: '1px solid var(--border-color)', borderRadius: '12px',
                  fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)'
                }}
                  whileHover={{ y: -2, borderColor: 'var(--border-hover)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                >
                  <span style={{ fontSize: '18px', display: 'flex' }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', background: '#facc15', borderRadius: '50%' }}></span>
              Office Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {OFFICE_SKILLS.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
                  background: 'var(--bg-glass)', border: '1px solid var(--border-color)', borderRadius: '12px',
                  fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)'
                }}
                  whileHover={{ y: -2, borderColor: 'var(--border-hover)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                >
                  <span style={{ fontSize: '18px', display: 'flex' }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
