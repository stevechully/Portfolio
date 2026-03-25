export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string; // Optional (you might not have a repo for professional/upcoming work yet)
  youtubeVideoId?: string; // Optional 
  category: "Professional" | "Independent" | "Academic Capstone" | "Upcoming";
}