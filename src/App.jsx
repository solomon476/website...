import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle.jsx';
import './App.css';
import heroBg from './assets/1.jpg';
import bannerBg from './assets/2.jpg';
import card1Img from './assets/3.jpg';
import card2Img from './assets/4.jpg';
import card3Img from './assets/5.jpg';
import card4Img from './assets/6.jpg';
import heroVideo from './assets/8.mp4';
import bannerVideo from './assets/9.mp4';
import logoImg from './assets/logo.jpg';
import noellaImg from './assets/noella.jpg';
import aliceImg from './assets/alice.jpg';
import solomonImg from './assets/solomon.jpg';
import ianImg from './assets/ian.jpg';
import hillaryImg from './assets/hillary.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="ms-navbar">
      <div className="ms-navbar-container">
        <div className="ms-navbar-left">
          <Link to="/" className="ms-logo-container">
            <img src={logoImg} alt="Solian Wolves Logo" className="ms-logo-img" />
            <div className="ms-logo">Solian Wolves</div>
          </Link>
          <div className={`ms-nav-links ${menuOpen ? 'open' : ''}`}>
            <div className="ms-nav-dropdown">
              <span className="ms-nav-dropdown-toggle">Company ▾</span>
              <div className="ms-nav-dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  <Link to="/about">
                    <h4>About Us</h4>
                    <p>Our story, mission, and leadership.</p>
                  </Link>
                  <Link to="/methodology">
                    <h4>Methodology</h4>
                    <p>How we engineer world-class systems.</p>
                  </Link>
                  <Link to="/careers">
                    <h4>Careers</h4>
                    <p>Join the pack and build the future.</p>
                  </Link>
                  <Link to="/contact">
                    <h4>Contact</h4>
                    <p>Get in touch with our global offices.</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ms-nav-dropdown">
              <span className="ms-nav-dropdown-toggle">Solutions ▾</span>
              <div className="ms-nav-dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  <Link to="/services/full-cycle-development">
                    <h4>Full-Cycle Development</h4>
                    <p>Custom software and enterprise systems.</p>
                  </Link>
                  <Link to="/services/architectural-scaling">
                    <h4>Architectural Scaling</h4>
                    <p>Cloud infrastructure and database optimization.</p>
                  </Link>
                  <Link to="/services/surgical-audit">
                    <h4>The Surgical Audit</h4>
                    <p>Deep-dive performance and UX analysis.</p>
                  </Link>
                  <Link to="/services/white-collar-partner">
                    <h4>White Collar Partner</h4>
                    <p>Fractional CTO and strategic advisory.</p>
                  </Link>
                </div>
                <div className="mega-menu-sidebar">
                  <Link to="/industries" style={{ padding: 0 }}>
                    <div style={{ padding: '16px', background: 'var(--ms-bg-alt)', borderRadius: '8px' }}>
                      <h4 style={{ color: 'var(--ms-blue)' }}>Industries We Serve ➔</h4>
                      <p style={{ marginTop: '4px' }}>Education, Finance, Healthcare, and Logistics.</p>
                    </div>
                  </Link>
                  <Link to="/labs" style={{ padding: 0, marginTop: '16px', display: 'block' }}>
                    <div style={{ padding: '16px', background: 'var(--ms-bg-alt)', borderRadius: '8px' }}>
                      <h4 style={{ color: 'var(--ms-blue)' }}>Alpha Labs ➔</h4>
                      <p style={{ marginTop: '4px' }}>R&D, experimental engineering, and open-source.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/insights">Insights</Link>
            {/* Show Sign In link on mobile inside the menu since the top-right button is hidden */}
            <Link to="/portal" className="ms-mobile-signin" style={{ color: '#0067b8', fontWeight: 'bold' }}>Portal Sign in ➔</Link>
          </div>
        </div>
        <div className="ms-navbar-right">
          <ThemeToggle />
          <Link to="/portal" className="ms-nav-item">Sign in</Link>
        </div>
        <div className="ms-mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
}

function useTypewriter(words, speed = 100, deleteSpeed = 50, delay = 2000) {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);

  React.useEffect(() => {
    let timer;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
      timer = setTimeout(() => {}, deleteSpeed);
    } else {
      setText(currentWord.substring(0, text.length + 1));
      timer = setTimeout(() => {}, speed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, speed, deleteSpeed, delay]);

  return text;
}

