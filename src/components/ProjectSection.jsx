import projects from "../data/projectsDb";
import Card from "./Card";

export default function ProjectSection() {
  return (
    <div className="mt-22 mb-25 w-full sm:px-10">
      <h2 className="font-heading text-center text-4xl text-white">My Work</h2>
      <hr className="mx-auto mb-8 w-[30vw] text-orange-400 sm:w-[8vw]" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] justify-items-center gap-6">
        {projects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
