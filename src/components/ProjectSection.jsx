import projects from "../data/projectsDb";
import Card from "./card";

export default function ProjectSection() {
  return (
    <div className="w-full px-10 mb-25">
      <h2 className="text-center font-heading text-white text-4xl ">My Work</h2>
      <hr className="text-orange-200 w-[8vw] mx-auto mb-8" />
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <Card
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
