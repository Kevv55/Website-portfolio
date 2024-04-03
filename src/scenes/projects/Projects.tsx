import { BenefitType, SelectedPage } from '@/shared/types'
import React from 'react'
import Benefit from './Benefit'
import { motion } from 'framer-motion';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import GymWebsite from "@/assets/GymWebsite.png"
import Container from './container';
import HText from '@/shared/HText';
import classification_performance from "@/assets/classification_performance.png"
import CantStop from "@/assets/CantStop.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
      image: GymWebsite,
      title: "Gym Website",
      description:
        "I wanted to put my Software development skills to use by challenging myself to a real world problem that can be answered with my skills as a developer. How can a Gym reach more customers and a broader audience? By having a website to give clients more information",
        path: "https://gym-react-typescript-eol.pages.dev/"
    },

    {
      image: classification_performance,
      title: "Classification Neural Network Model",
      description:
        "Using the Tensorflow framework, I built a NN model that classifies the apparel category of a given image",
        path: "https://github.com/Kevv55/classification_NN/tree/main"
    },

    {
      image: CantStop,
      title: "Can't Stop Board Game",
      description:
        "Using Java Swing, I created a virtual version of the game. This Allows for multiple users and even to play against the CPU",
        path: "https://github.com/Kevv55/classification_NN/tree/main"
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section id='projects' className='w-4/5 mx-auto'>
        <div className='ml-10'>
            <HText>Projects</HText>
        </div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex sm:mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Container
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
              path={benefit.path}
            />
          ))}
        </motion.div>
    </section>
  )
}

export default Projects