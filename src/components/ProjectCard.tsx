import { useState, useEffect } from 'react';
import type { Project } from '../data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const gallery = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image];

  // Auto-slide effect for the card gallery
  useEffect(() => {
    if (!isHovered || gallery.length <= 1 || isOpen) return;
    const interval = window.setInterval(() => {
      setImgIndex((prev) => (prev + 1) % gallery.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered, gallery.length, isOpen]);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex(imgIndex);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setImgIndex(0); }}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          // Glow border logic
          border: isHovered ? '1px solid #38bdf8' : '1px solid #f1f5f9',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          
          /* Smooth Bouncy Lift */
          transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          transform: isHovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
          
          /* Premium Shadow/Glow on White Background */
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(56, 189, 248, 0.25), 0 0 15px rgba(56, 189, 248, 0.1)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.04)',
          
          zIndex: isHovered ? 10 : 1,
        }}
      >
        {/* --- IMAGE CONTAINER (Clickable Zone) --- */}
        <div 
          onClick={handleOpenModal} 
          style={{ 
            position: 'relative', 
            height: '210px', 
            width: '100%', 
            backgroundColor: '#f8fafc', 
            overflow: 'hidden',
            cursor: 'zoom-in',
            borderBottom: isHovered ? '3px solid #38bdf8' : '3px solid transparent',
            transition: 'all 0.4s ease'
          }}
        >
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={project.title}
              style={{
                position: 'absolute',
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'opacity 0.6s ease-in-out',
                opacity: i === imgIndex ? 1 : 0,
              }}
            />
          ))}
          
          {isHovered && (
            <div style={{ 
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
              background: 'rgba(15, 23, 42, 0.7)', color: '#fff', padding: '10px 20px', 
              borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, backdropFilter: 'blur(8px)',
              pointerEvents: 'none', zIndex: 5
            }}>
              Expand Gallery
            </div>
          )}
        </div>

        {/* --- CONTENT SECTION (Non-Clickable) --- */}
        <div style={{ padding: '24px', cursor: 'default' }}>
          {/* Tags with Interaction */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                color: isHovered ? '#fff' : '#0369a1', 
                background: isHovered ? '#38bdf8' : '#f0f9ff', 
                padding: '4px 12px', 
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}>
                {tag}
              </span>
            ))}
          </div>

          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            margin: '0 0 10px 0', 
            color: isHovered ? '#0ea5e9' : '#1e293b', 
            transition: 'color 0.3s ease'
          }}>
            {project.title}
          </h3>

          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
            {project.description}
          </p>

          {/* Technical Detail Box */}
          <div style={{ 
            background: isHovered ? '#f0f9ff' : '#f8fafc', 
            padding: '16px', 
            borderRadius: '16px', 
            borderLeft: '4px solid #38bdf8',
            transition: 'all 0.3s ease'
          }}>
             <p style={{ margin: 0, fontSize: '0.82rem', color: isHovered ? '#0369a1' : '#475569', lineHeight: 1.5 }}>
                <strong style={{fontSize: '0.65rem', textTransform: 'uppercase', display: 'block', marginBottom: '4px', color: '#0f172a'}}>
                  Technical Detail:
                </strong>
                {project.techHighlight}
             </p>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {isOpen && (
        <div 
          onClick={handleCloseModal}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(15, 23, 42, 0.98)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(15px)', cursor: 'zoom-out'
          }}
        >
          <button onClick={handleCloseModal} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', zIndex: 10001 }}>×</button>

          <button onClick={prevImg} style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', fontSize: '2rem', transition: 'background 0.3s', zIndex: 10001 }}>‹</button>

          <div style={{ maxWidth: '85%', maxHeight: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <img 
              src={gallery[modalIndex]} 
              alt="Expanded view" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', cursor: 'default' }}
              onClick={(e) => e.stopPropagation()} 
            />
            <div style={{ color: 'white', fontWeight: 700, letterSpacing: '1px', background: 'rgba(255,255,255,0.1)', padding: '10px 25px', borderRadius: '30px' }}>
               {modalIndex + 1} / {gallery.length}
            </div>
          </div>

          <button onClick={nextImg} style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', fontSize: '2rem', transition: 'background 0.3s', zIndex: 10001 }}>›</button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;