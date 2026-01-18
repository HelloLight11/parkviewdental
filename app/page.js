import Link from 'next/link'

export default function Home() {
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
            <a href="#services" className="nav-link">Services</a>
            <div className="dropdown-menu">
              <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
              <Link href="/services/implant-dentistry">Implant Dentistry</Link>
              <Link href="/services/invisalign">Invisalign</Link>
              <Link href="/services/preventive-care">Preventive Care</Link>
              <Link href="/services/same-day-crowns">Same-Day Crowns</Link>
              <Link href="/services/sedation-options">Sedation Options</Link>
            </div>
          </div>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-cta">Book Online</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="hero-tag">Modern Dentistry in Seattle</span>
          <h1>Dentistry, elevated.</h1>
          <p>Experience the future of dental care. Advanced technology, exceptional comfort, and results that speak for themselves.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Schedule Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h3>24h</h3>
            <p>Emergency Response</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>Comprehensive dental services powered by the latest technology</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💎</div>
            <h3>Cosmetic Dentistry</h3>
            <p>Veneers, whitening, and smile design to create your perfect smile.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Implant Dentistry</h3>
            <p>State-of-the-art implant solutions for permanent tooth replacement.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📐</div>
            <h3>Invisalign</h3>
            <p>Clear aligner therapy for discreet, comfortable teeth straightening.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>Preventive Care</h3>
            <p>Advanced diagnostics and cleanings to maintain optimal oral health.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Same-Day Crowns</h3>
            <p>CEREC technology for beautiful, custom crowns in a single visit.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">😌</div>
            <h3>Sedation Options</h3>
            <p>Comfortable care for anxious patients with multiple sedation levels.</p>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="tech" id="technology">
        <div className="tech-inner">
          <div className="tech-content">
            <h2>Technology That Makes a Difference</h2>
            <p>We invest in the latest dental technology to provide faster, more accurate, and more comfortable treatments.</p>
            <div className="tech-list">
              <div className="tech-item">
                <div className="tech-item-text">
                  <h4>3D Digital Scanning</h4>
                  <p>No more messy impressions. Precise digital scans for perfect-fitting restorations.</p>
                </div>
              </div>
              <div className="tech-item">
                <div className="tech-item-text">
                  <h4>CBCT Imaging</h4>
                  <p>3D X-rays for comprehensive diagnosis and treatment planning.</p>
                </div>
              </div>
              <div className="tech-item">
                <div className="tech-item-text">
                  <h4>Laser Dentistry</h4>
                  <p>Minimally invasive procedures with faster healing times.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-image"></div>
        </div>
      </section>

      {/* Team */}
      <section className="team" id="team">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>Expert clinicians dedicated to exceptional care</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <img src="/drpark.jpg" alt="Dr. Michael Park" className="team-photo" />
            <h3>Dr. Michael Park</h3>
            <p className="role">Founder & Lead Dentist</p>
            <p>Harvard School of Dental Medicine. 15+ years specializing in cosmetic and implant dentistry.</p>
          </div>
          <div className="team-card">
            <img src="/drzhang.png" alt="Dr. Emily Zhang" className="team-photo" />
            <h3>Dr. Emily Zhang</h3>
            <p className="role">Cosmetic Specialist</p>
            <p>USC School of Dentistry. Expert in smile makeovers and minimally invasive aesthetics.</p>
          </div>
          <div className="team-card">
            <img src="/drjamis.jpg" alt="Dr. James Wilson" className="team-photo" />
            <h3>Dr. James Wilson</h3>
            <p className="role">Orthodontist</p>
            <p>Invisalign Diamond Provider. Specializing in adult orthodontics and complex cases.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <h2>Ready to experience modern dentistry?</h2>
          <p>Schedule a consultation and see why Seattle&apos;s most discerning patients choose Parkview.</p>
          <a href="#contact" className="btn-primary">
            Book Your Visit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to elevate your dental experience? Reach out to schedule your consultation.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <h4>LOCATION</h4>
                  <p>1200 Parkview Ave, Suite 400<br />Seattle, WA 98101</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <h4>PHONE</h4>
                  <p>(206) 555-8900</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div className="contact-item-text">
                  <h4>HOURS</h4>
                  <p>Mon–Thu: 8am–6pm<br />Fri: 8am–3pm</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(206) 555-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="implants">Dental Implants</option>
                <option value="invisalign">Invisalign</option>
                <option value="general">General Checkup</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your goals..."></textarea>
            </div>
            <button type="submit" className="form-submit">Request Consultation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Link href="/" className="footer-logo">Parkview <span>Dental</span></Link>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#technology">Technology</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Parkview Modern Dentistry. All rights reserved.</p>
        <p className="footer-powered">Powered by <a href="https://launchsmile.com" target="_blank" rel="noopener noreferrer">LaunchSmile</a></p>
      </footer>
    </>
  )
}
