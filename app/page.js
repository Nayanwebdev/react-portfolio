"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import devImg from "../public/deved_wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="pb-10">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="text-[25px] font-mono ">Nayan unjiya</h1>
            <ul className="flex items-center gap-4">
              <li className="flex">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li className="flex">
                <a href='nayanResume.pdf' target="_blank" download={true} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-[4px]">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl">nayan unjiya</h2>
            <h3 className="text-2xl py-2 leading-8 text-gray-700 md:text-3xl dark:text-white">Web Developer and Designer.</h3>
            <p className="text-md py-4 leading-7 md:text-xl max-w-lg mx-auto dark:text-white">freelancer providing services for developing web applications. with responsive design for all devices freandly.</p>
          </div>
          <div className="text-5xl flex align-middle justify-center gap-6 pb-12 dark:text-white">
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="linkedin.com/in/nayan-unjiya-7b8b3b222/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Nayanwebdev" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-blue-300 w-80 h-80 rounded-full mx-auto overflow-hidden md:w-96 md:h-96">
            <Image src={devImg} alt="devImg" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">services I offer</h3>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">
              since the beginning of my journey as a front-end developer, I have done remote work for
              <span className="text-blue-600"> group design company </span>
              <span>Designing and creating websites using programming languages such as HTML, CSS, and JavaScript.</span>
            </p>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">Monitoring website performance and analyzing user feedback to identify areas for improvement.</p>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">Testing the website for functionality and ensuring that it is compatible with different browsers and devices.</p>
          </div>
          <div className="lg:flex gap-6 py-20">
            <div className="text-center shadow-lg p-9 mb-10 lg:mb-0 lg:w-1/3 rounded-xl dark:bg-white">
              <Image src={design} alt="design" className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Designing</h3>
              <p className="py-2"> Do you have an idea for your next great website? Lets make it a reality. </p>
              <h4 className="py-4 text-blue-600">languages I use for Web Designing</h4>
              <div className="flex justify-center gap-x-3 gap-y-1 flex-wrap">
                <p className="text-grey-800">HTML5</p>
                <p className="text-grey-800">CSS3</p>
                <p className="text-grey-800">Jquery</p>
                <p className="text-grey-800">Javascript</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-9 mb-10 lg:mb-0 lg:w-1/3 rounded-xl dark:bg-white">
              <Image src={consulting} alt="design" className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">frameworks I use</h3>
              <p className="py-2"> Do you have an idea for your next great website? Lets make it a reality. </p>
              <h4 className="py-4 text-blue-600">webdesign framework I use</h4>
              <div className="flex justify-center gap-x-3 gap-y-1 flex-wrap">
                <p className="text-grey-800">Bootstrap</p>
                <p className="text-grey-800">Tailwind</p>
                <p className="text-grey-800">Reactjs</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-9 lg:w-1/3 rounded-xl dark:bg-white">
              <Image src={code} alt="code" className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Backend Developement</h3>
              <p className="py-2">Node.js is a popular backend technology that allows developers to build scalable and high-performance web applications using JavaScript on the server side</p>
              <h4 className="py-4 text-blue-600">Backend Development tools I use</h4>
              <div className="flex justify-center gap-x-3 gap-y-1 flex-wrap">
                <p className="text-grey-800">NodeJs</p>
                <p className="text-grey-800">Express.js</p>
                <p className="text-grey-800">MongoDB</p>
                <p className="text-grey-800">Mongoose</p>
                <p className="text-grey-800">Passport.js</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">portfolio</h3>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">
              since the beginning of my journey as a front-end developer, I have done remote work for
              <span className="text-blue-600"> group design company </span>
              <span>Designing and creating websites using programming languages such as HTML, CSS, and JavaScript.</span>
            </p>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">Monitoring website performance and analyzing user feedback to identify areas for improvement.</p>
            <p className="text-md py-2 leading-7 text-grey-700 dark:text-white">Testing the website for functionality and ensuring that it is compatible with different browsers and devices.</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="web1" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="web2" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="web3" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt="web4" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt="web5" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt="web6" className="rounded-lg object-cover" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
