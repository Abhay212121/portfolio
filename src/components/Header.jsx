import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiFileAccount } from "@mdi/js";

export default function Header() {
  return (
    <div className="font-body mx-4 flex min-h-[50vh] flex-col items-center gap-6 bg-[#1A2946] px-4 py-4 lg:mx-auto lg:w-[90%] lg:flex-row lg:gap-18 lg:px-12 xl:w-[75%]">
      <div className="relative mx-auto px-10 lg:-left-30">
        <img
          src="images/profile/header.jpg"
          alt="Image Not Found"
          className="size-50 min-w-fit lg:size-70 xl:size-80"
        />
        <p className="font-heading absolute top-38 left-15 text-3xl text-white lg:top-45 lg:left-30 lg:text-5xl xl:top-50 xl:left-35">
          Abhay Sharma
        </p>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <span>
          <span className="font-heading border-b-2 border-orange-400 text-4xl">
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
        <div className="relative flex items-center justify-center gap-3 lg:justify-end">
          <a href="https://github.com/Abhay212121" target="_blank">
            <Icon
              path={mdiGithub}
              size={1.5}
              className="text-orange-400 transition duration-200 hover:scale-115"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-sharma2121/"
            target="_blank"
          >
            <Icon
              path={mdiLinkedin}
              size={1.5}
              className="text-orange-400 transition duration-200 hover:scale-115"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1ayZQJxjIXIo_KF64Gv6DsXqPTzGQjrdW/view?usp=sharing"
            target="_blank"
          >
            <Icon
              path={mdiFileAccount}
              size={1.5}
              className="text-orange-400 transition duration-200 hover:scale-115"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
