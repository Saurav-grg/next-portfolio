'use client';

// import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { IoLayersOutline } from 'react-icons/io5';

const projects = [
  {
    title: 'Blog CRUD Application',
    description:
      'A dynamic blogging platform built with the MERN stack, enabling user to create, edit, and delete blog posts seamlessly. With Firebase-hosted images and rich text styling powered by ReactQuill, the app provides an engaging writing experience.',
    image: '/imgdem.jpg',
    tags: ['React.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://zenith-quest.vercel.app',
    githubUrl: 'https://github.com/Saurav-grg/Blog-app-MERN',
    featured: true,
  },
  {
    title: 'Recipe Search/Discover ',
    description:
      'A recipe discovery app leveraging a public recipe database API to help users find meal ideas by filtering recipes based on dietary needs and health considerations. The app includes a search bar with multiselect filtering options for smooth user experience and quick access to tailored recipes.',
    image: '/imgdem.jpg',
    tags: ['React js', 'Edamam API', 'Tailwind CSS'],
    liveUrl: 'https://picky-eater.onrender.com',
    githubUrl: 'https://github.com/Saurav-grg/Recipe-APP-Reactjs',
    featured: true,
  },
  // {
  //   title: 'Task Management Dashboard',
  //   description:
  //     'A collaborative task management platform with real-time updates and team collaboration features. Includes Kanban boards, time tracking, project analytics, and automated workflow capabilities. Perfect for remote teams and agile project management.',
  //   image: '/imgdem.jpg',
  //   tags: ['React js', 'Edamam API', 'Tailwind CSS'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   featured: false,
  // },
];

export default function ProjectsPage() {
  // const [filter, setFilter] = (useState < 'all') | ('featured' > 'all');

  // const filteredProjects =
  //   filter === 'all' ? projects : projects.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent/40 to-accent/90">
            My Projects
          </h1>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            A showcase of my best work, side projects, and open source
            contributions.
          </p>
          {/* <div className="flex gap-4">
            <button onClick={() => setFilter('all')} className="px-6">
              All Projects
            </button>
            <button onClick={() => setFilter('featured')} className="px-6">
              Featured
            </button>
          </div> */}
        </div>

        <div className="space-y-32 lg:space-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col gap-8 lg:items-start items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="relative aspect-[16/9] w-full lg:w-3/5 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-8 flex items-center gap-4">
                    <button
                      className="border z-10 border-accent rounded-full p-2 hover:text-accent hover:border-accent/80 "
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="" />
                      </a>
                    </button>
                    <button
                      className="border z-10  border-accent rounded-full p-2 hover:text-accent hover:border-accent/80"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/30 h-16"></div>
                </div>
              </div>

              <div className="space-y-6 lg:w-2/5">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  {/* {project.featured && (
                    <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <IoLayersOutline className="h-4 w-4" />
                      Featured Project
                    </div>
                  )} */}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 outline outline-1 outline-accent/50 hover:outline-accent cursor-pointer rounded text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
