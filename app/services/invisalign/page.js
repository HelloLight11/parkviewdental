import Link from 'next/link'

export default function Invisalign() {
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
          <h1>Invisalign</h1>
          <p>Straighten your teeth discreetly with clear aligners that fit your lifestyle.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>The Clear Path to a Straighter Smile</h2>
            <p>Invisalign uses a series of custom-made, virtually invisible aligners to gradually shift your teeth into the perfect position. No metal brackets, no wires—just clear, comfortable aligners that you can remove to eat, drink, and brush your teeth.</p>
            <p>As a Diamond Invisalign Provider, Parkview Dental has the experience and expertise to treat even complex orthodontic cases with exceptional results.</p>
          </div>
          <div className="service-overview-image">📐</div>
        </div>
      </section>

      {/* Treatments */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>Invisalign Treatment Options</h2>
          <p>Solutions for teens and adults alike</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>Invisalign Comprehensive</h3>
            <p>Full treatment for complex cases including severe crowding, spacing issues, and bite problems.</p>
          </div>
          <div className="treatment-card">
            <h3>Invisalign Lite</h3>
            <p>A shorter treatment option for mild to moderate alignment issues, typically completed in 6-8 months.</p>
          </div>
          <div className="treatment-card">
            <h3>Invisalign Express</h3>
            <p>Quick fixes for minor crowding or spacing, often completed in as few as 3-6 months.</p>
          </div>
          <div className="treatment-card">
            <h3>Invisalign Teen</h3>
            <p>Designed specifically for teenagers with features like compliance indicators and room for erupting teeth.</p>
          </div>
          <div className="treatment-card">
            <h3>Invisalign First</h3>
            <p>Early orthodontic treatment for children ages 6-10 to address developing alignment issues.</p>
          </div>
          <div className="treatment-card">
            <h3>Vivera Retainers</h3>
            <p>Custom-made clear retainers to maintain your beautiful results after treatment is complete.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Parkview for Invisalign?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">💎</div>
              <h3>Diamond Provider</h3>
              <p>Top 1% of Invisalign providers with extensive experience treating complex cases.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🖥️</div>
              <h3>Digital Planning</h3>
              <p>See your projected results before starting treatment with our 3D treatment simulator.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">⚡</div>
              <h3>Accelerated Options</h3>
              <p>VPro and Propel technologies available to speed up your treatment time.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📱</div>
              <h3>Virtual Monitoring</h3>
              <p>Track your progress with our app—fewer in-office visits required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Ready to start your Invisalign journey?</h2>
          <p>Schedule a consultation to see if Invisalign is right for you.</p>
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
