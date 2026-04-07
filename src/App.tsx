import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

// Shared Component for consistent, eye-friendly headers
const SectionHeader = ({ title, subtitle, color = '#0984e3' }: { title: string, subtitle: string, color?: string }) => (
  <div style={{ marginBottom: '50px', textAlign: 'left' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
      <div style={{ width: '30px', height: '3px', backgroundColor: color, borderRadius: '2px' }}></div>
      <span style={{ 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        fontSize: '0.75rem', 
        fontWeight: 800, 
        color: color 
      }}>
        {subtitle}
      </span>
    </div>
    <h2 style={{ fontSize: '2.8rem', fontWeight: 800, margin: 0, letterSpacing: '-1.5px', color: 'inherit' }}>
      {title}
    </h2>
  </div>
);

function App() {
  const GITHUB_USERNAME = "mhdirfann1512";
  const STATS = {
    projects: projects.length,
    commits: "100+",
    certs: "1"
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getSectionStyle = (index: number) => {
    const isDark = index % 2 !== 0;
    return {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      padding: '100px 24px',
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#f8fafc' : '#1e293b',
      transition: 'background-color 0.4s ease',
      boxSizing: 'border-box' as const,
    };
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* NAVBAR */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)', padding: '16px 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
          <b style={{ color: '#0984e3', cursor: 'pointer', fontSize: '1.4rem', letterSpacing: '-1px', fontWeight: 800 }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Irfan<span style={{color: '#64748b'}}>.dev</span>
          </b>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Skills', 'Projects', 'Experience', 'Education'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} 
                style={{ background: 'none', border: 'none', fontWeight: 600, color: '#475569', cursor: 'pointer', fontSize: '0.85rem', padding: '8px 16px', borderRadius: '12px', transition: 'all 0.2s' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0984e3'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#475569'; }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={getSectionStyle(0)}>
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '40px', 
    alignItems: 'center', 
    width: '100%',
    perspective: '1000px' // Required for the 3D profile image effect
  }}>
    
    {/* LEFT CONTENT BLOCK */}
    <div>
      <span style={{ 
        color: '#0984e3', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        fontSize: '0.9rem',
        display: 'inline-block',
        animation: 'pulse 2s infinite' // Soft pulsing available status
      }}>
        Available for hire
      </span>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          fontWeight: 900, 
          marginBottom: '20px', 
          lineHeight: 1.1, 
          letterSpacing: '-0.03em', 
          marginTop: '10px' 
        }}>
          Ready for the <span style={{ color: '#0984e3' }}>Real World</span>.
        </h1>

        <p style={{ 
          fontSize: '1.25rem', 
          color: '#64748b', 
          marginBottom: '35px', 
          lineHeight: 1.7, 
          maxWidth: '540px' 
        }}>
          Computer Science Graduate from UiTM. I’m looking to kickstart my 
          career in a professional development environment, turning my 
          technical foundation into high-impact web and mobile solutions.
        </p>
      
      {/* INTERACTIVE BUTTONS */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="btn-primary"
          style={{ 
            padding: '16px 32px', 
            background: '#0984e3', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '14px', 
            fontWeight: 700, 
            boxShadow: '0 10px 30px rgba(9, 132, 227, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
            e.currentTarget.style.backgroundColor = '#076bba'; // Deeper blue
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(9, 132, 227, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.backgroundColor = '#0984e3';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(9, 132, 227, 0.25)';
          }}
        >
          View Resume
        </a>
        <a 
          href={`https://github.com/${GITHUB_USERNAME}`} 
          target="_blank" 
          style={{ 
            padding: '16px 32px', 
            background: '#f1f5f9', 
            color: '#1e293b', 
            textDecoration: 'none', 
            borderRadius: '14px', 
            fontWeight: 700,
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = '#e2e8f0'; // Slightly darker gray
            e.currentTarget.style.borderColor = '#cbd5e1'; // Subtle border popup
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          GitHub
        </a>
      </div>
      
      {/* STATISTICS BLOCK */}
      <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
        {[{ label: 'Projects', value: STATS.projects }, { label: 'Commits', value: STATS.commits }, { label: 'Certifications', value: STATS.certs }].map(stat => (
          <div key={stat.label}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b' }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
    
    {/* RIGHT IMAGE BLOCK - 3D INTERACTIVE */}
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      
      {/* Background Decorative Frame (the static rotated one) */}
      <div style={{ 
        width: 'clamp(280px, 35vw, 400px)', 
        height: 'clamp(280px, 35vw, 400px)', 
        borderRadius: '30px', 
        backgroundColor: '#f1f5f9', 
        transform: 'rotate(-3deg)', 
        position: 'absolute', 
        zIndex: 0 
      }} />
      
      {/* INTERACTIVE PROFILE IMAGE */}
      <img 
        src="/profile-image.jpg" 
        alt="Irfan" 
        style={{ 
          width: 'clamp(280px, 35vw, 400px)', 
          height: 'clamp(280px, 35vw, 400px)', 
          borderRadius: '30px', 
          objectFit: 'cover', 
          position: 'relative', 
          zIndex: 1, 
          transform: 'rotate(3deg)', // Start at this state
          cursor: 'pointer',
          
          // Enhanced Transitions
          transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)', // Smooth out transition
          boxShadow: '0 20px 60px rgba(0,0,0,0.07)' // Subtle shadow by default
        }}
        // The core logic that creates the premium 3D effect
        onMouseEnter={(e) => {
          // Increase shadow depth and neutralize the starting rotation
          e.currentTarget.style.transform = 'rotate(0deg) translateY(-10px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(9, 132, 227, 0.15)'; // Add brand tint to shadow
          e.currentTarget.style.borderColor = '#0984e3'; // Optional subtle blue border
        }}
        onMouseLeave={(e) => {
          // Restore back to the static rotated position
          e.currentTarget.style.transform = 'rotate(3deg) translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.07)';
        }}
        // Add subtle tilt on click
        onMouseDown={(e) => {
            e.currentTarget.style.transform = 'rotate(-1deg) translateY(-5px) scale(1.03)';
        }}
        onMouseUp={(e) => {
            e.currentTarget.style.transform = 'rotate(0deg) translateY(-10px) scale(1.05)';
        }}
      />
    </div>
  </div>
</header>

      {/* SKILLS */}
      <section id="skills" style={getSectionStyle(1)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Technical Arsenal" subtitle="Expertise" color="#38bdf8" />
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {[
              { title: 'Frontend', color: '#38bdf8', logos: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript'] },
              { title: 'Backend', color: '#60a5fa', logos: ['Node.js', 'Laravel', 'PHP', 'Express', 'Spring Boot', 'Java', 'PostgreSQL', 'MySQL', 'Firebase'] },
              { title: 'Tools', color: '#818cf8', logos: ['Git', 'Postman', 'Vercel', 'AWS', 'Google Cloud'] }
            ].map((category, i) => (
              <div 
                key={i} 
                className="skill-category-card"
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '40px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default',
                  position: 'relative', // Added for glow positioning
                  overflow: 'hidden'    // Keeps glow inside the border radius
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${category.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* THE GLOW BEHIND THE CONTENT */}
                <div style={{
                  position: 'absolute',
                  right: '-10%',
                  top: '-10%',
                  width: '200px',
                  height: '200px',
                  background: category.color,
                  filter: 'blur(100px)',
                  opacity: 0.08, // Subtle enough to not wash out the text
                  pointerEvents: 'none',
                  zIndex: 0
                }} />

                {/* Wrapper to ensure content stays above glow */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ color: category.color, marginBottom: '24px', fontSize: '1.25rem', fontWeight: 700 }}>
                    {category.title}
                  </h4>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {category.logos.map((logo) => {
                      const slug = logo.toLowerCase().replace('.js', 'dotjs').replace(' ', '');
                      return (
                        <div 
                          key={logo} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            background: 'rgba(255,255,255,0.07)', 
                            padding: '10px 18px', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = category.color;
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = `0 0 20px ${category.color}44`;
                            const text = e.currentTarget.querySelector('span');
                            if (text) text.style.color = '#0f172a';
                            const icon = e.currentTarget.querySelector('img');
                            if (icon) icon.style.filter = 'brightness(0)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                            const text = e.currentTarget.querySelector('span');
                            if (text) text.style.color = '#fff';
                            const icon = e.currentTarget.querySelector('img');
                            if (icon) icon.style.filter = 'brightness(0) invert(1)';
                          }}
                        >
                          <img 
                            src={`https://cdn.simpleicons.org/${slug}`} 
                            alt={logo} 
                            style={{ 
                              width: '18px', 
                              height: '18px', 
                              filter: 'brightness(0) invert(1)',
                              transition: 'all 0.2s' 
                            }} 
                            onError={(e) => (e.currentTarget.style.display = 'none')} 
                          />
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s', color: '#fff' }}>
                            {logo}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={getSectionStyle(2)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
            <SectionHeader title="Featured Work" subtitle="Portfolio" color="#38bdf8" />
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" style={{ color: '#38bdf8', fontWeight: 700, textDecoration: 'none', marginBottom: '55px' }}>View GitHub →</a>
          </div>
          <div style={{ 
            display: 'grid', 
            // Changed from 400px to 320px to force 3 columns on desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px' // Slightly tighter gap for a cleaner look
          }}>
            {projects.map((item: Project) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={getSectionStyle(3)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Career Path" subtitle="Experience" color="#0984e3" />
          
          <div style={{ display: 'grid', gap: '32px', width: '100%', marginTop: '40px' }}>
            {[
              {
                role: 'Digital Apprentice',
                company: 'Jabatan Perkhidmatan Komputer Negeri (JPKN) Sabah',
                period: '2026',
                description: 'Planning, managing, and implementing skills development programs, technical training, and employee competency assessments.',
                color: '#0984e3'
              },
              {
                role: 'Digital Innovation Team Intern',
                company: 'Jabatan Hal Ehwal Agama Islam Negeri Sabah',
                period: '2025',
                description: '• Developed an interactive dashboard using Looker Studio by collaborating with department stakeholders to gather requirements, design layout, and integrate data.',
                color: '#38bdf8'
              }
            ].map((exp, i) => (
              <div 
                key={i}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  padding: '40px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  width: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = exp.color;
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${exp.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* THE THICK LINE HAS BEEN REMOVED */}

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h4 style={{ 
                      fontSize: '1.6rem', 
                      fontWeight: 800, 
                      margin: 0, 
                      color: '#fff',
                      letterSpacing: '-0.01em'
                    }}>
                      {exp.role}
                    </h4>
                    <p style={{ 
                      color: exp.color, 
                      fontWeight: 700, 
                      fontSize: '1.1rem', 
                      marginTop: '8px'
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <div style={{ 
                    background: 'rgba(255,255,255,0.07)', 
                    color: '#fff', 
                    padding: '8px 20px', 
                    borderRadius: '100px', 
                    fontSize: '0.85rem', 
                    fontWeight: 700,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {exp.period}
                  </div>
                </div>

                <p style={{ 
                  color: '#94a3b8', 
                  marginTop: '24px', 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  maxWidth: '900px'
                }}>
                  {exp.description}
                </p>

                {/* Background Glow Effect - Keep this for that subtle "Dark Mode" premium feel */}
                <div style={{
                  position: 'absolute',
                  right: '-10%',
                  top: '-10%',
                  width: '300px',
                  height: '300px',
                  background: exp.color,
                  filter: 'blur(120px)',
                  opacity: 0.07,
                  pointerEvents: 'none'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={getSectionStyle(4)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Academic History" subtitle="Education" color="#0984e3" />
          
          <div style={{ 
            display: 'grid', 
            gap: '32px', 
            width: '100%', 
            marginTop: '40px' 
          }}>
            {[
              {
                degree: 'Bachelor of Computer Science (Hons.) Netcentric Computing',
                uni: 'Universiti Teknologi MARA (UiTM)',
                period: '2022 — 2025',
                courses: ['Distributed Systems', 'Cloud Computing', 'Network Security', 'Web Engineering'],
                color: '#0984e3'
              },
              {
                degree: 'Foundation in Engineering',
                uni: 'Universiti Teknologi MARA (UiTM)',
                period: '2021 — 2022',
                courses: ['Advanced Mathematics', 'Physics', 'Computing Essentials'],
                color: '#0984e3'
              }
            ].map((edu, i) => (
              <div 
                key={i}
                style={{ 
                  background: '#ffffff', 
                  padding: '40px 40px 40px 65px', // EXTRA LEFT PADDING (65px) for the dot
                  borderRadius: '24px', 
                  border: '1px solid #f1f5f9',
                  width: '100%', 
                  boxSizing: 'border-box',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = edu.color;
                  e.currentTarget.style.boxShadow = `0 25px 50px -12px ${edu.color}25`;
                  const dot = e.currentTarget.querySelector('.edu-dot') as HTMLElement;
                  if(dot) dot.style.transform = 'scale(1.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  e.currentTarget.style.boxShadow = 'none';
                  const dot = e.currentTarget.querySelector('.edu-dot') as HTMLElement;
                  if(dot) dot.style.transform = 'scale(1)';
                }}
              >
                {/* THE DOT (Now safely inside the card's padding zone) */}
                <div 
                  className="edu-dot"
                  style={{
                    position: 'absolute',
                    left: '25px',
                    top: '48px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: edu.color,
                    border: '4px solid #fff',
                    boxShadow: `0 0 0 1px ${edu.color}44`,
                    zIndex: 2,
                    transition: 'transform 0.3s ease'
                  }} 
                />

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  flexWrap: 'wrap', 
                  gap: '20px', 
                  alignItems: 'flex-start' 
                }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h4 style={{ 
                      fontSize: '1.6rem', 
                      fontWeight: 800, 
                      margin: 0, 
                      color: '#1e293b',
                      letterSpacing: '-0.01em'
                    }}>
                      {edu.degree}
                    </h4>
                    <p style={{ 
                      color: edu.color, 
                      fontWeight: 700, 
                      fontSize: '1.1rem', 
                      marginTop: '8px'
                    }}>
                      {edu.uni}
                    </p>
                  </div>
                  
                  {/* Year Badge */}
                  <div style={{ 
                    background: '#f1f5f9', 
                    color: '#475569', 
                    padding: '8px 20px', 
                    borderRadius: '100px', 
                    fontSize: '0.85rem', 
                    fontWeight: 700,
                    border: '1px solid #e2e8f0'
                  }}>
                    {edu.period}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '24px' }}>
                  {edu.courses.map(tag => (
                    <span key={tag} style={{ 
                      background: '#f8fafc', 
                      color: '#64748b', 
                      padding: '6px 16px', 
                      borderRadius: '8px', 
                      fontSize: '0.8rem', 
                      fontWeight: 600,
                      border: '1px solid #f1f5f9'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Background Glow */}
                <div style={{
                  position: 'absolute',
                  right: '-5%',
                  bottom: '-5%',
                  width: '250px',
                  height: '250px',
                  background: edu.color,
                  filter: 'blur(100px)',
                  opacity: 0.04,
                  pointerEvents: 'none'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

<footer id="contact" style={{ 
  textAlign: 'center', 
  padding: '80px 24px', 
  backgroundColor: '#0f172a', 
  color: '#94a3b8',
  borderTop: '1px solid rgba(255,255,255,0.05)' 
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    
    {/* Upper Section: Call to Action */}
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
        Let's build something <span style={{ color: '#0984e3' }}>Real</span> together.
      </h2>
      <p style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.05rem' }}>
        I'm currently seeking entry-level opportunities in a professional development environment.
      </p>
    </div>

    {/* Middle Section: Socials & Contact */}
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '32px', 
      flexWrap: 'wrap',
      marginBottom: '48px' 
    }}>
      {[
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-irfan-bin-appri-1b39002b5/', icon: 'linkedin' },
        { label: 'GitHub', url: `https://github.com/${GITHUB_USERNAME}`, icon: 'github' },
        { label: 'Email', url: 'mailto:your.email@example.com', icon: 'gmail' }
      ].map((link) => (
        <a 
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: '#f8fafc', 
            textDecoration: 'none', 
            fontWeight: 600, 
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0984e3';
            e.currentTarget.style.background = 'rgba(9, 132, 227, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(9, 132, 227, 0.3)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#f8fafc';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <img 
            src={`https://cdn.simpleicons.org/${link.icon}/f8fafc`} 
            alt={link.label}
            style={{ width: '18px', height: '18px' }}
          />
          {link.label}
        </a>
      ))}
    </div>

    {/* Bottom Section: Copyright & Tech */}
    <div style={{ 
      paddingTop: '32px', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} • Irfan. All rights reserved.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ opacity: 0.8 }}>Crafted with</span>
        <span style={{ color: '#61dafb', fontWeight: 700 }}>React</span>
        <span style={{ opacity: 0.5 }}>&</span>
        <span style={{ color: '#3178c6', fontWeight: 700 }}>TypeScript</span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;