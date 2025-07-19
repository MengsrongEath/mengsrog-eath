"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sun,
  Moon,
  Home,
  Briefcase,
  FileText,
  User,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [experienceTab, setExperienceTab] = useState("study");
  const [activeSection, setActiveSection] = useState("home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [skillsStartIndex, setSkillsStartIndex] = useState(0);

  // Add mounted state to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // CV Download Function - moved inside useEffect or use callback to prevent SSR issues
  const handleDownloadCV = () => {
    // Only execute on client side
    if (typeof window === "undefined") return;

    const link = document.createElement("a");
    link.href = "/Eath_Mengsrong_CV_PhillipBank.pdf";
    link.download = "Eath_Mengsrong_CV_PhillipBank.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // GitHub link handler
  const handleGitHubClick = () => {
    window.open(
      "https://github.com/MengsrongEath",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const projects = [
    {
      id: 1,
      title: "Bakery Website",
      image: "/project-02.jpg",
      demo: "https://bakery-virid-one.vercel.app/",
      github: "https://github.com/MengsrongEath/web-eath-mengsrong",
    },
    {
      id: 2,
      title: "Factory ",
      image: "/project-03.jpg",
      demo: "https://factory-pi.vercel.app/index.html",
      github:
        "https://github.com/MengsrongEath/14_EATH_MENGSRONG_BTB_Web_Mini_Project001",
    },
    {
      id: 3,
      title: "Small Assignment Dashboard ",
      image: "/project-01.jpg",
      demo: "https://hrd-assignment-4.vercel.app/",
      github:
        "https://github.com/MengsrongEath/14_EATH_MENGSRONG_BTB_Web_Homework004",
    },
    {
      id: 4,
      title: "KiLo HEALTH website",
      image: "/project-05.jpg",
      demo: "https://gitlab.com/sambodea54/kilohealth-v2-team1",
      github: "https://gitlab.com/sambodea54/kilohealth-v2-team1",
    },
    {
      id: 5,
      title: "KiLo HEALTH Admin Dashboard",
      image: "/project-06.jpg",
      demo: "https://gitlab.com/sambodea54/system-kiloit-v2",
      github: "https://gitlab.com/sambodea54/system-kiloit-v2",
    },
  ];

  const skills = [
    { name: "React.js", icon: "fab fa-react", color: "text-blue-400" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400" },
    { name: "Java", icon: "fab fa-java", color: "text-red-500" },
    { name: "C#", icon: "fas fa-code", color: "text-purple-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-600" },
  ];

  const nextSkills = () => {
    setSkillsStartIndex((prev) => (prev + 4 >= skills.length ? 0 : prev + 4));
  };

  const prevSkills = () => {
    setSkillsStartIndex((prev) =>
      prev - 4 < 0 ? Math.max(0, skills.length - 4) : prev - 4
    );
  };

  const getCurrentSkills = () => {
    return skills.slice(skillsStartIndex, skillsStartIndex + 4);
  };

  const experiences = [
    // Study experiences
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
    {
      year: "2025",
      title: "Korea Software HRD Center",
      subtitle: "Participated in 2-month scholarship program",
      type: "study",
    },
    {
      year: "2024",
      title: "KiloIT",
      subtitle: "React.Js Training Course",
      type: "study",
    },
    {
      year: "2021 - 2022",
      title: "ETEC Center",
      subtitle: "C , C++ Programming",
      type: "study",
    },
    {
      year: "2014 - 2021",
      title: "Hun Sen Peam Chikang High School",
      subtitle: "Bacc II",
      type: "study",
    },
    // Work experiences
    {
      year: "2022 - 2024",
      title: "Video Editor and Assistant Camera",
      subtitle: "Jomnot",
      type: "work",
    },
  ];

  // Filter experiences based on selected tab
  const filteredExperiences = experiences.filter(
    (exp) => exp.type === experienceTab
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section and navigation visibility on scroll
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ["home", "about", "experience", "projects"];
      const scrollPosition = currentScrollY + 100;

      // Track active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show/hide navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 ${
          isDark ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-sm`}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/logo.svg"
            alt="Mengsrong Logo"
            width={60}
            height={35}
            priority
            className={`transition-all duration-300 ${
              isDark ? "filter-none" : "brightness-0 saturate-100"
            }`}
          />
        </motion.div>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGitHubClick}
            className={`p-2 transition-colors ${
              isDark
                ? "text-white hover:text-gray-300"
                : "text-gray-900 hover:text-gray-600"
            }`}
            aria-label="Visit GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className={`p-2 transition-colors ${
              isDark
                ? "text-white hover:text-gray-300"
                : "text-gray-900 hover:text-gray-600"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className={`${isDark ? "bg-gray-900" : "bg-white"}`}>
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-16 gap-16 lg:gap-20 pt-24 pb-16"
        >
          {/* Left Side - Profile Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="relative mb-8" variants={staggerItem}>
              <motion.div
                className={`w-48 h-48 rounded-full overflow-hidden border-4 ${
                  isDark ? "border-gray-600" : "border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-left-top"
                />
              </motion.div>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className={`text-2xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              អ៊ាត​ ម៉េងស្រុង
            </motion.h2>
            <motion.h3
              variants={staggerItem}
              className={`text-xl mb-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Eath Mengsrong
            </motion.h3>
            <motion.p
              variants={staggerItem}
              className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              Web Developer | Student
            </motion.p>
            <motion.p
              variants={staggerItem}
              className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              SETEC Institute
            </motion.p>

            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className={`mb-8 transition-colors ${
                  isDark
                    ? "bg-transparent border-gray-600 text-white hover:bg-gray-800"
                    : "bg-transparent border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              className="space-y-4 text-left"
              variants={staggerContainer}
            >
              {[
                {
                  icon: "fas fa-envelope",
                  text: "athmengsrong@gmail.com",
                  href: "mailto:athmengsrong@gmail.com",
                  isExternal: false,
                },
                {
                  icon: "fas fa-phone",
                  text: "+855 16 455061",
                  href: "tel:+85516455061",
                  isExternal: false,
                },
                {
                  icon: "fab fa-telegram",
                  text: "Telegram",
                  href: "https://t.me/cavkim",
                  isExternal: true,
                },
                {
                  icon: "fab fa-linkedin",
                  text: "LinkedIn Profile",
                  href: "https://www.linkedin.com/in/mengsrong-eath/",
                  isExternal: true,
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  variants={staggerItem}
                  className={`flex items-center gap-3 transition-colors hover:scale-105 cursor-pointer ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`${item.icon} w-4 h-4 text-sm`}></i>
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Introduction */}
          <motion.div
            className="max-w-lg"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hello there 👋
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-3xl mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              My name is{" "}
              <motion.span
                className="bg-blue-500 px-2 py-1 rounded text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Eath Mengsrong
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am a Web Developer focused on web design, and UI/UX design to
              create dynamic applications. Passionate about utilizing a variety
              of tools to develop responsive, user-friendly interfaces.
            </motion.p>
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 gap-12"
        >
          <motion.div
            className="max-w-lg"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-4xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              About
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm <span className="text-blue-400">Mengsrong</span> a Web
              Developer
            </motion.h2>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className={`space-y-4 text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {[
                "Who enjoys turning ideas into interactive and user-friendly websites.",
                "I specialize in crafting clean interfaces, focusing on both design and usability to bring meaningful experiences to the web.",
                "Whether it's a personal project or a collaborative build, I aim to write code that's both beautiful and functional. Currently, I'm growing my skills in modern frameworks and constantly learning to push creative boundaries.",
              ].map((text, index) => (
                <motion.p key={index} variants={staggerItem}>
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div
              className="w-96 h-96 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Eath Mengsrong.jpg"
                alt="About Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover object-right-bottom"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </motion.h1>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`flex rounded-full p-1 ${
                isDark ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExperienceTab("study")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  experienceTab === "study"
                    ? isDark
                      ? "bg-gray-600 text-white"
                      : "bg-white text-gray-900 shadow-sm"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Study
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExperienceTab("work")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  experienceTab === "work"
                    ? isDark
                      ? "bg-gray-600 text-white"
                      : "bg-white text-gray-900 shadow-sm"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Work
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={experienceTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`absolute left-1/2 transform -translate-x-px h-full w-0.5 origin-top ${
                    isDark ? "bg-gray-600" : "bg-gray-300"
                  }`}
                ></motion.div>

                {filteredExperiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.type}-${index}`}
                    className="relative flex items-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-1 pr-8 text-right">
                      {index % 2 === 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.2,
                          }}
                        >
                          <p
                            className={`text-sm mb-1 ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {exp.year}
                          </p>
                          <h3
                            className={`text-xl font-bold mb-1 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {exp.subtitle}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                        isDark
                          ? "bg-white border-gray-900"
                          : "bg-gray-900 border-white"
                      }`}
                    ></motion.div>

                    <div className="flex-1 pl-8">
                      {index % 2 === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.2,
                          }}
                        >
                          <p
                            className={`text-sm mb-1 ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {exp.year}
                          </p>
                          <h3
                            className={`text-xl font-bold mb-1 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {exp.subtitle}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Project
          </motion.h1>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {projects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-lg overflow-hidden relative group ${
                    isDark ? "bg-gray-800" : "bg-gray-100 shadow-md"
                  }`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />

                  {/* Overlay with project info and buttons */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-lg font-semibold mb-3">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg overflow-hidden relative group ${
                  isDark ? "bg-gray-800" : "bg-gray-100 shadow-md"
                }`}
              >
                <Image
                  src={projects[4].image || "/placeholder.svg"}
                  alt={projects[4].title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay for the 5th project */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold mb-3">
                      {projects[4].title}
                    </h3>
                    <div className="flex gap-3">
                      <motion.a
                        href={projects[4].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                      <motion.a
                        href={projects[4].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-between items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                technical skills
              </h2>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSkills}
                  className={`p-2 rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <ChevronLeft
                    className={`w-5 h-5 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSkills}
                  className={`p-2 rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <ChevronRight
                    className={`w-5 h-5 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center gap-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              key={skillsStartIndex}
            >
              {getCurrentSkills().map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${skillsStartIndex}`}
                  className="text-center"
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                      isDark ? "bg-white" : "bg-gray-900"
                    }`}
                  >
                    <i
                      className={`${skill.icon} text-3xl ${
                        isDark
                          ? skill.color || "text-gray-700"
                          : skill.color || "text-white"
                      }`}
                    ></i>
                  </motion.div>
                  <p
                    className={`font-medium ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
          >
            <motion.div
              className={`flex rounded-full px-4 sm:px-6 py-3 gap-3 sm:gap-6 ${
                isDark ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("home")}
                className={`p-2 sm:p-3 rounded-full transition-colors ${
                  activeSection === "home"
                    ? isDark
                      ? "bg-gray-600"
                      : "bg-gray-200"
                    : isDark
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Home
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("experience")}
                className={`p-2 sm:p-3 rounded-full transition-colors ${
                  activeSection === "experience"
                    ? isDark
                      ? "bg-gray-600"
                      : "bg-gray-200"
                    : isDark
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Briefcase
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className={`p-2 sm:p-3 rounded-full transition-colors ${
                  activeSection === "projects"
                    ? isDark
                      ? "bg-gray-600"
                      : "bg-gray-200"
                    : isDark
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <FileText
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("about")}
                className={`p-2 sm:p-3 rounded-full transition-colors ${
                  activeSection === "about"
                    ? isDark
                      ? "bg-gray-600"
                      : "bg-gray-200"
                    : isDark
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <User
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              </motion.button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
