import React from 'react';
import { Link } from 'react-router-dom';
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
            <a href="#microsoft365">Management Systems</a>
            <a href="#teams">ERP Solutions</a>
            <a href="#windows">Consulting</a>
            <a href="#surface">Support</a>
          </div>
        </div>
        <div className="ms-navbar-right">
          <a href="#search" className="ms-nav-item">Search</a>
          <a href="#cart" className="ms-nav-item">Cart</a>
          <a href="#signin" className="ms-nav-item">Sign in</a>
        </div>
        <div className="ms-mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
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
      <div className="ms-hero-content">
        <div className="ms-hero-box">
          <h1 className="ms-hero-title">Building the Future of Digital Systems.</h1>
          <p className="ms-hero-subtitle">We engineer high-performance software, custom ERPs, and mission-critical business systems tailored for ambitious organisations — from schools to enterprises.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Consultation</Link>
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="ms-quick-links">
      <Link to="/services/full-cycle-development" className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <path d="M12 20h16M20 12v16" stroke="#0067b8" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="14" y="14" width="12" height="12" rx="2" stroke="#0067b8" strokeWidth="2"/>
        </svg>
        <span>Choose your ERP</span>
      </Link>
      <Link to="/contact" className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <path d="M10 28 L20 12 L30 28 Z" stroke="#0067b8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <circle cx="20" cy="22" r="3" fill="#0067b8"/>
        </svg>
        <span>School Management</span>
      </Link>
      <Link to="/services/architectural-scaling" className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <circle cx="20" cy="20" r="8" stroke="#0067b8" strokeWidth="2"/>
          <path d="M20 12 Q28 16 28 20 Q28 24 20 28 Q12 24 12 20 Q12 16 20 12Z" stroke="#0067b8" strokeWidth="2" fill="none"/>
          <line x1="12" y1="20" x2="28" y2="20" stroke="#0067b8" strokeWidth="2"/>
        </svg>
        <span>Cloud Architecture</span>
      </Link>
      <Link to="/services/surgical-audit" className="ms-quick-link">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#f0f6ff"/>
          <circle cx="20" cy="20" r="6" stroke="#0067b8" strokeWidth="2"/>
          <path d="M26 14 L32 8" stroke="#0067b8" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 26 L8 32" stroke="#0067b8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span>Technical Audit</span>
      </Link>
    </section>
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
  const gridClass = columns === 5 ? "ms-grid-5" : "ms-grid";
  return (
    <section className="ms-section">
      {sectionTitle && <h2 className="ms-section-title">{sectionTitle}</h2>}
      <div className={gridClass}>
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </section>
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
          <h4>What's new</h4>
          <a href="#1">SomoBloom Portal</a>
          <a href="#2">Parent App</a>
          <a href="#3">Student Dashboard</a>
        </div>
        <div className="ms-footer-col">
          <h4>Software & Services</h4>
          <a href="#1">Custom Engineering</a>
          <a href="#2">Cloud Architecture</a>
          <a href="#3">Technical Rescue</a>
        </div>
        <div className="ms-footer-col">
          <h4>Education</h4>
          <a href="#1">School Management</a>
          <a href="#2">ERP Solutions</a>
          <a href="#3">Educator Resources</a>
        </div>
        <div className="ms-footer-col">
          <h4>Company</h4>
          <a href="#1">Careers</a>
          <a href="#2">About Solian Wolves</a>
          <a href="#3">Company News</a>
          <a href="#4">Investors</a>
        </div>
      </div>
      <div className="ms-footer-bottom">
        <div className="ms-footer-locale">
          <span>&#127758; English (United States)</span>
        </div>
        <div className="ms-footer-legal">
          <a href="#a">Sitemap</a>
          <a href="#b">Contact Solian Wolves</a>
          <a href="#c">Privacy</a>
          <a href="#d">Terms of use</a>
          <a href="#e">Trademarks</a>
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
        <CardGrid cards={serviceCards} />
      </div>
      <Banner />
      <div className="ms-container">
        <CardGrid sectionTitle="Our Leadership Team" cards={teamCards} columns={5} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
