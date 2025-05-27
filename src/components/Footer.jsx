import Icon from "@mdi/react";
import {
  mdiPhone,
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiFileAccount,
} from "@mdi/js";

export default function Footer() {
  return (
    <div className="flex h-[55vh] items-start justify-around bg-[#1A2946] px-20">
      <div className="font-body my-12 flex flex-col gap-6 text-white">
        <span className="font-heading w-fit border-b-2 border-orange-400 text-5xl">
          Contact Me
        </span>
        <p className="text-xl">
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p className="flex items-center gap-4 text-xl">
          <Icon
            path={mdiPhone}
            size={1}
            className="text-orange-400 transition duration-200 hover:scale-115"
          />
          <span>+91 7678212166</span>
        </p>
        <p className="flex items-center gap-4 text-xl">
          <Icon
            path={mdiEmail}
            size={1}
            className="text-orange-400 transition duration-200 hover:scale-115"
          />
          <span>abhay.work.02@gmail.com</span>
        </p>
        <div className="flex items-center gap-6">
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
            href="https://drive.google.com/file/d/1YJV1oPaxVROyjtXRXq0gIZdOx-HaYBed/view?usp=drive_link"
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
      <div className="my-auto h-[80%]">
        <img
          src="images/profile/footer.jpg"
          alt="Image not found"
          className="h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
