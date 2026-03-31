// Project type definition
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  status: "active" | "archived";
  description: string;
  video: string | null;
  image: string | null;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  features: string[];
  techHighlights: string[];
  cardDescription: string;
}

// Import projects data
import projectsData from "./projects.json";

// Export typed projects array
export const projects: Project[] = projectsData as Project[];

// Helper to get a single project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Helper to get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
