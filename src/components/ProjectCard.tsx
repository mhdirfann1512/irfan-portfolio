import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '16px', 
      overflow: 'hidden', // This crops the image to the card's rounded corners
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease'
    }}>
      {/* Project Image Header */}
      <div style={{ 
        width: '100%', 
        height: '180px', 
        overflow: 'hidden',
        backgroundColor: '#f1f2f6' // Fallback color if image fails
      }}>
        <img 
          src={project.image} 
          alt={project.title}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          // Basic zoom effect on hover
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Project Content */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{project.title}</h3>
        <p style={{ color: '#636e72', fontSize: '0.9rem', marginBottom: '15px', minHeight: '40px' }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {project.tags.map((tag: string) => (
            <span key={tag} style={{ 
              background: '#f1f2f6', 
              color: '#4a5568', 
              padding: '4px 10px', 
              borderRadius: '6px', 
              fontSize: '0.7rem',
              fontWeight: 600
            }}>
              {tag}
            </span>
          ))}
        </div>

        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#0984e3', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            fontSize: '0.85rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          Source Code ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;