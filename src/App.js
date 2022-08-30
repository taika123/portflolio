/* eslint-disable jsx-a11y/anchor-is-valid */
import Spline from "@splinetool/react-spline";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import "./index.css";
import Img from "./assets/image/8ecc4b60fac53b9b62d4.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, SocialLink } from "./data";
import { Project } from "./data";
import { AnimatePresence, motion } from "framer-motion"


function App() {
  const [isActive, setActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen flex-col items-center justify-center relative bg-primary pd-20">
        {/* Navbar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 justify-center flex items-center">
          <div className="w-full bg-navBar p-4 rounded-2xl flex items-center">
            <p className="lg:text-lg text-slate-200 font-medium md:text-xl">
              Doro Nguyen
            </p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="/"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#project"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Project
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <a
                href="/download"
                alt="download"
                download="download"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-200 cursor-pointer border border-textBase hover:border-textBase px-2 py-1 rounded-xl"
              >
                Download
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer">
              <IoMenu
                className="text-2xl text-textBase"
                onClick={() => setActive(!isActive)}
              ></IoMenu>
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1.1 }} exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.5s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
                <a
                  href="/"
                  className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
                >
                  About
                </a>
                <a
                  href="#project"
                  className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
                >
                  Project
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out"
                >
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.5 }}
                  href="/download"
                  className=" text-base text-textBase font-medium hover:text-slate-200 cursor-pointer border border-textBase hover:border-textBase px-2 py-1 rounded-xl"
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* spline */}
        <div className="relative" id="home">
          <Spline scene="https://prod.spline.design/6Xxh0bvOCdyY1JBE/scene.splinecode" />

          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md border border-textBase hover:border-red-200 p-2 rounded-3xl bg-zinc-900">
              <p className="text-textBase hover:text-red-50 cursor-pointer">
                Press and drag to orbit
              </p>
            </div>
          </div>
        </div>

        {/* main */}

        <main className="w-[80%] mt-5">
          {/* About section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center ">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={Img}
                  alt="imgProfile"
                />
              </div>
            </div>

            {/* content profile*/}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Hello guys, I'm Cao Van Nguyen, I'm a Frontend programmer,My dream is to become a professional fullstack developer in the next two year
              </p>
              <motion.button
                whileTap={{ scale: 0.5 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center 
                      p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium 
                      text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 
                      group-hover:from-green-400 group-hover:to-blue-600 hover:text-white 
                      dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg 
                      hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </motion.button>
            </div>
          </section>
        </main>

        {/* Time line */}
        <section className="w-full flex items-center justify-center">
          <VerticalTimeline>
            {Experience &&
              Experience.map((data) => (
                <VerticalTimelineElement
                  key={data.id}
                  className="vertical-timeline-element--work cursor-pointer"
                  contentStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(21, 24, 31)",
                  }}
                  date={data.date}
                  iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                  icon={data.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">
                    {data.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {data.location}
                  </h4>
                  <p>{data.description}</p>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </section>

        {/* Project section */}
        <section id="project" className="flex flex-wrap items-center justify-evenly my-24 gap-4">
          {Project && Project.map(data => (
            <div key={data.id} className="border border-zinc-600 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-red-200 duration-100 ease-in-out cursor-pointer">
              <p className="text-md text-textBase font-medium uppercase text-center">{data.name.length > 25 ? `${data.name.slice(0, 25)}...` : data.name}</p>
              <a href={data.github} target="_blank" rel="noreferrer"><img src={data.imgSrc} alt="profile" title="Please click icon github to page project !!!" className="w-full h-full object-cover rounded-md my-4" /></a>
              <div className="flex flex-1 items-center justify-between">
                <p className="text-lg text-textBase ">
                  Technologies
                  <span className="block text-sm text-gray-500" >
                    {data.techs.length > 25 ? `${data.techs.slice(0, 25)}...` : data.techs}
                  </span>
                </p>
                <a href={data.github} target="_blank" rel="noreferrer" alt="">
                  <motion.div
                    whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                  </motion.div>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* section contact */}
        <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
          <p className="text-textBase text-2xl capitalize cursor-pointer hover:text-red-100">Follow on me</p>
          <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4 ">

            {SocialLink && SocialLink.map(data => (
              <motion.a
                whileTap={{ scale: 0.8 }}
                key={data.id} href="#" className="w-80 md:w-auto px-3 md:px-8 py-5 border border-zinc-800 hover:border-red-50 rounded-2xl 
                  duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                {data.iconSrc}
                <p className="text-textBase text-lg">{data.name}</p>
              </motion.a>
            ))}
          </div>

        </section>
      </div>
    </AnimatePresence>
  );
}

export default App;
