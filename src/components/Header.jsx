import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiFileAccount } from "@mdi/js";

export default function Header() {
  return (
    <div className="w-[75%] min-h-[50vh] mx-auto py-4 px-12 flex gap-18 bg-[#1A2946]  font-body">
      <div className="w-[40%] -left-30 relative">
        <img
          src="images/profile/header.jpg"
          alt="Image Not Found"
          className="size-80 min-w-fit"
        />
        <p className="font-heading text-5xl text-white absolute bottom-8 left-26">
          Abhay Sharma
        </p>
      </div>
      <div className="text-white flex flex-col gap-4">
        <span>
          <span className="font-heading text-4xl border-b-2 border-orange-400">
            About Me
          </span>
        </span>
        <p className="text-lg leading-6">
          Hey! I'm Abhay Sharma, a passionate web developer specializing in
          creating clean, modern websites with seamless user experiences. With a
          keen eye for design and strong technical skills, I craft digital
          solutions that combine functionality and aesthetic appeal.
        </p>
        <p className="text-lg leading-6">
          My journey began during college when I discovered a love for coding.
          Since then, I've honed my skills through numerous projects, constantly
          exploring new technologies. What drives me is the challenge of
          translating complex requirements into elegant, user-friendly
          applications.
        </p>
        <p className="text-lg leading-6">
          When I'm not coding, you can find me gaming or listening to music. I'm
          excited to contribute my skills to innovative projects that make a
          positive impact.
        </p>
        <div className="flex gap-3 items-center justify-end relative ">
          <a
            href="https://github.com/Abhay212121"
            target="_blank"
          >
            <Icon
              path={mdiGithub}
              size={1.5}
              className="text-orange-400 hover:scale-115 transition duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-sharma2121/"
            target="_blank"
          >
            <Icon
              path={mdiLinkedin}
              size={1.5}
              className="text-orange-400 hover:scale-115 transition duration-200"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1YJV1oPaxVROyjtXRXq0gIZdOx-HaYBed/view?usp=drive_link"
            target="_blank"
          >
            <Icon
              path={mdiFileAccount}
              size={1.5}
              className="text-orange-400 hover:scale-115 transition duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
