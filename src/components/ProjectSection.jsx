import projects from "../data/projectsDb";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="mb-10 w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-orange-400">Projects</span>
        </h2>
        <hr className="mx-auto mt-2 w-24 border-orange-400" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] justify-items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
