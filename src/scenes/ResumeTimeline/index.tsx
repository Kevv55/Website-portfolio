import { Chrono } from "react-chrono";
import Fund from "@/assets/Fund.jpeg"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

const Timeline = () => {
  const items = [{
    title: "September 2023 - Present",
    cardTitle: "Equity Analyst - The Fund",
    url: "https://www.mun.ca/business/centres-and-engagement/the-fund/",
    cardSubtitle:"",
    cardDetailedText: 
    ["Employed a top-down analysis approach and intrinsic valuation methods to value companies in the Real Estate sector. Used Bloomberg terminals to screen equities research industries, analyze companies financial statements and credit risk.",
    " Used excel to build financial models. Performed “what-if” analyses for accessing a stock’s price sensitivity. \n", 
    "Analyzed Prologis inc. (NYSE: PLD) and made a buy recommendation which brought a 19% return, a company operating in an industry that had an average return of 8.34%.",
    "Performed economic research in the Indian real estate market, and the factors driving demand for office REITs.",
    "Developed Monte Carlo simulations using Python."],
    media: {
      type: "IMAGE",
      source: {
        url: "https://media.licdn.com/dms/image/C560BAQF4QEb8S1CiNw/company-logo_200_200/0/1659016756981/the_fund_memorial_university_logo?e=2147483647&v=beta&t=UohFQ7_zT0sKzjtFK8lP0mtadeQsBpDp3alNhMHsn7o"
      }
    }
  },
  {
    title: "May 2022 - Present",
    cardTitle: "Technology support assistant - Queen Elizabeth II library",
    url: "https://www.mun.ca/thecommons/",
    cardSubtitle:"The Commons",
    cardDetailedText: 
    ["Help desk assistant:","○	Analysed and performed troubleshooting of complex computer hardware and software computing problems daily.", " \n",
    "○	Managed Linux server connections for computers in the network, remote users, and TLD nameservers. ", 
    "Software Tutor:",
    "○	Conducted both large workshops and provided 1-on-1 tutoring for Microsoft Office suite (excel, word & PowerPoint), Adobe creative cloud and other software.",
    "Makerspace Assistant:",
    "○	Designed, sliced and printed 3D models and CAD designs for customers.", "○	Promoted and sold technological solutions such as CNC milling, 3D printing and scanning."],
    media: {
      type: "IMAGE",
      source: {
        url: "https://yt3.ggpht.com/ytc/AIdro_kIlNrns2fliCe9exow8wYfLAMCW8Kh6CnAvCCG=s48-c-k-c0x00ffffff-no-rj"
      }
    }
  },
    ];

  return (
    <section id="experience" className="mx-auto min-h-full w-full py-20 bg-white">
    <div className="w-4/5 ml-10 mx-auto items-center justify-center">
        <div className="mx-auto flex">
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                  <HText>
                    EXPERIENCE TIMELINE
                  </HText>
                  <p>
                    Click on the button below to access my full resume
                  </p>
                  <div>
            <button type="button" onClick={(e) => {e.preventDefault(); window.location.href='http://google.com'}} className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">Resume</button>
            </div>
                </motion.div>
            </div>
        <div style={{ width: '800px', height: '1400px' }} className="place-content-center ml-10 mt-10 justify-between">
            <Chrono items={items} mode="VERTICAL" disableInteraction="true" highlightCardsOnHover="true" disableToolbar="false" timelinePointShape="circle" 
            useReadMore={false}/>
        </div>
        
    </div>
    </section>
  )
}
export default Timeline