import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Pause, X, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectsSection.css';

const PROJECTS = [
  {
    id: 1,
    title: "POS Cashier System for SMEs",
    description: "A digital Point of Sale (POS) system designed to help small and medium businesses manage transactions and monitor revenue efficiently.",
    longDesc: "A web-based Point of Sale (POS) system developed as a digital solution for small and medium enterprises (SMEs) to replace manual cashier processes. The system streamlines transaction recording, product management, and sales monitoring within an integrated platform.\n\nDesigned to improve operational efficiency, the application enables business owners to manage daily transactions digitally while maintaining structured financial records and real-time business performance tracking.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    github: null,
    images: ["/pos1.webp", "/pos2.webp", "/pos3.webp", "/pos4.webp", "/pos5.webp", "/pos6.webp", "/pos7.webp", "/pos8.webp", "/pos9.webp", "/pos10.webp"],
    videos: [
      { src: "/videos/pos system.mp4" },
    ],
    category: "Full-Stack / POS",
    type: "Website",
    thumbnailColor: "#1a1a2e"
  },
  {
    id: 2,
    title: "Clothing E-Commerce Website",
    description: "A premium full-stack clothing e-commerce platform with integrated secure payment gateway and advanced management.",
    longDesc: "A sophisticated full-stack clothing e-commerce application built with Laravel and Blade. The platform features a seamless shopping experience integrated with a secure payment gateway, allowing customers to complete transactions safely and efficiently. It includes a comprehensive admin dashboard for inventory tracking, order management, and real-time sales analytics, providing a complete end-to-end solution for modern fashion retail.",
    tech: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
    github: null,
    images: ["/ecommerce1.webp", "/ecommerce2.webp", "/ecommerce3.webp", "/ecommerce4.webp", "/ecommerce5.webp", "/ecommerce6.webp", "/ecommerce7.webp", "/ecommerce8.webp", "/ecommerce9.webp"],
    videos: [
      { src: "/videos/stylehub1.mp4" },
      { src: "/videos/stylehub2.mp4" },
    ],
    category: "Full-Stack / E-Commerce",
    type: "Website",
    thumbnailColor: "#162447"
  },
  {
    id: 3,
    title: "Phone Repair Queue System",
    description: "A digital queue management system designed to streamline customer flow and service operations in phone repair shops.",
    longDesc: "A web-based queue management system developed to optimize service flow in mobile phone repair shops. The system allows customers to take queue numbers digitally and monitor their position in line through an integrated tracking mechanism.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    github: null,
    images: ["/queue service system"],
    videos: [
      { src: "/videos/queue service system.mp4" },
    ],
    category: "Full-Stack / Queue System",
    type: "Website",
    thumbnailColor: "#0f3460"
  },
  {
    id: 4,
    title: "Gym Management System",
    description: "A web-based gym management system designed to help fitness centers manage members, membership packages, and revenue efficiently.",
    longDesc: "A web-based Gym Management System developed to streamline daily operations in fitness centers and gyms. The platform provides an integrated solution for managing gym members, membership packages, and overall business revenue within a centralized management system.\n\nAdministrators can register and manage member data, organize different gym membership packages, and monitor income generated from subscriptions and services. The system helps gym owners maintain structured member records while gaining clear insights into business performance and operational activity.\n\nTo enhance usability and user experience, the application also includes a Dark Mode feature that allows users to switch between light and dark interface themes, providing a more comfortable visual experience during extended use.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    github: null,
    images: ["/gym management system"],
    videos: [
      { src: "/videos/gym management system.mp4" },
    ],
    category: "Full-Stack / Management System",
    type: "Website",
    thumbnailColor: "#1a1a2e"
  },
  {
    id: 5,
    title: "Mai Kebali Tour Website",
    description: "A Bali tour and wedding booking website designed to promote and sell travel packages with integrated online checkout.",
    longDesc: "Mai Kebali Tour is a tourism-focused website developed to promote and sell Bali tour packages and wedding services. Built using WordPress with the Elementor page builder, the platform provides an engaging browsing experience where customers can explore available packages, view detailed information, and complete bookings directly through the website, supported by a seamless online checkout system that enables secure and convenient payments, ultimately enhancing user experience and streamlining the overall booking process.",
    tech: ["WordPress", "Elementor"],
    github: null,
    demo: null,
    images: ["/maikebalitour"],
    videos: [
      { src: "/videos/maikebalitour.mp4" },
    ],
    category: "CMS / Tourism",
    type: "Website",
    thumbnailColor: "#162447"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website with futuristic design, interactive animations, and a fully responsive layout.",
    longDesc: "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a futuristic design with a cyan theme and matrix background effect. Key features include: an interactive ID card with a draggable lanyard effect, typing animation effect, an about me section with an education timeline, a project showcase with detail modals, and a contact page.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: null,
    images: ["/portofolio"],
    videos: [
      { src: "/videos/portofolio.mp4" },
    ],
    category: "Frontend / Portfolio",
    type: "Website",
    thumbnailColor: "#0f3460"
  },
  {
    id: 7,
    title: "Tour Car Charter Bali",
    description: "A full-stack car charter and tour booking platform for Bali with comprehensive admin dashboard, customer management, and booking system.",
    longDesc: "Tour Car Charter Bali is a full-stack web application built with Laravel, JavaScript, and Tailwind CSS that provides a complete solution for car charter and tour services in Bali. The platform features a powerful admin dashboard with real-time booking management, customer profiles, revenue analytics, fleet management, and driver scheduling.\n\nCustomers can browse available tour packages, check pricing, make bookings, manage their profiles, and receive digital receipts. The admin panel includes advanced features such as booking calendar overview, customer database, financial reports, tour package management, and driver assignment — all designed to streamline operations for tour businesses.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    github: null,
    images: ["/portofolio.webp"],
    videos: [
      { src: "/videos/landing page.mp4", poster: null },
      { src: "/videos/page.mp4", poster: null },
      { src: "/videos/booking process.mp4", poster: null },
      { src: "/videos/customer dashboard.mp4", poster: null },
      { src: "/videos/admin panel.mp4", poster: null },
    ],
    category: "Full-Stack / Tourism",
    type: "Website",
    thumbnailColor: "#1a1a2e"
  },
  {
    id: 8,
    title: "Bali Tour Package Pricelist",
    description: "A modern tour package pricelist with direct WhatsApp booking integration.",
    longDesc: "A modern, responsive tour package pricelist application designed specifically for Bali tourism. This platform allows potential tourists to explore various travel packages, view transparent pricing, and detailed itineraries. The application features a direct-to-WhatsApp booking system, streamlining the reservation process and providing a personalized communication channel between customers and service providers. Built with React and Tailwind CSS, it offers a seamless user experience across all devices.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
    github: null,
    demo: null,
    images: ["/pricelist-tour"],
    videos: [
      { src: "/videos/balitourpackage.mp4" },
    ],
    category: "Frontend / Tourism",
    type: "Website",
    thumbnailColor: "#162447"
  },
  {
    id: 9,
    title: "Finance Tracker App",
    description: "A Flutter-based financial recording app for tracking income and expenses with visual charts, multi-currency support, and profile management.",
    longDesc: "A comprehensive personal finance tracking application built with Flutter. The app allows users to record daily income and expenses with detailed categorization, view financial trends through interactive line charts, and compare income vs. spending with visual breakdowns.\n\nKey features include: income and expense recording with category tags, line chart visualization for financial trends, income-expense comparison reports, multi-currency support, multi-language settings, user profile management, and data export capabilities. The app provides a clean and intuitive interface that makes personal finance management effortless.",
    tech: ["Flutter", "Dart", "SQLite", "Chart.js"],
    github: null,
    images: ["/portofolio.webp"],
    videos: [
      { src: "/videos/mobile1.mp4" },
    ],
    category: "Mobile / Finance",
    type: "Mobile App",
    thumbnailColor: "#0f3460"
  },
  {
    id: 10,
    title: "Tour Business Card",
    description: "A digital business card showcasing tour company profile with services, contact info, and social links — built with HTML and Tailwind CSS.",
    longDesc: "A clean and professional digital business card designed to present a tour company's brand identity in a compact, modern format. Built with HTML and Tailwind CSS, the card features the company's logo, services overview, contact information, location, and social media links — all laid out in a visually appealing single-page design.\n\nThe business card serves as a quick digital introduction for potential clients, making it easy to share company details via link or QR code. Its lightweight and responsive design ensures it looks great on any device, from phones to desktops.",
    tech: ["HTML5", "Tailwind CSS"],
    github: "https://github.com/gungdemayun12/Business-Card-.git",
    img: "/businesscard.png",
    images: ["/businesscard"],
    videos: [
      { src: "/videos/businesscard.mp4" },
    ],
    category: "Frontend / Business Card",
    type: "Website",
    thumbnailColor: "#1a1a2e"
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Website', value: 'Website' },
  { label: 'Mobile App', value: 'Mobile App' },
];

// Map tech to actual SVG logos
const techIcons = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Blade": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "Elementor": "https://cdn.simpleicons.org/elementor",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Framer Motion": "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Chart.js": "https://cdn.simpleicons.org/chartdotjs",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isInView = useInView(ref, { once: true, margin: isMobile ? '800px' : '0px' });
  const shouldShow = isMobile || isInView;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Selected
            <span className="section-title-accent"> works</span>
          </h2>
          <p className="section-desc">
            Here are some projects I have worked on,
            showcasing my full-stack development skills.
          </p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: isMobile ? 0 : 0.2, duration: 0.5 }}
        >
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`projects-filter-btn ${activeFilter === filter.value ? 'projects-filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              id={`filter-${filter.value}`}
            >
              {filter.label}
              {activeFilter === filter.value && (
                <motion.span className="projects-filter-bg" layoutId="filter-bg" />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const thumbnail = project.videos?.[0]?.poster || project.images?.[0] || null;
  const hasVideo = project.videos && project.videos.length > 0;

  return (
    <motion.div
      className="project-card"
      layout
      initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: isMobile ? 0 : index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -6 }}
    >
      <div className="project-card-media" style={{ background: project.thumbnailColor }}>
        {hasVideo ? (
          <video
            poster={thumbnail || undefined}
            src={project.videos[0].src}
            className="project-card-video"
            muted
            autoPlay
            loop
            playsInline
            preload={typeof window !== 'undefined' && window.innerWidth < 768 ? "none" : "metadata"}
            controls={false}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={`${project.title} thumbnail`}
            className="project-card-image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-card-placeholder">
            <div className="project-card-placeholder-grid">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="project-card-placeholder-block" style={{
                  opacity: 0.1 + Math.random() * 0.2,
                  animationDelay: `${i * 0.1}s`,
                }} />
              ))}
            </div>
          </div>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="project-card-play-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-card-play-btn">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="project-card-play-text">View Detail</span>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="project-card-category">
          {project.type === 'Website' ? '🌐 Website' : '📱 Mobile App'}
        </span>
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-card-year">{project.category}</span>
        </div>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tech">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="project-card-tech-tag" title={t}>
              <span className="tech-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {techIcons[t] ? <img src={techIcons[t]} alt={t} style={{ width: '16px', height: '16px', objectFit: 'contain' }} /> : "⚡"}
              </span>
            </span>
          ))}
          {project.tech.length > 4 && <span className="project-card-tech-tag">+{project.tech.length - 4}</span>}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, [currentVideoIndex]);

  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="project-modal-media" style={{ background: project.thumbnailColor, position: 'relative' }}>
          {project.videos && project.videos.length > 0 ? (
            <>
              <video
                key={project.videos[currentVideoIndex].src}
                ref={videoRef}
                src={project.videos[currentVideoIndex].src}
                className="project-modal-video"
                controls
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                onVolumeChange={(e) => { e.target.muted = true; e.target.volume = 0; }}
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
              />
              {project.videos[currentVideoIndex].label && (
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', zIndex: 10 }}>
                  {project.videos[currentVideoIndex].label}
                </div>
              )}
            </>
          ) : null}
        </div>

        <div className="project-modal-content" style={{ overflowY: 'auto', maxHeight: '40vh' }}>
          <div className="project-modal-meta">
            <span className="project-modal-category">
              {project.type === 'Website' ? '🌐 Website' : '📱 Mobile App'}
            </span>
            <span className="project-modal-year">{project.category}</span>
          </div>

          <h2 className="project-modal-title">{project.title}</h2>
          <p className="project-modal-desc" style={{ whiteSpace: 'pre-line' }}>{project.longDesc || project.description}</p>

          <div className="project-modal-tech-section">
            <h4 className="project-modal-subtitle">Technologies</h4>
            <div className="project-modal-tech">
              {project.tech.map(t => (
                <span key={t} className="project-modal-tech-tag" title={t}>
                  <span className="tech-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {techIcons[t] ? <img src={techIcons[t]} alt={t} style={{ width: '18px', height: '18px', objectFit: 'contain' }} /> : "⚡"}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {project.videos && project.videos.length > 1 && (
            <div className="project-modal-videos-section" style={{ marginTop: '24px' }}>
              <h4 className="project-modal-subtitle">Available Videos</h4>
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'thin' }}>
                {project.videos.map((vid, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: currentVideoIndex === idx ? 'rgba(34, 211, 238, 0.1)' : 'var(--bg-glass)',
                      border: `1px solid ${currentVideoIndex === idx ? '#22d3ee' : 'var(--border-color)'}`,
                      color: currentVideoIndex === idx ? '#22d3ee' : 'var(--text-secondary)',
                      fontSize: '13px',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontWeight: currentVideoIndex === idx ? '600' : '400'
                    }}
                  >
                    {vid.label || `Video ${idx + 1}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-modal-btn project-modal-btn--secondary">
                <GithubIcon size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
