import Icon from "@mdi/react";
import { mdiOpenInNew, mdiGithub } from "@mdi/js";

export default function Card({ project }) {
  return (
    <div className="group w-[22vw] bg-[#162544] hover:bg-[#2736529e]  rounded-4xl flex flex-col gap-4 text-white hover:scale-110 transition duration-200">
      <div className="w-fit rounded-4xl h-[22vh] ">
        <a
          href={project.previewLink}
          target="_blank"
        >
          <img
            src={project.img}
            alt="Image not found"
            className="w-full h-full rounded-tr-3xl rounded-tl-3xl"
          />
        </a>
      </div>
      <div className="px-5">
        <div className="min-h-[13vh]">
          <div className="flex justify-between mb-2">
            <div className="relative w-fit">
              <p className="font-heading text-2xl">{project.name}</p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="flex gap-1">
              <div>
                <a
                  href={project.githubLink}
                  target="_blank"
                >
                  <Icon
                    path={mdiGithub}
                    size={1.4}
                    className="hover:scale-110 duration-200 text-orange-400"
                  />
                </a>
              </div>
              <div>
                <a
                  href={project.previewLink}
                  target="_blank"
                >
                  <Icon
                    path={mdiOpenInNew}
                    size={1.4}
                    className="hover:scale-110 duration-200 text-orange-400"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="font-body text-lg min-h-20">{project.desc}</div>
        </div>
        <div className="flex justify-center gap-4 w-[90%] mx-auto my-4">
          {project.techStackUsed.map((tech) => {
            return (
              <div
                className="w-[2vw]"
                key={tech.name}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-[90%]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
