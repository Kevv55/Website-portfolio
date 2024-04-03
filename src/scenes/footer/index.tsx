import Logo from "@/assets/logoKelvin.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width={150} height={150}/>
          <p className="my-5">
            Thank you for taking the time to have look at my project.
          </p>
          <p>© Kelvin Fumo | Memorial University</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p>
          <a className="my-5 hover:text-primary-300 hover:underline" href="www.linkedin.com/in/kelvinfumo">Linkedin</a>
          </p>
          <p>
          <a className="my-5 hover:text-primary-300 hover:underline" href="https://github.com/Kevv55/Kevv55/tree/main">GitHub</a>
          </p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <p>Email:  
          <a className="my-5 hover:text-primary-300 hover:underline" href="mailto:kefumo@mun.ca"> kefumo@mun.ca</a>
            </p>
        </div>
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
