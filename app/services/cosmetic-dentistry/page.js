import Link from 'next/link'

export default function CosmeticDentistry() {
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
          <h1>Cosmetic Dentistry</h1>
          <p>Transform your smile with advanced cosmetic treatments designed to enhance your natural beauty.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>Create Your Perfect Smile</h2>
            <p>At Parkview Dental, we combine artistry with advanced dental technology to deliver stunning cosmetic results. Whether you&apos;re looking to brighten your smile, fix imperfections, or completely transform your appearance, our cosmetic dentistry services can help you achieve the smile you&apos;ve always wanted.</p>
            <p>Dr. Park and our cosmetic specialists take a personalized approach, carefully considering your facial features, skin tone, and personal preferences to design a smile that looks natural and complements your unique appearance.</p>
          </div>
          <div className="service-overview-image">💎</div>
        </div>
      </section>

      {/* Treatments */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>Cosmetic Treatments We Offer</h2>
          <p>Comprehensive solutions for every smile goal</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>Porcelain Veneers</h3>
            <p>Ultra-thin shells that cover the front of your teeth, correcting chips, stains, gaps, and misalignment. Custom-crafted for a natural, beautiful appearance.</p>
          </div>
          <div className="treatment-card">
            <h3>Teeth Whitening</h3>
            <p>Professional-grade whitening treatments that deliver dramatic results safely. Choose from in-office treatments or custom take-home kits.</p>
          </div>
          <div className="treatment-card">
            <h3>Dental Bonding</h3>
            <p>A quick, affordable solution for minor chips, cracks, or gaps using tooth-colored composite resin that blends seamlessly with your natural teeth.</p>
          </div>
          <div className="treatment-card">
            <h3>Smile Makeovers</h3>
            <p>Comprehensive treatment plans combining multiple procedures to achieve your ideal smile. Fully customized to your unique goals and timeline.</p>
          </div>
          <div className="treatment-card">
            <h3>Gum Contouring</h3>
            <p>Reshape your gum line to create better symmetry and proportion, revealing more of your beautiful teeth for a balanced smile.</p>
          </div>
          <div className="treatment-card">
            <h3>Tooth Recontouring</h3>
            <p>Subtle reshaping of teeth to improve their appearance, fixing minor overlaps, irregular shapes, or pointed edges.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Parkview for Cosmetic Dentistry?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🎨</div>
              <h3>Artistic Approach</h3>
              <p>Our dentists combine clinical expertise with an artistic eye to create naturally beautiful results.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🔬</div>
              <h3>Advanced Technology</h3>
              <p>Digital smile design lets you preview your results before treatment begins.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✨</div>
              <h3>Premium Materials</h3>
              <p>We use only the highest quality materials for long-lasting, natural-looking results.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h3>Personalized Care</h3>
              <p>Every treatment plan is customized to your unique features and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Ready to transform your smile?</h2>
          <p>Schedule a cosmetic consultation to discuss your goals and explore your options.</p>
          <a href="/#contact" className="btn-primary">
            Book Consultation
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
