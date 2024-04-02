import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    {/*Whats happening here:
    md:h-full is the width taking the full horizontal space */}
  return (
  <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
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
                    {/**Positioning the background image relative to the foreground image */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="Home-page-text"/>
                        </div>
                    </div>
                <p className="mt-8 text-sm">
                My totally fake gym with an amazing dynamic web page that will make you want to sign up!
                Dont forget to leave us a message at the Contact Us section. 
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
                <ActionButton setSelecetedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 items-center"
                href={`#${SelectedPage.ContactUs}`}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
                    <p>Learn More</p>
                </AnchorLink>
            </motion.div>
        </div>

        {/**Image div */}
        <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="Home-page-graphic"/>
        </div>
    </motion.div>

    {/**Imagine thing about this*/}
    {isAboveMediumScreens && (
        <div className="h-[120px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
        </div>
        </div>
        </div>
        
    )}
  </section>
  );
};

export default Home;