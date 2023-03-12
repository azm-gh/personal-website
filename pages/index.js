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
import { Navigation } from "../components/Navigation";
import { Introduction } from "../components/Introduction";
import { Links } from "../components/Links";
import { Profile } from "../components/Profile";
import { Text } from "../components/Text";
import { ServiceBanner } from "../components/ServiceBanner";
import { softwareSkills } from "../components/ServiceBanner";
import { consultingSkills } from "../components/ServiceBanner";
import { SASkills } from "../components/ServiceBanner";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Jakubs Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <Navigation />
            <Introduction />
            <Links />
            <Profile />
          </section>
          <section>
            <Text />
            <div className="lg:flex gap-10">
              <ServiceBanner
                skills={softwareSkills}
                soft={software}
                serviceType={"Software Engineering"}
                skill={"Techstack I use"}
                description={
                  "Delivering excellent services tailored to the client's needs"
                }
              />
              <ServiceBanner
                skills={consultingSkills}
                soft={consulting}
                serviceType={"Consulting"}
                skill={"Tools I use"}
                description={
                  "Delivering excellent services tailored to the client's needs"
                }
              />

              <ServiceBanner
                skills={SASkills}
                soft={architecture}
                serviceType={"Solution Architecture"}
                skill={"Tools I use"}
                description={
                  "Delivering excellent services tailored to the client's needs"
                }
              />
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
               My customers ranged from smaller Czech companies to international brands. Some of them are listed below:
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