function Hero() {
  const phrases = ["Custom Software.", "AI tools & Automation.", "Mobile App development."];
  const typingText = useTypewriter(phrases);

  return (
    <section className="ms-hero">
      <video
        className="ms-hero-img"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      />
      <motion.div 
        className="ms-hero-content"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ms-hero-box">
          <h1 className="ms-hero-title">Building the Future of<br/> <span style={{ color: 'var(--ms-blue)' }}>{typingText}</span><span className="cursor">|</span></h1>
          <p className="ms-hero-subtitle">We engineer high-performance software, custom ERPs, and mission-critical business systems tailored for ambitious organisations — from schools to enterprises.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Consultation</Link>
        </div>
      </motion.div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="ms-quick-links">
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <path d="M12 20h16M20 12v16" stroke="#0067b8" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="14" y="14" width="12" height="12" rx="2" stroke="#0067b8" strokeWidth="2"/>
        </svg>
        <span>Choose your ERP</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <path d="M10 28 L20 12 L30 28 Z" stroke="#0067b8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <circle cx="20" cy="22" r="3" fill="#0067b8"/>
        </svg>
        <span>School Management</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <circle cx="20" cy="20" r="8" stroke="#0067b8" strokeWidth="2"/>
          <path d="M20 12 Q28 16 28 20 Q28 24 20 28 Q12 24 12 20 Q12 16 20 12Z" stroke="#0067b8" strokeWidth="2" fill="none"/>
          <line x1="12" y1="20" x2="28" y2="20" stroke="#0067b8" strokeWidth="2"/>
        </svg>
        <span>Cloud Architecture</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <circle cx="20" cy="20" r="6" stroke="#0067b8" strokeWidth="2"/>
          <path d="M26 14 L32 8" stroke="#0067b8" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 26 L8 32" stroke="#0067b8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span>Technical Audit</span>
      </div>
    </section>
  );
}

