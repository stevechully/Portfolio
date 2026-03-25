"use client";

import React from "react";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Github } from "lucide-react";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProjectsSection = () => {
  const projects = projectsData as Project[];

  // Define the categories we want to display in the tabs
  const categories = ["Professional", "Independent", "Academic Capstone", "Upcoming"];

  return (
    <section id="projects" className="py-20 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            A showcase of my industry work, independent builds, and ongoing learning.
          </p>
        </motion.div>

        <Tabs defaultValue="Professional" className="w-full flex flex-col items-center">
          <TabsList className="mb-8 flex flex-wrap justify-center bg-zinc-100 dark:bg-zinc-900 h-auto p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-black dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="w-full mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/50 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Video Player or Placeholder */}
                      <div className="w-full aspect-video border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                        {project.youtubeVideoId ? (
                          <LiteYouTubeEmbed
                            id={project.youtubeVideoId}
                            title={project.title}
                            wrapperClass="yt-lite w-full h-full"
                          />
                        ) : (
                          <div className="text-zinc-400 dark:text-zinc-600 text-sm flex items-center justify-center h-full w-full">
                            {project.category === "Upcoming" ? "Demo Coming Soon" : "No Demo Available"}
                          </div>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            {project.title}
                          </h3>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                              aria-label={`View ${project.title} source code`}
                            >
                              <Github className="w-6 h-6" />
                            </a>
                          )}
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};