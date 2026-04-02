import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

function App() {
  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      padding: '60px 20px',
      color: '#2d3436'
    }}>
      
      {/* 1. HERO SECTION */}
      <header style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 100px auto', 
        padding: '20px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        textAlign: 'left' // Reverting main text to left align for this layout
      }}>
        
        {/* Left Column: Title and Bio */}
        <div style={{ order: 1 }}> {/* Ensures text is first on small screens */}
          <h1 style={{ 
            fontSize: '3.8rem', 
            fontWeight: 800, 
            marginBottom: '10px', 
            letterSpacing: '-2px', 
            color: '#1a1a1a',
            lineHeight: 1.1
          }}>
            Portfolio
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#636e72', 
            maxWidth: '600px', 
            lineHeight: 1.65,
            marginBottom: '35px'
          }}>
            Hi, I’m a Computer Science Graduate specializing in **Netcentric Computing**. 
            I build robust, performance-focused Web and Mobile solutions.
          </p>
          
          {/* Resume Button - Still Centered relative to the column */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <a 
              href="/your-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '16px 36px', 
                background: '#0984e3', 
                color: '#fff', 
                textDecoration: 'none', 
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 6px 20px rgba(9, 132, 227, 0.35)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>📄</span> Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Creative Profile Image Area */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          order: 2, 
          position: 'relative', // Vital for the overlay badge
        }}>
          {/* Main Photo Container */}
          <div style={{ 
            width: '280px', 
            height: '280px', 
            borderRadius: '50%', // Perfect Circle
            border: '15px solid #fff', // White "frame"
            overflow: 'hidden', // Ensures photo stays circular
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            backgroundColor: '#fff', // Fallback color
          }}>
            <img 
              src="/profile-image.jpg" // Placeholder URL
              alt="Your Profile"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensures image fills circle without stretching
              }}
            />
          </div>

          {/* Creative Floating Badge: "Netcentric & Mobile" */}
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            right: '-10px', 
            background: '#fff',
            border: '2px solid #0984e3', // The theme blue
            padding: '10px 20px',
            borderRadius: '12px',
            boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: '#0984e3',
            transform: 'rotate(5deg)', // The creative slant
            whiteSpace: 'nowrap'
          }}>
            🚀 Netcentric & Mobile Dev
          </div>
        </div>
      </header>

      {/* 2. SKILLS (TECH STACK) */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {['React', 'TypeScript', 'Node.js', 'Flutter', 'Kotlin', 'Laravel', 'PostgreSQL'].map(skill => (
            <span key={skill} style={{ 
              padding: '8px 20px', 
              background: '#fff', 
              borderRadius: '50px', 
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
              border: '1px solid #e2e8f0'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px auto' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Education</h2>
        <div style={{ 
          background: '#fff', 
          padding: '35px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
          border: '1px solid #edf2f7'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ margin: 0 }}>Bachelor of Computer Science (Hons.) Netcentric Computing</h3>
              <p style={{ margin: '5px 0', fontWeight: '600', color: '#0984e3' }}>Universiti Teknologi MARA (UiTM)</p>
            </div>
            <span style={{ background: '#ebf8ff', color: '#2b6cb0', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
              2022 - 2025
            </span>
          </div>

          <div style={{ marginTop: '25px' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#4a5568', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core Focus Areas</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Distributed Systems', 'Mobile App Development', 'Web Engineering', 'Network Security', 'Cloud Computing'].map((subject) => (
                <span key={subject} style={{ fontSize: '0.8rem', color: '#718096', background: '#f7fafc', padding: '5px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #edf2f7' }} />

          <div>
            <h4 style={{ margin: 0 }}>Foundation in Engineering</h4>
            <p style={{ margin: '5px 0', color: '#718096', fontSize: '0.95rem' }}>2021 - 2022</p>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS GRID */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px auto' }}>
        <h2 style={{ color: '#2d3436', marginBottom: '30px', borderLeft: '5px solid #0984e3', paddingLeft: '15px' }}>
          Featured Work
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {projects.map((item: Project) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE & LEADERSHIP */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px auto' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Experience & Leadership</h2>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>IT Support Intern | JPKN Sabah</h4>
            <small style={{ color: '#0984e3', fontWeight: 'bold' }}>2025</small>
            <p style={{ marginTop: '10px', color: '#4a5568' }}>Executed technical troubleshooting and system maintenance within a professional government infrastructure.</p>
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Treasurer & Executive | Netcentric Computing Club (NETCOM)</h4>
            <small style={{ color: '#0984e3', fontWeight: 'bold' }}>2024 - 2025</small>
            <p style={{ marginTop: '10px', color: '#4a5568' }}>Oversaw club finances and spearheaded a SULAM cybersecurity awareness program as Program Director.</p>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 100px auto' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {['AWS Cloud Practitioner Essentials', 'Google Cloud Computing Foundations', 'Cisco IoT Security'].map(cert => (
            <div key={cert} style={{ 
              padding: '20px', 
              background: '#fff',
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              textAlign: 'center', 
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #e2e8f0', color: '#b2bec3', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} • Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;