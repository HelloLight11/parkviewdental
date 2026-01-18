import Link from 'next/link'

export default function SameDayCrowns() {
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
          <h1>Same-Day Crowns</h1>
          <p>Beautiful, custom dental crowns designed and placed in a single visit with CEREC technology.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>Your Crown, Your Way, Today</h2>
            <p>Traditional crowns require multiple appointments and weeks of waiting. With our CEREC same-day crown technology, you can have a custom-designed, perfectly fitted crown in just one visit.</p>
            <p>Using advanced 3D scanning and in-office milling, we create crowns from high-quality ceramic that matches your natural teeth in color, shape, and function—no temporary crowns, no return visits necessary.</p>
          </div>
          <div className="service-overview-image">✨</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>How Same-Day Crowns Work</h2>
          <p>The simple three-step process</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>1. Digital Scan</h3>
            <p>We take a precise 3D scan of your tooth—no messy impressions needed. The scan captures every detail for a perfect fit.</p>
          </div>
          <div className="treatment-card">
            <h3>2. Custom Design</h3>
            <p>Using advanced software, we design your crown right before your eyes, ensuring optimal aesthetics and function.</p>
          </div>
          <div className="treatment-card">
            <h3>3. In-Office Milling</h3>
            <p>Our CEREC mill carves your crown from a solid block of premium ceramic in about 15 minutes.</p>
          </div>
          <div className="treatment-card">
            <h3>4. Final Fitting</h3>
            <p>We polish, adjust, and bond your new crown in place. You leave with your permanent restoration complete.</p>
          </div>
          <div className="treatment-card">
            <h3>Natural Results</h3>
            <p>CEREC crowns are made from high-quality ceramic that mimics the translucency and color of natural teeth.</p>
          </div>
          <div className="treatment-card">
            <h3>Long-Lasting</h3>
            <p>Same-day crowns are just as durable as traditional lab-made crowns, lasting 15+ years with proper care.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Same-Day Crowns?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">⏱️</div>
              <h3>Save Time</h3>
              <p>One appointment instead of two or three. No waiting weeks for your crown.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🚫</div>
              <h3>No Temporaries</h3>
              <p>Skip the uncomfortable temporary crown that can fall off or break.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💉</div>
              <h3>One Numbing</h3>
              <p>Only one round of anesthesia instead of multiple visits.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Precision Fit</h3>
              <p>Digital scanning ensures an incredibly accurate, comfortable fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Need a crown? Get it done today.</h2>
          <p>Schedule your same-day crown appointment and leave with a beautiful new smile.</p>
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
