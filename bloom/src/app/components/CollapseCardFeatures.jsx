"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const features = [
  {
    title: "Celebrate",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
  {
    title: "Analyze",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
  {
    title: "Execute",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
  {
    title: "Review/Walkthrough",
    Icon: FiLink,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem explicabo nobis officia, nostrum eligendi accusamus unde ad cumque, magnam deleniti adipisci fugiat facere. Veniam?",
  },
  {
    title: "Strategy",
    Icon: FiTarget,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab perspiciatis earum quibusdam laudantium non nihil nesciunt?",
  },
  {
    title: "Research",
    Icon: FiArrowUp,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae sed? Maxime!",
  },
  {
    title: "Discovery",
    Icon: FiUpload,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsum rerum natus fugit ex minima voluptas ratione quaerat. Ea!",
  },
];


const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(6);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section id="process" className="overflow-hidden bg-neutral-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl text-white font-righteous">
          Why BloomMedia? <span className="text-bloomYellow">Here's why.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-white p-4 text-2xl text-neutral-950 transition-colors hover:bg-bloomOrange"
              onClick={shiftRight}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-white p-4 text-2xl text-neutral-950 transition-colors hover:bg-bloomPink"
              onClick={shiftLeft}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`rounded-2xl relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-neutral-900 text-white" : " bg-white"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;