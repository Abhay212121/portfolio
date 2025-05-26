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
    <div className="flex px-20 h-[55vh] justify-around bg-[#1A2946] items-start">
      <div className="text-white font-body flex flex-col gap-6 my-12">
        <span className="font-heading w-fit text-5xl border-b-2 border-orange-400">
          Contact Me
        </span>
        <p className="text-xl">
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p className="flex gap-4 text-xl items-center">
          <Icon
            path={mdiPhone}
            size={1}
            className="text-orange-400 hover:scale-115 transition duration-200"
          />
          <span>+91 7678212166</span>
        </p>
        <p className="flex gap-4 text-xl items-center">
          <Icon
            path={mdiEmail}
            size={1}
            className="text-orange-400 hover:scale-115 transition duration-200"
          />
          <span>abhay.work.02@gmail.com</span>
        </p>
        <div className="flex gap-6 items-center">
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
      <div className="h-[80%] my-auto">
        <img
          src="images/profile/footer.jpg"
          alt="Image not found"
          className="h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