function TechPartners() {
  const partners = [
    "AWS Advanced Partner", "Microsoft Azure Certified", "React & React Native", 
    "Node.js Enterprise", "Python / Django", "PostgreSQL", "Docker & Kubernetes", "Vercel",
    "Supabase", "Cloudflare", "TailwindCSS", "Next.js"
  ];
  return (
    <section className="ms-tech-section">
      <h3 className="ms-tech-title">Technologies & Partnerships</h3>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...partners, ...partners].map((p, index) => (
            <div key={index} className="ms-tech-badge">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <motion.section 
      className="ms-section" 
      style={{ backgroundColor: 'var(--ms-bg-alt)', padding: '64px 5%', marginTop: '48px' }}
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <h2 className="ms-section-title">Client Success & Solutions</h2>
        <div className="ms-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="ms-card" style={{ background: 'var(--ms-card-bg)' }}>
            <div className="ms-card-content">
              <span style={{ fontSize: '0.8rem', color: 'var(--ms-blue)', fontWeight: 'bold' }}>FINANCE</span>
              <h3 className="ms-card-title">Scaling Financial Infrastructure</h3>
              <p className="ms-card-desc">How we can migrate legacy records to a secure headless architecture with zero downtime.</p>
              <Link to="/insights" className="ms-card-link">Read full solution ➔</Link>
            </div>
          </div>
          <div className="ms-card" style={{ background: 'var(--ms-card-bg)' }}>
            <div className="ms-card-content">
              <span style={{ fontSize: '0.8rem', color: 'var(--ms-blue)', fontWeight: 'bold' }}>EDUCATION</span>
              <h3 className="ms-card-title">The Future of Educational ERPs</h3>
              <p className="ms-card-desc">Partnering with top institutions to build custom modular scaling systems replacing legacy monoliths.</p>
              <Link to="/insights" className="ms-card-link">View insights ➔</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Card({ image, title, description, linkText, to, portrait }) {
  return (
    <div className="ms-card">
      <img
        src={image}
        alt={title}
        className={portrait ? "ms-card-img-portrait" : "ms-card-img"}
      />
      <div className="ms-card-body">
        <h3 className="ms-card-title">{title}</h3>
        <p className="ms-card-desc">{description}</p>
        {to
          ? <Link to={to} className="ms-card-link">{linkText} <span>&#10095;</span></Link>
          : <a href="#link" className="ms-card-link">{linkText} <span>&#10095;</span></a>
        }
      </div>
    </div>
  );
}

function CardGrid({ sectionTitle, cards, columns = 4 }) {
  const gridClass = columns === 6 ? "ms-grid-6" : columns === 5 ? "ms-grid-5" : "ms-grid";
  return (
    <motion.section 
      className="ms-section"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {sectionTitle && <h2 className="ms-section-title">{sectionTitle}</h2>}
      <div className={gridClass}>
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </motion.section>
  );
}

function Banner() {
  return (
    <section className="ms-banner">
      <video
        className="ms-banner-img"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={bannerBg}
      />
      <div className="ms-banner-content">
        <h2 className="ms-hero-title">Unlock infinite flexibility</h2>
        <p className="ms-hero-subtitle">Discover our bespoke headless architecture tailored for massive educational networks.</p>
        <Link to="/contact" className="ms-btn ms-btn-primary">Explore Engineering Scope</Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ms-footer">
      <div className="ms-footer-links">
        <div className="ms-footer-col">
          <h4>Enterprise Solutions</h4>
          <Link to="/services/full-cycle-development">Custom ERP Development</Link>
          <Link to="/services/full-cycle-development">School Management Systems</Link>
          <Link to="/services/full-cycle-development">Financial Software</Link>
          <Link to="/services/full-cycle-development">Healthcare Logistics</Link>
        </div>
        <div className="ms-footer-col">
          <h4>Cloud & Infrastructure</h4>
          <Link to="/services/architectural-scaling">Serverless Architecture</Link>
          <Link to="/services/architectural-scaling">Database Migration</Link>
          <Link to="/services/architectural-scaling">AWS / Azure Integration</Link>
          <Link to="/services/architectural-scaling">Scalability Audits</Link>
        </div>
        <div className="ms-footer-col">
          <h4>Consulting & Advisory</h4>
          <Link to="/services/white-collar-partner">Fractional CTO</Link>
          <Link to="/services/white-collar-partner">IT Strategy</Link>
          <Link to="/services/surgical-audit">Technical Debt Rescue</Link>
          <Link to="/services/surgical-audit">Security Audits</Link>
        </div>
        <div className="ms-footer-col">
          <h4>Insights & Research</h4>
          <Link to="/insights">The Solian Wolves Blog</Link>
          <Link to="/insights">Whitepapers</Link>
          <Link to="/insights">Case Studies</Link>
          <Link to="/insights">Engineering Metrics</Link>
        </div>
        <div className="ms-footer-col">
          <h4>Company</h4>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About Us</Link>
          <Link to="/insights">Newsroom</Link>
          <Link to="/contact">Investor Relations</Link>
        </div>
        <div className="ms-footer-col">
          <h4>Global Offices</h4>
          <span className="footer-static">Nairobi, KE</span>
          <span className="footer-static">London, UK</span>
          <span className="footer-static">Dubai, UAE</span>
        </div>
      </div>
      <div className="ms-footer-bottom">
        <div className="ms-footer-locale">
          <span>&#127758; English (Global)</span>
        </div>
        <div className="ms-footer-legal">
          <Link to="/">Sitemap</Link>
          <Link to="/contact">Contact Solian Wolves</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Trademarks</Link>
          <Link to="/">Accessibility</Link>
          <span className="copyright">&copy; Solian Wolves 2026</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const serviceCards = [
    {
      image: card1Img,
      title: "Full-Cycle Development",
      description: "Build high-performance, globally scalable websites blending conceptual architecture with premium design.",
      linkText: "View Development Flow",
      to: "/services/full-cycle-development"
    },
    {
      image: card2Img,
      title: "The Surgical Audit",
      description: "Deep-dive performance and UX analysis. We fix data silos and eliminate technical debt before building.",
      linkText: "Explore Audit Methodology",
      to: "/services/surgical-audit"
    },
    {
      image: card3Img,
      title: "Architectural Scaling",
      description: "Bespoke headless architectures. We engineer modular applications designed for infinite flexibility.",
      linkText: "View Engineering Scope",
      to: "/services/architectural-scaling"
    },
    {
      image: card4Img,
      title: "White Collar Partner",
      description: "C-suite level strategic advisory. Fractional CTO support embedding our senior leadership into your business.",
      linkText: "Explore Partnership",
      to: "/services/white-collar-partner"
    }
  ];



  const teamCards = [
    {
      image: ianImg,
      title: "Ian Momanyi Nyakundi",
      description: "Chief Executive Officer. Provides overall corporate vision, strategic leadership, and executive direction.",
      linkText: "Read bio",
      to: "/team/ian",
      portrait: true
    },
    {
      image: hillaryImg,
      title: "Hillary Onchwati Isaiah",
      description: "Chief Operating Officer. Oversees day-to-day internal business operations, service delivery, and strategic planning.",
      linkText: "Read bio",
      to: "/team/hillary",
      portrait: true
    },
    {
      image: aliceImg,
      title: "Alice Moraa Nyakundi",
      description: "Chief Financial Officer. Oversees financial planning, budgeting, accounting practices, and revenue pipelines.",
      linkText: "Read bio",
      to: "/team/alice",
      portrait: true
    },
    {
      image: noellaImg,
      title: "Noella Maraka Kaatho",
      description: "Executive Director / Finance & Admin. Supports financial operations, budget tracking, and HR workflow execution.",
      linkText: "Read bio",
      to: "/team/noella",
      portrait: true
    },
    {
      image: solomonImg,
      title: "Solomon Nyangweso Omwenga",
      description: "Chief Technology Officer. Directs technical architecture, enterprise software engineering, and infrastructure development.",
      linkText: "Read bio",
      to: "/team/solomon",
      portrait: true
    }
  ];

  return (
    <div className="ms-layout">
      <Navbar />
      <Hero />
      <div className="ms-container">
        <QuickLinks />
        <TechPartners />
        <CardGrid cards={serviceCards} />
      </div>
      <Banner />
      <CaseStudies />
      <div className="ms-container">
        <CardGrid sectionTitle="Our Leadership Team" cards={teamCards} columns={5} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
