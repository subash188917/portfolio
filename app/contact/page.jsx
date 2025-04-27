"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 90879 01697",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "subashmadhavan7@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Melur, Madurai-625106",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/mvgagzaz"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Have an idea or project in mind? I&apos;m always open to collaborating
                on exciting and meaningful work. Whether you&apos;re building something
                from scratch or need help enhancing an existing product, Let&apos;s Connect and create something amazing together.
              </p>

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone number" />
              </div>

              {/* Select dropdown */}
              <div className="relative">
                <Select
                  onValueChange={(value) => {
                    const hiddenInput = document.getElementById("selected-service");
                    if (hiddenInput) hiddenInput.value = value;
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">QA</SelectItem>
                      <SelectItem value="NSDC PROJECTS">NSDC PROJECTS</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <input type="hidden" name="service" id="selected-service" />
              </div>

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                required
              />

              {/* Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>

          {/* Info section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8">
            <div className="flex flex-col gap-10 w-full max-w-[400px]">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-accent text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
