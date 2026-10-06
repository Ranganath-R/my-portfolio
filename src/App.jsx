import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#" className="logo" onClick={closeMenu}>
          Ranganath R<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-status">
            <span className="hero-status-dot"></span>
            <span>COMPUTER SCIENCE ENGINEERING STUDENT</span>
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Ranganath<span> R.</span>
          </h1>

          <h2>
            Building the foundation to become a{" "}
            <strong>better software engineer.</strong>
          </h2>

          <p className="hero-description">
            Third-year Computer Science Engineering student focused on
            Data Structures, Algorithms, software development, and building
            practical applications with modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects <span>↗</span>
            </a>

            <a href="/resume.pdf" download className="secondary-button">
              Download Resume
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span>BASED IN</span>
              <strong>Mysore, India</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>DSA · Full-Stack</strong>
            </div>

            <div>
              <span>CGPA</span>
              <strong>9.1 / 10</strong>
            </div>
          </div>

        </div>

        {/* ================= HERO CARD ================= */}

        <div className="hero-visual">
          <div className="hero-grid-lines"></div>

          <div className="developer-card">

            <div className="developer-card-top">
              <div className="developer-status">
                <span className="status-dot"></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <span className="developer-card-number">01</span>
            </div>

            <div className="developer-icon">
              <span>&lt;</span>
              <span>/</span>
              <span>&gt;</span>
            </div>

            <div className="developer-card-main">
              <span className="developer-label">CURRENT ROLE</span>

              <h3>
                Computer Science
                <br />
                Engineering Student
              </h3>

              <p>
                Exploring software engineering through problem solving,
                development, and real-world projects.
              </p>
            </div>

            <div className="developer-stack">
              <span>C++</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <div className="developer-card-bottom">
              <div>
                <span>CURRENTLY LEARNING</span>
                <strong>Full-Stack Development</strong>
              </div>

              <div className="developer-arrow">↗</div>
            </div>

          </div>
        </div>

        <a href="#about" className="hero-scroll">
          <span className="hero-scroll-line"></span>
          <span>SCROLL TO EXPLORE</span>
        </a>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about reveal">

        <p className="section-label">ABOUT ME</p>

        <div className="about-container">

          <div className="about-content">

            <h2>
              Building skills through
              <span> real projects.</span>
            </h2>

            <p>
              I'm Ranganath R, a third-year Computer Science Engineering
              student at Sri Jayachamarajendra College of Engineering,
              Mysore.
            </p>

            <p>
              I enjoy solving programming problems, learning software
              development, and turning ideas into practical applications.
            </p>

            <p>
              My current focus is strengthening my foundations in Data
              Structures and Algorithms while developing skills in
              full-stack development.
            </p>

            <p>
              I believe the best way to learn software engineering is by
              building, experimenting, debugging, and continuously improving.
            </p>

          </div>

          <div className="about-stats">

            <div className="about-stat-card">
              <span className="about-stat-number">03</span>
              <strong>3rd Year</strong>
              <p>Computer Science</p>
            </div>

            <div className="about-stat-card">
              <span className="about-stat-number">9.1</span>
              <strong>CGPA</strong>
              <p>Engineering</p>
            </div>

            <div className="about-stat-card">
              <span className="about-stat-number">DSA</span>
              <strong>Current Focus</strong>
              <p>Problem Solving</p>
            </div>

            <div className="about-stat-card">
              <span className="about-stat-number">2028</span>
              <strong>Graduation</strong>
              <p>Expected</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section reveal">

        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I work with.</h2>

        <p className="section-intro">
          A growing technical toolkit built through coursework,
          problem solving, and hands-on project development.
        </p>

        <div className="skills-grid">

          <Skill
            icon="C"
            title="C"
            text="Programming fundamentals, memory concepts, pointers, and problem solving."
          />

          <Skill
            icon="C++"
            title="C++"
            text="Data Structures, Algorithms, STL, and problem solving practice."
          />

          <Skill
            icon="JV"
            title="Java"
            text="Object-oriented programming and core programming concepts."
          />

          <Skill
            icon="JS"
            title="JavaScript"
            text="Interactive web development and modern frontend programming."
          />

          <Skill
            icon="⚛"
            title="React"
            text="Component-based frontend development using React and Vite."
          />

          <Skill
            icon="ND"
            title="Node.js"
            text="Backend development, APIs, and server-side JavaScript."
          />

          <Skill
            icon="DB"
            title="Supabase"
            text="Database integration, data storage, and backend services."
          />

          <Skill
            icon="Git"
            title="Git & GitHub"
            text="Version control, repositories, and software development workflows."
          />

          <Skill
            icon="DSA"
            title="Data Structures & Algorithms"
            text="Arrays, linked lists, trees, graphs, sorting, searching, and problem solving."
          />

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section reveal">

        <p className="section-label">FEATURED PROJECTS</p>

        <div className="projects-heading">

          <div>
            <h2>Things I've built.</h2>

            <p className="section-intro">
              Practical projects built to strengthen my understanding
              of software development and real-world engineering.
            </p>
          </div>

          <div className="projects-count">
            <span>02</span>
            <small>PROJECTS</small>
          </div>

        </div>

        <div className="projects-grid">

          {/* ================= PROJECT 01 ================= */}

          <article className="project-card">

            <div className="project-visual task-visual">

              <div className="project-window">

                <div className="window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>student-task-manager</small>
                </div>

                <div className="window-content">

                  <div className="window-sidebar">
                    <div className="sidebar-brand">TASKS</div>
                    <div className="sidebar-line active"></div>
                    <div className="sidebar-line"></div>
                    <div className="sidebar-line short"></div>
                    <div className="sidebar-line"></div>
                  </div>

                  <div className="window-main">

                    <div className="dashboard-top">
                      <div>
                        <span>OVERVIEW</span>
                        <strong>Student Tasks</strong>
                      </div>

                      <div className="mini-stat">
                        <strong>03</strong>
                        <small>ACTIVE</small>
                      </div>
                    </div>

                    <div className="task-item">
                      <span className="check"></span>

                      <div>
                        <strong>Study DSA</strong>
                        <small>Algorithms practice</small>
                      </div>
                    </div>

                    <div className="task-item">
                      <span className="check"></span>

                      <div>
                        <strong>Complete Assignment</strong>
                        <small>Academic task</small>
                      </div>
                    </div>

                    <div className="task-item completed">
                      <span className="check">✓</span>

                      <div>
                        <strong>Build Project</strong>
                        <small>Completed</small>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="project-visual-label">
                FULL-STACK STUDENT PRODUCTIVITY APPLICATION
              </div>

            </div>

            <div className="project-body">

              <div className="project-top">
                <span className="project-number">01</span>
                <span className="project-status">COMPLETED</span>
              </div>

              <h3>Student Task Manager</h3>

              <p>
                A full-stack task management application designed to help
                students organize academic tasks, track completion, and
                manage their daily workload.
              </p>

              <div className="project-tech-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Supabase</span>
              </div>

              <div className="project-features">

                <div>
                  <span>01</span>
                  Task creation & management
                </div>

                <div>
                  <span>02</span>
                  Completion tracking
                </div>

                <div>
                  <span>03</span>
                  Persistent database storage
                </div>

                <div>
                  <span>04</span>
                  Node.js backend API
                </div>

              </div>

              <div className="project-footer">

                <a
                  href="https://github.com/Ranganath-R"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  View on GitHub <span>↗</span>
                </a>

              </div>

            </div>

          </article>

          {/* ================= PROJECT 02 ================= */}

          <article className="project-card">

            <div className="project-visual portfolio-visual">

              <div className="portfolio-preview">

                <div className="portfolio-preview-nav">
                  <strong>RANGANATH R</strong>

                  <div>
                    About&nbsp;&nbsp; Skills&nbsp;&nbsp; Projects
                  </div>
                </div>

                <div className="portfolio-preview-body">
                  <small>HELLO, I'M</small>

                  <strong>Ranganath R.</strong>

                  <span>
                    Computer Science Engineering Student
                  </span>

                  <div className="preview-button">
                    Explore Portfolio ↗
                  </div>
                </div>

              </div>

              <div className="project-visual-label">
                PERSONAL DEVELOPER PORTFOLIO
              </div>

            </div>

            <div className="project-body">

              <div className="project-top">
                <span className="project-number">02</span>
                <span className="project-status live-status">CURRENT</span>
              </div>

              <h3>Developer Portfolio</h3>

              <p>
                A responsive personal portfolio built to present my
                technical skills, projects, education, and journey as
                a Computer Science Engineering student.
              </p>

              <div className="project-tech-list">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-features">

                <div>
                  <span>01</span>
                  Responsive design
                </div>

                <div>
                  <span>02</span>
                  Component-based architecture
                </div>

                <div>
                  <span>03</span>
                  Smooth navigation
                </div>

                <div>
                  <span>04</span>
                  Resume integration
                </div>

              </div>

              <div className="project-footer">

                <a
                  href="https://github.com/Ranganath-R"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  View on GitHub <span>↗</span>
                </a>

              </div>

            </div>

          </article>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section reveal">

        <p className="section-label">EDUCATION</p>

        <div className="education-heading">

          <div>
            <h2>My academic journey.</h2>

            <p className="section-intro">
              The academic foundation behind my journey in Computer
              Science and software development.
            </p>
          </div>

          <div className="education-badge">CSE</div>

        </div>

        <div className="education-timeline">

          <Education
            meta="CURRENT"
            title="Bachelor of Engineering"
            subtitle="Computer Science Engineering"
            institute="Sri Jayachamarajendra College of Engineering, Mysore"
            details={["CGPA: 9.1", "3rd Year", "Expected Graduation: 2028"]}
          />

          <Education
            meta="12TH / PUC"
            title="Pre-University Education"
            subtitle="Science"
            institute="Sadvidya PU College"
            details={["Score: 95%"]}
          />

          <Education
            meta="10TH"
            title="Secondary School"
            subtitle=""
            institute="Christ School"
            details={["Score: 95%"]}
          />

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section reveal">

        <p className="section-label">CONTACT</p>

        <div className="contact-heading">

          <div>
            <h2>Let's connect.</h2>

            <p className="section-intro">
              Whether it's a project, collaboration, opportunity,
              or just a conversation about technology, feel free
              to reach out.
            </p>
          </div>

          <div className="contact-symbol">↗</div>

        </div>

        <div className="contact-grid">

          <a
            href="mailto:ranganathrr@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-icon">@</div>

            <div className="contact-card-content">
              <span>EMAIL</span>
              <strong>ranganathrr@gmail.com</strong>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>

          <a
            href="https://github.com/Ranganath-R"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">GH</div>

            <div className="contact-card-content">
              <span>GITHUB</span>
              <strong>github.com/Ranganath-R</strong>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>

          <a
            href="tel:8618791722"
            className="contact-card"
          >
            <div className="contact-card-icon">☎</div>

            <div className="contact-card-content">
              <span>PHONE</span>
              <strong>+91 8618791722</strong>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>

          <div className="contact-card contact-card-static">
            <div className="contact-card-icon">●</div>

            <div className="contact-card-content">
              <span>LOCATION</span>
              <strong>Mysore, Karnataka, India</strong>
            </div>
          </div>

        </div>

        <div className="contact-bottom">

          <div>
            <span>CURRENTLY OPEN TO</span>
            <strong>Projects · Learning · Opportunities</strong>
          </div>

          <a
            href="mailto:ranganathrr@gmail.com"
            className="contact-main-button"
          >
            Start a conversation <span>↗</span>
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          <strong>RANGANATH R</strong>
          <p>Computer Science Engineering Student</p>
        </div>

        <p>© 2026 Ranganath R. Built with React.</p>

        <div className="footer-links">

          <a
            href="https://github.com/Ranganath-R"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>·</span>

          <a href="mailto:ranganathrr@gmail.com">
            Email
          </a>

        </div>

      </footer>

    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Skill({ icon, title, text }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>

      <div className="skill-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Education({
  meta,
  title,
  subtitle,
  institute,
  details,
}) {
  return (
    <div className="education-item">

      <div className="education-marker">
        <span></span>
      </div>

      <div className="education-content">

        <div className="education-meta">{meta}</div>

        <h3>{title}</h3>

        {subtitle && <h4>{subtitle}</h4>}

        <p className="education-institute">
          {institute}
        </p>

        <div className="education-details">
          {details.map((detail, index) => (
            <span key={index}>{detail}</span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;