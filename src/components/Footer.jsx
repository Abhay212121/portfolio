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
    <div className="flex min-h-10 flex-col-reverse items-center justify-around bg-[#1A2946] px-5 pt-10 md:flex-row md:items-start md:px-20 md:pt-0">
      <div className="font-body my-12 flex min-h-full flex-col items-start gap-4 text-white md:gap-6">
        <span className="font-heading w-fit border-b-2 border-orange-400 text-3xl md:text-5xl">
          Contact Me
        </span>
        <p className="text-lg md:text-xl">
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p className="flex items-center gap-4 text-lg md:text-xl">
          <Icon
            path={mdiPhone}
            size={1}
            className="text-orange-400 transition duration-200 hover:scale-115"
          />
          <span>+91 7678212166</span>
        </p>
        <p className="flex items-center gap-4 text-lg md:text-xl">
          <Icon
            path={mdiEmail}
            size={1}
            className="text-orange-400 transition duration-200 hover:scale-115"
          />
          <span>abhay.work.02@gmail.com</span>
        </p>
        <div className="flex items-center gap-2 md:gap-6">
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
            href="https://drive.google.com/file/d/12ssrQZXzDmmm1rsdRAyazUyqcIDhZsKu/view?usp=drive_link"
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
          className="w-60 rounded-2xl md:h-70 md:min-w-70"
        />
      </div>
    </div>
  );
}
