"use client";
// import { useState } from 'react';
const Hamburger = (props:{
    menu: (bool: boolean) => void,ashamburger: boolean
  }) => {
    const showHamburger = () => {
      if(props.ashamburger === false){
        props.menu(true);
      } else {
        props.menu(false);
      }
    }
    return (<div onClick={() => {showHamburger();}} className="hamburger"><span style={{top:'3px'}} className='line'></span><span style={{top:'10px'}} className='line'></span><span style={{top:'17px'}} className='line'></span></div>);
}
export default Hamburger;