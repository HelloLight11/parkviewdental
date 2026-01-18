import Link from 'next/link'

export default function ImplantDentistry() {
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
          <h1>Implant Dentistry</h1>
          <p>Permanent, natural-looking tooth replacement with state-of-the-art dental implant technology.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>The Gold Standard in Tooth Replacement</h2>
            <p>Dental implants are the most advanced and long-lasting solution for missing teeth. Unlike dentures or bridges, implants replace both the root and crown of your tooth, providing a stable foundation that looks, feels, and functions just like a natural tooth.</p>
            <p>At Parkview Dental, we use cutting-edge 3D imaging and guided surgery techniques to place implants with exceptional precision, ensuring optimal results and faster healing times.</p>
          </div>
          <div className="service-overview-image">🔬</div>
        </div>
      </section>

      {/* Treatments */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>Implant Solutions We Offer</h2>
          <p>Customized options for every situation</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>Single Tooth Implants</h3>
            <p>Replace one missing tooth with a standalone implant and crown that blends seamlessly with your natural teeth.</p>
          </div>
          <div className="treatment-card">
            <h3>Implant Bridges</h3>
            <p>Replace multiple adjacent missing teeth with an implant-supported bridge—no need to modify healthy neighboring teeth.</p>
          </div>
          <div className="treatment-card">
            <h3>All-on-4 / All-on-6</h3>
            <p>Replace an entire arch of teeth with just 4-6 strategically placed implants. A permanent alternative to dentures.</p>
          </div>
          <div className="treatment-card">
            <h3>Implant-Supported Dentures</h3>
            <p>Secure your dentures with implants for improved stability, comfort, and confidence while eating and speaking.</p>
          </div>
          <div className="treatment-card">
            <h3>Bone Grafting</h3>
            <p>Rebuild bone density to create a strong foundation for implants, even if you&apos;ve experienced bone loss.</p>
          </div>
          <div className="treatment-card">
            <h3>Immediate Load Implants</h3>
            <p>In qualifying cases, receive your implant and temporary crown in a single visit—teeth in a day.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Parkview for Dental Implants?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Guided Surgery</h3>
              <p>3D-guided implant placement for maximum precision and predictable results.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">⚡</div>
              <h3>Faster Healing</h3>
              <p>Advanced techniques minimize trauma and accelerate your recovery time.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🏆</div>
              <h3>Premium Implants</h3>
              <p>We use only top-tier implant systems with proven long-term success rates.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">😌</div>
              <h3>Comfort Options</h3>
              <p>Sedation available for anxiety-free treatment from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Ready to restore your smile?</h2>
          <p>Schedule an implant consultation to learn if dental implants are right for you.</p>
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
        <p className="footer-powered">Powered by <a href="https://launchsmile.com" target="_blank" rel="noopener noreferrer">LaunchSmile</a></p>
      </footer>
    </>
  )
}
