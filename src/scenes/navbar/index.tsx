import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid"
import Anchors from './anchors'
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import logoKelvin from "@/assets/logoKelvin.svg"

type Props = {
  isTopofPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void; 
}

const Navbar = ({isTopofPage, selectedPage, setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const[MenuToggle, setMenuToggle] = useState<boolean>(false)
  const navbarBackground = isTopofPage ? "" : "bg-primary-100 drop-shadow "
  // this allows for the navbar items to expand and contract as the website is scaled up and down
    const flexBetween = "flex items-center justify-between"
  return (
    // the fixed top-0 z-30 w-full py-6 portion deals with the positioning of the navbar
    // fixed means that the nvbar will always stay visible even after scrolling
    // top of zero means that the navabr will always be on top, the z value does the same thing
    // w-full means that the navbar will take up the full width of the website py is for the padding
    <nav>
      {/* Outer div holding the inner div*/}
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-20 w-full py-6 h-18/`}>
        {/* Inner div holding all the elements taking up 5/8ths of the outer div space*/}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* left hand div
          leaves a 16 point gap between itself and the next div*/}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logoKelvin} alt='Logo' width={75} height={75}></img>
          </div>

          {/* left hand div
          Is above media screens is used to set the website for smaller screens like mobiles*/}
          {isAboveMediumScreens ? 
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
            <Anchors 
            page="Home" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            <Anchors page="About Me"
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            <Anchors page="Projects"
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            <Anchors page="Experience"
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <ActionButton setSelecetedPage={setSelectedPage}>
                Get in touch
              </ActionButton>
            </div>
          </div> : (
            <div>
              <button className="rounded-full bg-secondary-500 p-2"
              onClick={() => setMenuToggle(true)}>
                <Bars3BottomRightIcon className="h-6 w-6 text-white"/>
              </button>
            </div>
          )}
        </div>
      </div>
      {/*Menu for mobile 
      the menu is fixed to the right the z is set up to show above everything and height is set 
      to take up the whole screen in tailwing we use square brackets to specify exact pixel dimensions*/}
      {!isAboveMediumScreens && MenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggle(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

          {/* Menu items */}
        <div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Anchors 
            page="Home" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            <Anchors page="About Me"
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
            <Anchors page="Experience"
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}/>
              <Anchors page="Get in Touch"
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
              />
            </div>
        </div>
        </div>

        
      )}
    </nav>
  )
}

export default Navbar; 