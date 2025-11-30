import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section for nav highlighting
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lm-animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".lm-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lm-root">
      {/* Animated Background Elements */}
      <div className="lm-bg-effects">
        <div className="lm-gradient-orb lm-orb-1"></div>
        <div className="lm-gradient-orb lm-orb-2"></div>
        <div className="lm-gradient-orb lm-orb-3"></div>
      </div>

      {/* Top Nav */}
      <header className={`lm-header ${scrolled ? "lm-header-scrolled" : ""}`}>
        <div className="lm-container lm-header-inner">
          <div className="lm-logo">
            <span className="lm-logo-bracket">{"<"}</span>
            Luis Mendes
            <span className="lm-logo-bracket">{" />"}</span>
          </div>
          <nav className="lm-nav">
            <a
              href="#about"
              className={activeSection === "about" ? "lm-nav-active" : ""}
            >
              About
            </a>
            <a
              href="#skills"
              className={activeSection === "skills" ? "lm-nav-active" : ""}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={activeSection === "projects" ? "lm-nav-active" : ""}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={activeSection === "experience" ? "lm-nav-active" : ""}
            >
              Experience
            </a>
            <a
              href="#certs"
              className={activeSection === "certs" ? "lm-nav-active" : ""}
            >
              Certifications
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? "lm-nav-active" : ""}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="lm-hero">
          <div className="lm-container lm-hero-inner">
            <div className="lm-hero-text">
              <p className="lm-eyebrow lm-animate">
                <span className="lm-eyebrow-icon">🔒</span>
                Network Engineering • Cybersecurity
              </p>
              <h1 className="lm-animate">
                Hey, I'm <span className="lm-highlight">Luis Mendes</span>
              </h1>
              <p className="lm-hero-subtitle lm-animate">
                Network Engineer focused on designing secure, resilient
                infrastructure for global environments. I love turning messy,
                fragile networks into scalable architectures with strong
                security controls and clear visibility.
              </p>

              <div className="lm-hero-tags lm-animate">
                <span className="lm-tag">
                  <span className="lm-tag-icon">🏗️</span>
                  Network Architecture
                </span>
                <span className="lm-tag">
                  <span className="lm-tag-icon">🛡️</span>
                  Firewall &amp; SD-WAN
                </span>
                <span className="lm-tag">
                  <span className="lm-tag-icon">🔐</span>
                  Zero Trust &amp; Segmentation
                </span>
                <span className="lm-tag">
                  <span className="lm-tag-icon">☁️</span>
                  Cloud &amp; Hybrid
                </span>
              </div>

              <div className="lm-hero-actions lm-animate">
                <a href="#projects" className="lm-btn lm-btn-primary">
                  <span>View Network Projects</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="lm-btn-icon"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#contact" className="lm-btn lm-btn-ghost">
                  Let's connect
                </a>
              </div>
            </div>

            <div className="lm-hero-card lm-animate">
              <div className="lm-card-glow"></div>
              <h2>
                <span className="lm-card-icon">🎯</span>
                Current Focus
              </h2>
              <ul>
                <li>Harden global network perimeter &amp; remote sites</li>
                <li>Standardize VLAN &amp; OT segmentation</li>
                <li>Improve monitoring, logging &amp; incident response</li>
                <li>Align network architecture with security best practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="lm-section lm-section-alt">
          <div className="lm-container lm-grid-2">
            <div className="lm-animate">
              <h2>About</h2>
              <p>
                I'm a Network Engineer with a strong interest in cybersecurity,
                working in a global life-sciences environment. My work ranges
                from designing and deploying secure campus and data center
                networks to segmenting laboratory and OT systems and rolling out
                next-generation firewall policies.
              </p>
              <p>
                I enjoy being hands-on: planning change windows, implementing
                configs, and troubleshooting complex issues — while also
                thinking at the architecture level about scalability,
                resiliency, and security controls.
              </p>
            </div>
            <div className="lm-about-highlights">
              <div className="lm-stat-card lm-animate">
                <span className="lm-stat-number">4+ yrs</span>
                <span className="lm-stat-label">at Repligen</span>
              </div>
              <div className="lm-stat-card lm-animate">
                <span className="lm-stat-number">🌍</span>
                <span className="lm-stat-label">Global sites supported</span>
              </div>
              <div className="lm-stat-card lm-animate">
                <span className="lm-stat-number">24/7</span>
                <span className="lm-stat-label">Critical infra</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="lm-section">
          <div className="lm-container">
            <h2 className="lm-animate">Core Skills</h2>
            <p className="lm-section-subtitle lm-animate">
              A mix of <strong>network engineering</strong>,{" "}
              <strong>security</strong>, and <strong>automation</strong>.
            </p>

            <div className="lm-skills-grid">
              <div className="lm-skill-card lm-animate">
                <div className="lm-skill-icon">🌐</div>
                <h3>Network Engineering</h3>
                <ul>
                  <li>LAN / WLAN design &amp; troubleshooting</li>
                  <li>Routing &amp; switching (L2/L3)</li>
                  <li>SD-WAN &amp; site-to-site VPN</li>
                  <li>QoS &amp; performance optimization</li>
                </ul>
              </div>
              <div className="lm-skill-card lm-animate">
                <div className="lm-skill-icon">🔒</div>
                <h3>Security &amp; Segmentation</h3>
                <ul>
                  <li>Firewall administration &amp; hardening</li>
                  <li>VLAN design &amp; access control</li>
                  <li>OT / lab network segmentation</li>
                  <li>Monitoring &amp; incident response support</li>
                </ul>
              </div>
              <div className="lm-skill-card lm-animate">
                <div className="lm-skill-icon">🛠️</div>
                <h3>Tools &amp; Platforms</h3>
                <ul>
                  <li>Fortinet (FortiGate, FortiManager, FortiAnalyzer)</li>
                  <li>Cisco switching &amp; wireless</li>
                  <li>Armis &amp; SNMP monitoring</li>
                  <li>Git, scripting &amp; automation basics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="lm-section lm-section-alt">
          <div className="lm-container">
            <h2 className="lm-animate">Network &amp; Security Projects</h2>
            <p className="lm-section-subtitle lm-animate">
              A few examples of the kind of work I do day-to-day.
            </p>

            <div className="lm-projects-grid">
              <article className="lm-project-card lm-animate">
                <div className="lm-project-icon">🌐</div>
                <h3>Global SD-WAN &amp; Firewall Modernization</h3>
                <p>
                  Led network changes for multiple global sites, standardizing
                  configurations and improving resiliency using SD-WAN and
                  dual-ISP designs. Implemented new firewall policies, VPN
                  tunnels, and failover paths to reduce downtime risk.
                </p>
                <ul className="lm-project-meta">
                  <li>FortiGate / SD-WAN</li>
                  <li>Dual ISP</li>
                  <li>Site-to-site VPN</li>
                </ul>
              </article>

              <article className="lm-project-card lm-animate">
                <div className="lm-project-icon">🔬</div>
                <h3>Lab &amp; OT Network Segmentation</h3>
                <p>
                  Designed and deployed VLAN standards to separate office, lab,
                  OT, and guest networks. Re-organized switch port mappings,
                  documented critical devices, and worked with stakeholders so
                  security controls aligned with lab operations.
                </p>
                <ul className="lm-project-meta">
                  <li>VLAN &amp; ACLs</li>
                  <li>OT / Lab Security</li>
                  <li>Least privilege access</li>
                </ul>
              </article>

              <article className="lm-project-card lm-animate">
                <div className="lm-project-icon">📊</div>
                <h3>FortiManager &amp; FortiAnalyzer Rollout</h3>
                <p>
                  Helped implement FortiManager to centralize firewall
                  management and FortiAnalyzer for global logging and reporting.
                  Improved change control, policy consistency, and incident
                  investigation across all firewalls.
                </p>
                <ul className="lm-project-meta">
                  <li>Centralized management</li>
                  <li>SIEM / logging</li>
                  <li>Compliance reporting</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="lm-section">
          <div className="lm-container">
            <h2 className="lm-animate">Experience</h2>
            <div className="lm-timeline">
              <div className="lm-timeline-item lm-animate">
                <div className="lm-timeline-dot" />
                <div className="lm-timeline-content">
                  <h3>Network Engineer</h3>
                  <p className="lm-timeline-company">
                    Repligen Corporation — Global Infrastructure
                  </p>
                  <p className="lm-timeline-dates">2021 – Present</p>
                  <ul>
                    <li>
                      Design, deploy, and support campus, lab, and OT networks
                      across multiple global locations.
                    </li>
                    <li>
                      Implement firewall policies, VPNs, and segmentation to
                      protect critical manufacturing and lab systems.
                    </li>
                    <li>
                      Collaborate with security, systems, and site operations
                      teams on architecture and incident response.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lm-timeline-item lm-animate">
                <div className="lm-timeline-dot" />
                <div className="lm-timeline-content">
                  <h3>IT Specialist / Support</h3>
                  <p className="lm-timeline-company">
                    Repligen Corporation — Infrastructure &amp; Support
                  </p>
                  <p className="lm-timeline-dates">2019 – 2021</p>
                  <ul>
                    <li>
                      Supported end users, network connectivity, and core
                      infrastructure services.
                    </li>
                    <li>
                      Assisted with network changes, hardware upgrades, and
                      troubleshooting high-impact issues.
                    </li>
                    <li>
                      Built the foundation to transition into a dedicated
                      network engineering role.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certs" className="lm-section lm-section-alt">
          <div className="lm-container">
            <h2 className="lm-animate">Certifications &amp; Learning</h2>
            <div className="lm-certs-grid">
              <div className="lm-cert-card lm-animate">
                <div className="lm-cert-icon">🎓</div>
                <h3>CCNA</h3>
                <p>
                  Cisco Certified Network Associate. Validates routing,
                  switching, basic security, and fundamental network design.
                </p>
              </div>
              <div className="lm-cert-card lm-animate">
                <div className="lm-cert-icon">☁️</div>
                <h3>Cybersecurity &amp; Cloud</h3>
                <p>
                  Ongoing study in cybersecurity frameworks, cloud networking,
                  and secure architectures to deepen both breadth and depth of
                  skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="lm-section lm-contact">
          <div className="lm-container lm-grid-2">
            <div className="lm-animate">
              <h2>Let's Connect</h2>
              <p>
                Open to conversations about network engineering, security
                initiatives, or future opportunities. Feel free to reach out.
              </p>
              <ul className="lm-contact-list">
                <li>
                  <span className="lm-contact-label">📧 Email</span>
                  <a href="mailto:cvlopes88@gmail.com">cvlopes88@gmail.com</a>
                </li>
                <li>
                  <span className="lm-contact-label">📍 Location</span>
                  Boston, MA (USA)
                </li>
                <li>
                  <span className="lm-contact-label">💼 LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/luis-mendes-ab156265/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/luis-mendes-ab156265
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="lm-contact-form lm-animate"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="lm-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div className="lm-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="lm-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="What would you like to talk about?"
                />
              </div>
              <button
                type="submit"
                className="lm-btn lm-btn-primary lm-btn-full"
              >
                <span>Send Message</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="lm-btn-icon"
                >
                  <path
                    d="M14 2L7 9M14 2L9.5 14L7 9M14 2L2 6.5L7 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="lm-form-note">
                This form is a front-end demo. You can hook it up to your
                preferred backend or email service.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lm-footer">
          <div className="lm-container">
            <p>
              © {new Date().getFullYear()} Luis Mendes. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
