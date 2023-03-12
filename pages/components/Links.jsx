import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export function Links() {
  return (
    <section className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
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
        <img src="mentor.png" alt="logo" width="48" height="48" />
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
