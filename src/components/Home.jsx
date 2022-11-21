import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import me from "../assets/keshav.png";

const Home = () => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hello, I Am <br /> Keshav Todi
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Website Developer", "Application Developer", "A Creator", "Game Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <a className="btn" href="/Resume.pdf" download={true} >
            Download Resume
          </a>
        </div>
      </section>
      <section>
        <img src={me} alt="Aryan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;