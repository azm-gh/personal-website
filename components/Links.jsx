import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export function Links() {
  return (
    <section className="text-5xl flex justify-center gap-16 py-3 dark:bg-gray-700 rounded">
      <a
        href="https://www.linkedin.com/in/jakub-jehlik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.mentoring-club.com/the-mentors/jakub-jehlik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/mentor.png" alt="logo" width="48" height="48" className="dark:bg-gray-900 rounded-xl" />
      </a>
      <a
        href="https://github.com/azm-gh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </section>
  );
}
