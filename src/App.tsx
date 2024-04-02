import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefit from "./scenes/benefits";
import OurClasses from "./scenes/classes.tsx";
import ContactUs from "./scenes/contactUs/index.tsx";
import Footer from "./scenes/footer/index.tsx";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setisTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setisTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setisTopOfPage(false);
      }
    }
    // to aviod memory leaks and bugs we need to add an event listener
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  
  })

  return (
    <div className="app bg-gray-20">
      <Navbar isTopofPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>

      <Home setSelectedPage={setSelectedPage}/>
      <Benefit setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
