"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Github,
  Sun,
  Moon,
  Home,
  Briefcase,
  FileText,
  User,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [experienceTab, setExperienceTab] = useState("study")
  const [activeSection, setActiveSection] = useState("home")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

  const projects = [
    { id: 1, title: "Furniture Design Website", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, title: "Interior Design Platform", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "E-commerce Furniture", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, title: "Design Portfolio", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, title: "Modern Furniture Store", image: "/placeholder.svg?height=300&width=400" },
  ]

  const skills = [
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "JS" },
    { name: "Java", icon: "☕" },
  ]

  const experiences = [
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
    {
      year: "2021 - Present",
      title: "SETEC Institute",
      subtitle: "Management Information Systems",
      type: "study",
    },
  ]

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track active section and navigation visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const sections = ["home", "about", "experience", "projects"]
      const scrollPosition = currentScrollY + 100

      // Track active section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      // Show/hide navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav
        setShowNav(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setShowNav(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"} transition-colors`}>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 ${
          isDark ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-sm`}
      >
        <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>ម៉េងស្រុង</div>
        <div className="flex gap-4">
          <button
            className={`p-2 transition-colors ${
              isDark ? "text-white hover:text-gray-300" : "text-gray-900 hover:text-gray-600"
            }`}
          >
            <Github className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 transition-colors ${
              isDark ? "text-white hover:text-gray-300" : "text-gray-900 hover:text-gray-600"
            }`}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className={`${isDark ? "bg-gray-900" : "bg-white"}`}>
        {/* Home Section - Clean Version 4 Style */}
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-16 gap-16 lg:gap-20 pt-24 pb-16"
        >
          {/* Left Side - Profile Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div
                className={`w-48 h-48 rounded-full overflow-hidden border-4 ${
                  isDark ? "border-gray-600" : "border-gray-300"
                }`}
              >
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>ឈុំ ម៉េងស្រុង</h2>
            <h3 className={`text-xl mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Eath Mengsrong</h3>
            <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Web Developer | Student</p>
            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>SETEC Institute</p>

            <Button
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

            <div className="space-y-4 text-left">
              <div className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">eathmengsrong@gmail.com</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">+855 16654061</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Telegram: t.me/eathm</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">eathmengsrong@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Introduction */}
          <div className="max-w-lg">
            <h1 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Hello there 👋</h1>
            <h2 className={`text-3xl mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>
              My name is <span className="bg-blue-500 px-2 py-1 rounded text-white">Eath Mengsrong</span>
            </h2>
            <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              I am a Web Developer focused on web design, and UI/UX design to create dynamic applications. Passionate
              about utilizing a variety of tools to develop responsive, user-friendly interfaces.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 gap-12">
          <div className="max-w-lg">
            <h1 className={`text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>About</h1>
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Hi, I'm <span className="text-blue-400">Mengsrong</span> a Web Developer
            </h2>
            <div className={`space-y-4 text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <p>Who enjoys turning ideas into interactive and user-friendly websites.</p>
              <p>
                I specialize in crafting clean interfaces, focusing on both design and usability to bring meaningful
                experiences to the web.
              </p>
              <p>
                Whether it's a personal project or a collaborative build, I aim to write code that's both beautiful and
                functional. Currently, I'm growing my skills in modern frameworks and constantly learning to push
                creative boundaries.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-96 h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="About Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16">
          <h1 className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Experience
          </h1>

          <div className="flex justify-center mb-12">
            <div className={`flex rounded-full p-1 ${isDark ? "bg-gray-800" : "bg-gray-200"}`}>
              <button
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
              </button>
              <button
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
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className={`absolute left-1/2 transform -translate-x-px h-full w-0.5 ${
                  isDark ? "bg-gray-600" : "bg-gray-300"
                }`}
              ></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center mb-12">
                  <div className="flex-1 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div>
                        <p className={`text-sm mb-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{exp.year}</p>
                        <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          {exp.title}
                        </h3>
                        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>{exp.subtitle}</p>
                      </div>
                    )}
                  </div>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                      isDark ? "bg-white border-gray-900" : "bg-gray-900 border-white"
                    }`}
                  ></div>

                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div>
                        <p className={`text-sm mb-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{exp.year}</p>
                        <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          {exp.title}
                        </h3>
                        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>{exp.subtitle}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-16">
          <h1 className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>Project</h1>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {projects.slice(0, 4).map((project) => (
                <div
                  key={project.id}
                  className={`rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform ${
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
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-16">
              <div
                className={`rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform ${
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
              </div>
            </div>

            <div className="flex justify-between items-center mb-12">
              <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>technical skills</h2>
              <div className="flex gap-4">
                <button
                  className={`p-2 rounded-full transition-colors ${
                    isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <ChevronLeft className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
                </button>
                <button
                  className={`p-2 rounded-full transition-colors ${
                    isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <ChevronRight className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-12">
              {skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-20 h-20 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                      isDark ? "bg-white" : "bg-gray-900"
                    }`}
                  >
                    <span className={`text-2xl font-bold ${isDark ? "text-black" : "text-white"}`}>{skill.icon}</span>
                  </div>
                  <p className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          showNav ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className={`flex rounded-full px-6 py-3 gap-6 ${isDark ? "bg-gray-800" : "bg-white shadow-lg"}`}>
          <button
            onClick={() => scrollToSection("home")}
            className={`p-3 rounded-full transition-colors ${
              activeSection === "home"
                ? isDark
                  ? "bg-gray-600"
                  : "bg-gray-200"
                : isDark
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            <Home className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`p-3 rounded-full transition-colors ${
              activeSection === "experience"
                ? isDark
                  ? "bg-gray-600"
                  : "bg-gray-200"
                : isDark
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            <Briefcase className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`p-3 rounded-full transition-colors ${
              activeSection === "projects"
                ? isDark
                  ? "bg-gray-600"
                  : "bg-gray-200"
                : isDark
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            <FileText className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`p-3 rounded-full transition-colors ${
              activeSection === "about"
                ? isDark
                  ? "bg-gray-600"
                  : "bg-gray-200"
                : isDark
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            <User className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
          </button>
        </div>
      </nav>
    </div>
  )
}
