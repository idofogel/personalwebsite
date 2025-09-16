"use client";
import headlineslist from './headlineslist';
import Header from './header';
import { useState, useEffect,useRef} from 'react';
import ReactNotReactive from './ReactNotReactive';
import Footer from './Footer';
import Trirect from './trirect';
import Contact from './Contact';
import Hamburger from './Hamburger';
import Portfolio from './Portfolio';

export default function Clipage() {
  const [modulech,setModule] = useState("Home");
  const [isActive,setActive] = useState(true);
  const [isActive2,setActive2] = useState(true);
  const [showHamburger,setShowHam] = useState(true);
  const headline = useRef(null);
  const headline2 = useRef(null);
  const movingfade = useRef<HTMLDivElement | null>(null);
  const splash = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
      setShowHam(false);
    }
    if(headline.current !== null)
      setActive(false);
    if(movingfade.current !== null)
      movingfade.current.className='contourish fade-background';
    setTimeout(() => {
      if(headline2.current !== null)
        setActive2(false);
    },2000);
    
  },[]);
  const chooseModule = (index: number) => {
    if(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
      setShowHam(false);
    }
    setModule(headlineslist[index]);
    if(splash.current){
      splash.current.style.display = "none";
      if(headlineslist[index] === 'Home') {
        splash.current.style.display = "";
      }
    }
    
  }
  return (
    <>
    <Hamburger menu={setShowHam} ashamburger={showHamburger} />
    <div  style={{ zIndex:2,color:'white', fontFamily: 'YogurtSmoothie, sans-serif',padding: "2rem" }}>
      <Header ashamburger={showHamburger} chooseModule={chooseModule}/>
      <div ref={splash} className={isActive ? "splash-headline fade-out" : "splash-headline fade flip-up-down"}>
        <h1 ref={headline} className={isActive ? "fade-out" : "fade flip-up-down"}>Hello<span className='outoffont'>!</span></h1>
        
        <p ref={headline2} className={isActive2 ? "fade-out" : "fade flip-up-down"}>Wellcome to Ido Fogel<span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>&#39;s</span> webpage<span className='outoffont'>!</span></p>
      </div>
      {modulech === 'Games' && <Trirect/>}
      {modulech === 'Papers' && <ReactNotReactive />}
      {modulech === 'Contact' && <Contact />}
      {modulech === 'Portfolio' && <Portfolio />}
      
    </div>
    {modulech === 'Home' && <div className='countur-cover'><div ref={movingfade} className='contourish fade-background' style={{zIndex:1,backgroundImage:'url(backgroundcode.png)'}}></div></div>}
    <Footer />
    </>
  );
}