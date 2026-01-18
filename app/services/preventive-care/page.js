import Link from 'next/link'

export default function PreventiveCare() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        This is a demo site. Design by <a href="https://launchsmile.com" target="_blank" rel="noopener noreferrer">LaunchSmile</a>
      </div>

      {/* Navigation */}
      <nav>
        <Link href="/" className="logo">Parkview <span>Dental</span></Link>
        <div className="nav-links">
          <div className="nav-dropdown">
            <a href="/#services" className="nav-link">Services</a>
            <div className="dropdown-menu">
              <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
              <Link href="/services/implant-dentistry">Implant Dentistry</Link>
              <Link href="/services/invisalign">Invisalign</Link>
              <Link href="/services/preventive-care">Preventive Care</Link>
              <Link href="/services/same-day-crowns">Same-Day Crowns</Link>
              <Link href="/services/sedation-options">Sedation Options</Link>
            </div>
          </div>
          <a href="/#technology" className="nav-link">Technology</a>
          <a href="/#team" className="nav-link">Team</a>
          <a href="/#contact" className="nav-cta">Book Online</a>
        </div>
      </nav>

      {/* Service Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <span className="hero-tag">Our Services</span>
          <h1>Preventive Care</h1>
          <p>Maintain optimal oral health with comprehensive preventive dentistry services.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>Prevention is the Best Medicine</h2>
            <p>The foundation of a healthy smile is regular preventive care. At Parkview Dental, we believe in catching potential issues early and helping you maintain excellent oral health for life.</p>
            <p>Our preventive services go beyond basic cleanings. We use advanced diagnostic technology to detect problems at their earliest stages, when they&apos;re easiest and least expensive to treat.</p>
          </div>
          <div className="service-overview-image">🛡️</div>
        </div>
      </section>

      {/* Treatments */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>Preventive Services We Offer</h2>
          <p>Comprehensive care to keep your smile healthy</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>Comprehensive Exams</h3>
            <p>Thorough evaluation of your teeth, gums, bite, jaw, and oral tissues to assess your overall oral health.</p>
          </div>
          <div className="treatment-card">
            <h3>Professional Cleanings</h3>
            <p>Expert removal of plaque and tartar buildup, plus polishing to keep your teeth smooth and stain-free.</p>
          </div>
          <div className="treatment-card">
            <h3>Digital X-Rays</h3>
            <p>Low-radiation digital imaging to detect cavities, bone loss, and other issues invisible to the naked eye.</p>
          </div>
          <div className="treatment-card">
            <h3>Oral Cancer Screening</h3>
            <p>Early detection screening for oral cancer using advanced visualization technology.</p>
          </div>
          <div className="treatment-card">
            <h3>Periodontal Care</h3>
            <p>Gum disease prevention and treatment to maintain healthy gums and prevent tooth loss.</p>
          </div>
          <div className="treatment-card">
            <h3>Dental Sealants</h3>
            <p>Protective coatings for molars that help prevent cavities in hard-to-brush grooves and pits.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Parkview for Preventive Care?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🔬</div>
              <h3>Advanced Diagnostics</h3>
              <p>Intraoral cameras and digital X-rays for thorough, precise examinations.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📊</div>
              <h3>Personalized Plans</h3>
              <p>Customized prevention strategies based on your unique risk factors.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📚</div>
              <h3>Patient Education</h3>
              <p>We empower you with knowledge to maintain optimal oral health at home.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🗓️</div>
              <h3>Convenient Scheduling</h3>
              <p>Flexible appointment times to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Ready to prioritize your oral health?</h2>
          <p>Schedule your preventive care appointment today.</p>
          <a href="/#contact" className="btn-primary">
            Book Appointment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Link href="/" className="footer-logo">Parkview <span>Dental</span></Link>
        <div className="footer-links">
          <a href="/#services">Services</a>
          <a href="/#technology">Technology</a>
          <a href="/#team">Team</a>
          <a href="/#contact">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Parkview Modern Dentistry. All rights reserved.</p>
      </footer>
    </>
  )
}
