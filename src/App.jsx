import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import SEO from './components/SEO.jsx';
import './App.css';
import heroBg from './assets/1.jpg';
import bannerBg from './assets/2.jpg';
import card1Img from './assets/3.jpg';
import card2Img from './assets/4.jpg';
import card3Img from './assets/5.jpg';
import card4Img from './assets/6.jpg';
import abstractBg from './assets/abstract-bg.jpg';
import bannerImage from './assets/banner-bg.jpg';
import logoImg from './assets/logo.jpg';
import noellaImg from './assets/noella.jpg';
import aliceImg from './assets/alice.jpg';
import solomonImg from './assets/solomon-mirror-cropped.jpg';
import ianImg from './assets/ian-new-cropped.jpg';
import hillaryImg from './assets/hillary.jpg';

function Navbar() {
  const { t } = useTranslation();
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
              <span className="ms-nav-dropdown-toggle">{t('nav.company')} ▾</span>
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
              <span className="ms-nav-dropdown-toggle">{t('nav.solutions')} ▾</span>
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
            <div className="ms-nav-dropdown">
              <span className="ms-nav-dropdown-toggle">{t('nav.products')} ▾</span>
              <div className="ms-nav-dropdown-menu mega-menu" style={{ minWidth: '350px' }}>
                <div className="mega-menu-grid" style={{ gridTemplateColumns: '1fr' }}>
                  <a href="https://somobloom.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ms-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                        <line x1="12" y1="22" x2="12" y2="15.5"></line>
                        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                        <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                        <line x1="12" y1="2" x2="12" y2="8.5"></line>
                      </svg>
                      SomoBloom ↗
                    </h4>
                    <p>The definitive enterprise school management system.</p>
                  </a>
                </div>
              </div>
            </div>
            <Link to="/insights">{t('nav.insights')}</Link>
            {/* Show Sign In link on mobile inside the menu since the top-right button is hidden */}
            <Link to="/portal" className="ms-mobile-signin" style={{ color: '#0067b8', fontWeight: 'bold' }}>{t('nav.signin')} ➔</Link>
          </div>
        </div>
        <div className="ms-navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <LanguageSwitcher direction="down" />
          <ThemeToggle />
          <Link to="/portal" className="ms-nav-item">{t('nav.signin')}</Link>
        </div>
        <div className="ms-mobile-controls">
          <div className="ms-mobile-theme">
            <ThemeToggle />
          </div>
          <div className="ms-mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </div>
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
  const { t } = useTranslation();
  return (
    <section className="ms-hero">
      <img
        className="ms-hero-img"
        src={abstractBg}
        alt="Abstract Technology Background"
      />
      <motion.div 
        className="ms-hero-content"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ms-hero-text-container" style={{ maxWidth: '800px' }}>
          <h1 className="ms-hero-title">{t('hero.title')}<br/> <span style={{ color: 'var(--ms-blue)' }}>{t('hero.title_highlight')}.</span></h1>
          <p className="ms-hero-subtitle" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>{t('hero.subtitle')}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="ms-btn ms-btn-primary">{t('hero.cta_primary')}</Link>
            <Link to="/methodology" className="ms-btn btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}>{t('hero.cta_secondary')}</Link>
          </div>
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
          <rect width="40" height="40" rx="4" fill="var(--ms-card-bg)" stroke="var(--ms-border)"/>
          <path d="M12 20h16M20 12v16" stroke="var(--ms-text-main)" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="14" y="14" width="12" height="12" rx="2" stroke="var(--ms-text-main)" strokeWidth="2"/>
        </svg>
        <span>Choose your ERP</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="var(--ms-card-bg)" stroke="var(--ms-border)"/>
          <path d="M10 28 L20 12 L30 28 Z" stroke="var(--ms-text-main)" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <circle cx="20" cy="22" r="3" fill="var(--ms-text-main)"/>
        </svg>
        <span>School Management</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="var(--ms-card-bg)" stroke="var(--ms-border)"/>
          <circle cx="20" cy="20" r="8" stroke="var(--ms-text-main)" strokeWidth="2"/>
          <path d="M20 12 Q28 16 28 20 Q28 24 20 28 Q12 24 12 20 Q12 16 20 12Z" stroke="var(--ms-text-main)" strokeWidth="2" fill="none"/>
          <line x1="12" y1="20" x2="28" y2="20" stroke="var(--ms-text-main)" strokeWidth="2"/>
        </svg>
        <span>Cloud Architecture</span>
      </div>
      <div className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="var(--ms-card-bg)" stroke="var(--ms-border)"/>
          <circle cx="20" cy="20" r="6" stroke="var(--ms-text-main)" strokeWidth="2"/>
          <path d="M26 14 L32 8" stroke="var(--ms-text-main)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 26 L8 32" stroke="var(--ms-text-main)" strokeWidth="2" strokeLinecap="round"/>
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
          <div className="ms-card" style={{ background: 'radial-gradient(circle at top left, rgba(0, 103, 184, 0.08), transparent 60%), var(--ms-card-bg)' }}>
            <div className="ms-card-content" style={{ padding: '32px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--ms-blue)', fontWeight: 'bold' }}>FINANCE</span>
              <h3 className="ms-card-title">Scaling Financial Infrastructure</h3>
              <p className="ms-card-desc">How we can migrate legacy records to a secure headless architecture with zero downtime.</p>
              <Link to="/insights" className="ms-card-link">Read full solution ➔</Link>
            </div>
          </div>
          <div className="ms-card" style={{ background: 'radial-gradient(circle at top left, rgba(0, 103, 184, 0.08), transparent 60%), var(--ms-card-bg)' }}>
            <div className="ms-card-content" style={{ padding: '32px' }}>
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

function FeaturedProducts() {
  const { t } = useTranslation();
  return (
    <motion.section 
      className="ms-section"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ marginTop: '24px' }}
    >
      <div className="ms-grid" style={{ gridTemplateColumns: '1fr' }}>
        <a href="https://somobloom.com" target="_blank" rel="noopener noreferrer" className="ms-card" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '40px', gap: '32px', background: 'radial-gradient(circle at right, rgba(0, 103, 184, 0.1), transparent 50%), var(--ms-card-bg)' }}>
          <div style={{ background: 'var(--ms-bg-main)', padding: '24px', borderRadius: '16px', border: '1px solid var(--ms-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ms-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
              <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
              <line x1="12" y1="2" x2="12" y2="8.5"></line>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--ms-text-main)' }}>{t('featured.product_name')}</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--ms-mid-gray)', margin: 0, maxWidth: '600px' }}>{t('featured.product_desc')}</p>
            <div style={{ marginTop: '16px', color: 'var(--ms-text-main)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t('featured.cta')}
            </div>
          </div>
        </a>
      </div>
    </motion.section>
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
      <img
        className="ms-banner-img"
        src={bannerImage}
        alt="Abstract Panoramic Background"
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
  const { t } = useTranslation();
  return (
    <footer className="ms-footer">
      <div className="ms-footer-links">
        <div className="ms-footer-col">
          <h4>{t('footer.enterprise')}</h4>
          <Link to="/services/full-cycle-development">{t('footer.e1')}</Link>
          <Link to="/services/full-cycle-development">{t('footer.e2')}</Link>
          <Link to="/services/full-cycle-development">{t('footer.e3')}</Link>
          <Link to="/services/full-cycle-development">{t('footer.e4')}</Link>
        </div>
        <div className="ms-footer-col">
          <h4>{t('footer.cloud')}</h4>
          <Link to="/services/architectural-scaling">{t('footer.c1')}</Link>
          <Link to="/services/architectural-scaling">{t('footer.c2')}</Link>
          <Link to="/services/architectural-scaling">{t('footer.c3')}</Link>
          <Link to="/services/architectural-scaling">{t('footer.c4')}</Link>
        </div>
        <div className="ms-footer-col">
          <h4>{t('footer.advisory')}</h4>
          <Link to="/services/white-collar-partner">{t('footer.a1')}</Link>
          <Link to="/services/white-collar-partner">{t('footer.a2')}</Link>
          <Link to="/services/surgical-audit">{t('footer.a3')}</Link>
          <Link to="/services/surgical-audit">{t('footer.a4')}</Link>
        </div>
        <div className="ms-footer-col">
          <h4>{t('footer.company')}</h4>
          <Link to="/careers">{t('footer.co4')}</Link>
          <Link to="/about">{t('footer.co1')}</Link>
          <Link to="/insights">{t('nav.insights')}</Link>
          <Link to="/contact">{t('legal.contact')}</Link>
        </div>
        <div className="ms-footer-col">
          <h4>{t('footer.connect')}</h4>
          <a href="https://x.com/solianwolves" target="_blank" rel="noopener noreferrer">X: @solianwolves</a>
          <a href="https://www.linkedin.com/company/145206557/" target="_blank" rel="noopener noreferrer">{t('footer.con1')}</a>
          <a href="https://www.youtube.com/@thesolianwolves" target="_blank" rel="noopener noreferrer">{t('footer.con3')}</a>
          <a href="https://www.reddit.com/user/The_Solian_Wolves/" target="_blank" rel="noopener noreferrer">{t('footer.con2')}</a>
        </div>
      </div>
      <div className="ms-footer-bottom">
        <div className="ms-footer-locale">
          <LanguageSwitcher direction="up" />
        </div>
        <div className="ms-footer-legal">
          <Link to="/">{t('legal.sitemap')}</Link>
          <Link to="/contact">{t('legal.contact')}</Link>
          <Link to="/">{t('legal.privacy')}</Link>
          <Link to="/">{t('legal.terms')}</Link>
          <Link to="/">{t('legal.cookies')}</Link>
          <Link to="/">{t('legal.trademarks')}</Link>
          <Link to="/">{t('legal.accessibility')}</Link>
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
      <SEO />
      <Navbar />
      <Hero />
      <div className="ms-container">
        <QuickLinks />
        <TechPartners />
        <FeaturedProducts />
        <CardGrid cards={serviceCards} sectionTitle="Engineering Services" />
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
