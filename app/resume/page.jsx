"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur sint eos praesentium magni nihil hic nobis ipsum! Nesciunt laborum saepe vero molestiae cum minus blanditiis voluptatem molestias id commodi!",
  info: [
    { fieldName: "Name", fieldValue: "Subash Madhavan" },
    { fieldName: "Phone", fieldValue: "(+91)90879 01697" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Skype", fieldValue: "subash.01" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "subashmadhavan7@gmail.com" },
    { fieldName: "Freelancer", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Tamil, English" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With a strong foundation in React development and manual testing, I’ve built and optimized web applications, collaborated with cross-functional teams, and led data-driven projects. From starting as a trainee at KVT to contributing to dynamic projects at Tech Mahindra, and currently leading MIS operations at LMGI Skill Division, my journey reflects adaptability, growth, and a commitment to delivering impactful digital solutions.",
  items: [
    { company: "KVT", position: "React Trainee", duration: "2020-2021" },
    {
      company: "Tech Mahindra",
      position: "ReactJs & Manual Tester",
      duration: "2021-2023",
    },
    // { company: "Macrow Solutions", position: "Front End Developer", duration: "2021-2023" },
    { company: "LMGI SKILL DIVISION", position: "MIS-Head", duration: "2024-Present" },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description:
  "My educational journey reflects a strong foundation in computer applications and a passion for continuous learning. From earning formal degrees in BCA and MCA to completing industry-relevant certifications and online bootcamps, I’ve consistently expanded my skillset. My academic background is complemented by hands-on experience with front-end technologies, full stack development, and cloud computing through self-paced learning and professional certifications.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    { institution: "Codeacademy", degree: "Front-end Track", duration: "2024" },
    { institution: "Online Course", degree: "Programming Course", duration: "2023" },
    {
      institution: "Tech Mahindra-SMART",
      degree: "Certified Microsoft Azure-900",
      duration: "2022",
    },
    { institution: "KLN College OF Engineering", degree: "MCA", duration: "2018-2020" },
    { institution: "NPR Arts & Science College", degree: "BCA", duration: "2014-2017" },
    {
      institution: "Government Boys Higher Secondary School",
      degree: "SSLC & HSC",
      duration: "2014-2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
  "I specialize in front-end development with a strong command of modern web technologies like HTML5, CSS3, JavaScript, and frameworks such as React.js and Next.js. My design approach is enhanced by Tailwind CSS and Figma, allowing me to craft responsive, user-friendly interfaces. I also have experience with backend fundamentals using Node.js, enabling me to contribute across the full stack when needed.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              {/* Experience content */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white">{item.company}</p>

                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              {/* Education content */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white">{item.institution}</p>

                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              {/* Skills content */}
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              {/* About me content */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;