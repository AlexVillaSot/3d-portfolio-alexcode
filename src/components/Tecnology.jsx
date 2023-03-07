import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tecnology = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What makes me a developer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#0097d7] to-[#915EFF]">
            My Tecnologies.
          </span>
        </h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tecnology, "work");
