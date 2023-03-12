import { BsFillMoonStarsFill } from "react-icons/bs";

export function Navigation() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">JJ</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            href="CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-red-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
          >
            <button>Download CV</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}