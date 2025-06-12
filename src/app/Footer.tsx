import skillslist from './skillslist';
import Skill from './Skill';
import { useEffect, useRef,useState } from 'react';
const Footer = () => {
    const [newskillslist,setSkills] = useState(skillslist);
    const accumLength = useRef(0);
    // const [ctr,setctr] = useState(0);
    const ctr = useRef(0);
    const footeref = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        console.log("%cWellcome to Ido Fogel's website console.log","font-weight:700;font-size:20px;color:blue;");
        console.log("%cThe website inside the website","font-weight:700;font-size:20px;color:red;");
        console.log("%c Now when its just us we can share information","font-weight:700;font-size:20px;color:yellow;");
        const moveRight = () =>{
            if(footeref.current !== null){
                if(footeref.current.style.left === ''){
                    footeref.current.style.left = '32px';
                    window.requestAnimationFrame(moveRight);
                } else {
                    const curleft = parseFloat(footeref.current.style.left.replace('px',''))-0.25;
                    footeref.current.style.left = curleft+"px";
                    accumLength.current = accumLength.current+0.25
                    
                    if(accumLength.current>=120){
                        accumLength.current = 0;
                        if(ctr.current >= skillslist.length) ctr.current = 0;
                        // setSkills([...newskillslist, skillslist[ctr.current]]);
                        setSkills((prevList) => [...prevList, skillslist[ctr.current]]);
                        // console.log(newskillslist);
                        ctr.current = ctr.current+1;
                    }
                    window.requestAnimationFrame(moveRight);
                }
            }
        }
        console.log('start moveright');
        window.requestAnimationFrame(moveRight);
    },[footeref]);
    return (<div ref={footeref} className='footer slide-container'>
            {    
     newskillslist.map((item, index) => (
         <Skill key={index} name={item} />
     ))
}
    </div>);
}
export default Footer;
