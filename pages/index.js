"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import software from "../public/software.jpg";
import architecture from "../public/SolutionArchitecture.jpg";
import consulting from "../public/consulting.jpg";
import Dornbracht from "../public/Dornbracht.jpeg";
import Erste from "../public/ErsteGroup.png";
import Skoda from "../public/SkodaAuto.png";
import Conrad from "../public/Conrad.jpeg";
import Deloitte from "../public/Deloitte-Logo.png";
import Infor from "../public/Infor-logo.png";
//import CV from "../public/CV.pdf";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Jakub's Portfolio(WIP)</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
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
                  <a href="CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-red-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">
                      <button>Download CV</button>
                    </a>
                </li>
              </ul>
            </nav>
            <section className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Jakub Jehlík
              </h2>
              <p>Site is In Construction</p> 
              <h3 className="text-2xl py-2 md:text-3xl">
                Software engineer / Solutions Architect
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                experienced IT professional interested in
                <span className="text-teal-500">
                  technology, software development
                </span>
                and the latest progress in the industry. I enjoy deep dives into
                hard problems and tackling them from all aspects to provide
                business value for the customer.
              </p>
            </section>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
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
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src="/profile.png" width={350} height={300} alt="me" />
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Since the beginning of my career, I have worked in large US
                company, for
                <span className="text-teal-500"> digital agency</span>,
                consulted for companies in
                <span className="text-teal-500">
                  E-commerce, Automotive and Finance
                </span>
                sectors and collaborated with talented people to create digital
                products for both business and consumer use.
              </p>
              <p className="text-md py-2 lead text-gray-800">
                I offer wide range of services, including programming and
                teaching.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 round-xl my-10">
                <Image src={software} width={200} height={200} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Software Engineering
                </h3>
                <p className="py-2"></p>
                <h4 className="py-4 text-teal-600">Techstack I use</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Next.js</p>
                <p className="text-gray-800 py-1">Node</p>
                <p className="text-gray-800 py-1">Typescript</p>
              </div>
              <div className="text-center shadow-lg p-10 round-xl my-10 dark:bg-white">
                <Image src={consulting} width={200} height={200} />
                <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
                <p className="py-2">
                  guiding clients towards a better understanding of online
                  presence
                </p>
                <h4 className="py-4 text-teal-600">Tools I use</h4>
                <p className="text-gray-800 py-1">Domain Research</p>
                <p className="text-gray-800 py-1">Mentoring</p>
                <p className="text-gray-800 py-1">Coaching</p>
              </div>
              <div className="text-center shadow-lg p-10 round-xl my-10">
                <Image src={architecture} width={200} height={200} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Solution Architecture
                </h3>
                <p className="py-2">
                  Providing technical guidance and bridging technology and
                  business
                </p>
                <h4 className="py-4 text-teal-600">Tools I use</h4>
                <p className="text-gray-800 py-1">Agile</p>
                <p className="text-gray-800 py-1">Togaf</p>
                <p className="text-gray-800 py-1">Archimate</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Since the beginning of my career, I have worked in large US
                company, for digital
                <span className="text-teal-500"> agency</span>, consulted for
                companies in
                <span className="text-teal-500">
                  E-commerce, Automotive and Finance
                </span>
                sectors and collaborated with talented people to create digital
                products for both business and consumer use.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis=1/3 flex-1">
                <Image
                  src={Dornbracht}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis=1/3 flex-1">
                <Image
                  src={Conrad}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis=1/3 flex-1">
                <Image
                  src={Skoda}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis=1/3 flex-1">
                <Image
                  src={Erste}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis=1/3 flex-1">
                <Image
                  src={Deloitte}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis=1/3 flex-1">
                <Image
                  src={Infor}
                  className="rounded-lg object-cover"
                  width={"60 px"}
                  height={"60 px"}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
