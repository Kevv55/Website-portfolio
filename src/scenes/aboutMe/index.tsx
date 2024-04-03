import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import ReactP from "@/assets/ReactP.png";
import Python from "@/assets/Python.png"
import TensorFlow from "@/assets/TensorFlow.png"
import TypescriptLogo from "@/assets/TypescriptLogo.png"
import JSlogo from "@/assets/JSlogo.png"
import sklogo from "@/assets/sklogo.png"
import bar from "@/assets/bar.png"
import Bloomberg from "@/assets/Bloomberg.png"
import MS from "@/assets/MS.png"
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="aboutme" className="mx-auto min-h-full w-full py-20 bg-white">
      
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        {/* HEADER */}
        <div className="w-4/5 mx-auto">
        <motion.div
          className="md:my-10 md:w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>A LITTLE ABOUT{" "}
          <span className="text-primary-500">ME</span>
          </HText>
          <p className="my-5 text-sm">
            I am a very curious who loves, to create programs and systems that make the world a better and more effient place. 
            
          </p>
        </motion.div>

         {/* GRAPHICS AND DESCRIPTION */}
         <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    A LITTLE ABOUT MY {" "}
                    <span className="text-primary-500">EXPERIENCE</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                I am currently at the end of my double degree in Business Administration (with a concentration in Finance) and Computer Science.
                The fields of Software engineering and Data Science have always sparked my interest, I've always loved tapping into my creative side by 
                making programs and webapps that have great UX and make use of the large amounts of eye-catching UI libraries available for React.
              </p>
              <p className="mb-5">
                I have created a some projects to increase my understanding and application knowledge of the concepts that really interest me. These projects increased my experience in the fields 
                of Machine learning through the development of supervised classification and regression models, in Deep learning through the development of Neural Network classifiers, also in 
                software development by becoming familiar with how to use third party UI libraries to make dynamic front-end programs backed by Firebase and MySQL backends.
              </p>
            </motion.div>

            {/* BUTTON */}
          </div>
        </div>
        </div>

        {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-5">
            <p className="ms-11 justify-center">Frameworks and software profecient with:</p>
            <div className="mx-auto w-5/6 py-2">
            <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="React-logo" src={ReactP} width={60} height={60}/>
              <img alt="Python-logo" src={Python} width={60} height={60}/>
              <img alt="Tensor-logo" src={TensorFlow} width={120} height={100}/>
              <img alt="sk-logo" src={sklogo} width={60} height={60}/>
              <img alt="TS-logo" src={TypescriptLogo} width={60} height={60}/>
              <img alt="JS-logo" src={JSlogo} width={60} height={60}/>
              <img alt="bar" src={bar} width={60} height={150}/>
              <img alt="bloomberg" src={Bloomberg} width={100} height={100}/>
              <img alt="MS excel" src={MS} width={60} height={60}/>
        </div>
        </div>
        </div>
        
    )}

        

       
      </motion.div>
    </section>
  );
};

export default Benefits;
