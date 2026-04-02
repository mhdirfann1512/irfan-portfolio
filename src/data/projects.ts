// Define the shape of a Project object
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  image: string;
}

// Export the data to be used in other files
export const projects: Project[] = [
  {
    id: 1,
    title: "Laboratory Sample Management System",
    description: "A web-based system using Node.js and MySQL with OpenAI API for predictive analytics.",
    tags: ["Node.js", "MySQL", "OpenAI API", "Express"],
    githubLink: "https://github.com/yourusername/lab-system",
    image: "https://picsum.photos/400/200",
  },
  {
    id: 2,
    title: "MediMap Android App",
    description: "Location-based clinic discovery application built with Google Maps API and Firebase.",
    tags: ["Kotlin", "Firebase", "Google Maps API", "Android SDK"],
    githubLink: "https://github.com/yourusername/medimap",
    image: "https://picsum.photos/400/200",
  },
  {
    id: 3,
    title: "Stock Management System",
    description: "Full-stack inventory tracking and product analytics system.",
    tags: ["Spring Boot", "PostgreSQL", "React", "TypeScript"],
    githubLink: "https://github.com/yourusername/stock-system",
    image: "https://picsum.photos/400/200",
  },
  {
    id: 4,
    title: "Personal Expenses Tracker",
    description: "A Laravel-based record management system with analytics dashboards.",
    tags: ["Laravel", "PHP", "MySQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/expense-tracker",
    image: "https://picsum.photos/400/200",
  }
];