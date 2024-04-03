import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import MainPic from "@/assets/MainPic.png";
import { TypeAnimation } from 'react-type-animation';
import headText from "@/assets/headText.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    {/*Whats happening here:
    md:h-full is the width taking the full horizontal space */}
  return (
  <section id="home" className="gap-10 bg-gray-20 py-20 md:h-full md:pb-1">
    {/**Image and main header section here */}
    <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
        {/* Main header 
        z-10 makes sure the div is on top and mt-32 sets the margin to create some separation 
        between this div and the previous one*/}
        <div className="z-10 mt-32 md:basis-3/5">
            {/**Headings */}
            <motion.div className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                            <img src={headText} alt="Home-page-text"/>
                            <TypeAnimation className="text-[#3C4B20] ms-3 mb-3"
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'I am a Full-Stack Developer',
                                    1000,
                                    'I am a Equity Anlayst',
                                    1000,
                                    'I am a Aspiring ML Practictioner',
                                    1000,
                                    'I am a Computer Science Student',
                                    1000,
                                    'I am a Finance Student',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                                />
                        </div>
                    </div>
                <p className="mt-8 text-sm">
                Fourth Year Computer Science and Business Student. With experience as a Full-stack developer, 
                Machine Learning Practictioner and a Strong background in Finance and Capital Markets.
                </p>
            </motion.div>
        
            {/**Action */}
            <motion.div
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}>
                    <AnchorLink onClick={() => setSelectedPage(SelectedPage.Projects)} href={`#${SelectedPage.Projects}`}>
                <button type="button" onClick={(e) => {e.preventDefault(); setSelectedPage(SelectedPage.Projects)}} className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                    Projects
                </button>
                </AnchorLink>
                <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 items-center"
                href={`#${SelectedPage.AboutMe}`}
                onClick={() => setSelectedPage(SelectedPage.AboutMe)}>
                    <p>About Me</p>
                </AnchorLink>
            </motion.div>
        </div>

        {/**Image div */}
        <div className="flex basis-2/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end md:mb-8 sm:mt-6 xs:mt-6">
            <img src={MainPic} alt="Home-page-graphic"/>
        </div>
    </motion.div>
    
  </section>
  );
};

export default Home;