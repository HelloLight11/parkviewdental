import Link from 'next/link'

export default function SedationOptions() {
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
          <h1>Sedation Options</h1>
          <p>Comfortable, anxiety-free dental care with multiple sedation options tailored to your needs.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview-inner">
          <div className="service-overview-content">
            <h2>Relaxed Dentistry for Everyone</h2>
            <p>Dental anxiety is real, and we understand. At Parkview Dental, we offer multiple levels of sedation to ensure every patient can receive the care they need in complete comfort.</p>
            <p>Whether you experience mild nervousness or severe dental phobia, we have a sedation option that will help you relax and feel at ease throughout your treatment.</p>
          </div>
          <div className="service-overview-image">😌</div>
        </div>
      </section>

      {/* Treatments */}
      <section className="service-treatments">
        <div className="section-header">
          <h2>Sedation Options We Offer</h2>
          <p>From mild relaxation to complete comfort</p>
        </div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <h3>Nitrous Oxide</h3>
            <p>&quot;Laughing gas&quot; provides mild relaxation. You&apos;ll feel calm and comfortable but remain fully conscious. Effects wear off quickly after treatment.</p>
          </div>
          <div className="treatment-card">
            <h3>Oral Sedation</h3>
            <p>A prescription pill taken before your appointment produces moderate sedation. You&apos;ll feel deeply relaxed and may not remember much of the procedure.</p>
          </div>
          <div className="treatment-card">
            <h3>IV Sedation</h3>
            <p>Deeper sedation administered through an IV for maximum comfort. Ideal for longer procedures or patients with severe anxiety.</p>
          </div>
          <div className="treatment-card">
            <h3>General Anesthesia</h3>
            <p>Complete unconsciousness for extensive procedures. Administered by a licensed anesthesiologist in a safe, monitored environment.</p>
          </div>
          <div className="treatment-card">
            <h3>Comfort Amenities</h3>
            <p>Noise-canceling headphones, weighted blankets, and aromatherapy to enhance your comfort during any procedure.</p>
          </div>
          <div className="treatment-card">
            <h3>Gentle Techniques</h3>
            <p>Our team is trained in gentle injection techniques and uses the latest technology to minimize discomfort.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why">
        <div className="service-why-inner">
          <h2>Why Choose Parkview for Sedation Dentistry?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🏥</div>
              <h3>Certified Team</h3>
              <p>Our dentists are certified in sedation dentistry with extensive training and experience.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📊</div>
              <h3>Constant Monitoring</h3>
              <p>Advanced monitoring equipment tracks your vital signs throughout your procedure.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💊</div>
              <h3>Personalized Approach</h3>
              <p>We recommend the right sedation level based on your anxiety level and procedure needs.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤗</div>
              <h3>Compassionate Care</h3>
              <p>We never judge. Our team creates a supportive environment for anxious patients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Don&apos;t let anxiety keep you from a healthy smile.</h2>
          <p>Contact us to discuss which sedation option is right for you.</p>
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
