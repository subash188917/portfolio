"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num:'01',
        title:'web Development',
        description:"Passionate Web Developer with hands-on experience in building responsive, high-performance web applications using React, Next.js, and Tailwind CSS. Skilled in transforming complex requirements into elegant frontend solutions with a focus on performance, usability, and scalability.",
        href:""
    },
    {
        num:'02',
        title:'Testing',
        description:"Detail-oriented QA Professional with hands-on experience in manual testing and API validation using tools like Postman.Skilled in writing and executing comprehensive test cases, identifying bugs, and ensuring high-quality releases across web applications.Familiar with agile processes and test management tools like JIRA and Zephyr for seamless defect tracking and reporting.",
        href:""
    },
    {
        num:'03',
        title:'Content Creation',
        description:"Creative Content Creator specialized in crafting engaging, SEO-friendly content for educational and professional platforms.Experienced in building persuasive content strategies for college admissions, training programs, and brand storytelling.Delivers impactful visuals, compelling copy, and tailored messaging to attract, inform, and convert your target audience.",
        href:""
    },
    {
        num:'04',
        title:'MIS-Head',
        description:"MIS Head with experience in managing data operations, reporting, and technical support for major government and education projects. Skilled in ensuring accurate data flow, coordinating with stakeholders, and supporting strategic decisions. Hands-on in handling dashboards, resolving system issues, and leading teams across platforms like DDUGKY, PMKVY 4.0, NIWE, and YTS.",
        href:""
    },
]

import{motion} from "framer-motion"; 


const Services=()=>{
    return<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"

        >
                {services.map((service,index)=>{
                    return<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        {/*top*/}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                            <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl" />
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/* description */}
                        <p className="text-white/60">{service.description}</p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full">
                        
                        </div>
                    </div>
                })}
            </motion.div>
        </div>
    </section>
};
export default Services;