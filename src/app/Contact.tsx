import { useCallback, useEffect ,useRef} from 'react';
const Contact = () => {
    const contact_block = useRef<HTMLDivElement | null>(null);
    const pushBlock = useCallback(() =>{
        if(contact_block.current !== null){
            contact_block.current.style.marginTop = (parseInt(contact_block.current.style.marginTop.replace("px",""))+1)+"px";
            if(parseInt(contact_block.current.style.marginTop.replace("px","")) < 60)
                window.requestAnimationFrame(pushBlock);
        }
    },[]);
    // const pushBlock = () => {
    //     if(contact_block.current !== null){
    //         contact_block.current.style.marginTop = (parseInt(contact_block.current.style.marginTop.replace("px",""))+1)+"px";
    //         if(parseInt(contact_block.current.style.marginTop.replace("px","")) < 60)
    //             window.requestAnimationFrame(pushBlock);
    //     }
    // }
    useEffect(() => {
        console.log(window.innerWidth);
        if(window.innerWidth < 640 && contact_block.current !== null){
            contact_block.current.style.marginTop = "0px";
            window.requestAnimationFrame(pushBlock);
        }

    },[pushBlock]);
    return(<div ref={contact_block}>
        <h3>Conatact me</h3>
        <h2>Email<span className='outoffont'>:</span> ido<span className='outoffont'>.</span>moshe<span className='outoffont'>.</span>fogel<span className='outoffont'>@</span>gmail<span className='outoffont'>.</span>com</h2>
        <h2>Linkedin page<span className='outoffont'>:</span> https<span className='outoffont'>://</span>www<span className='outoffont'>.</span>linkedin<span className='outoffont'>.</span>com<span className='outoffont'>/</span>in<span className='outoffont'>/</span>ido<span className='outoffont'>-</span>fogel<span className='outoffont'>-2b420784</span></h2>
        <h2>Github page<span className='outoffont'>:</span> https<span className='outoffont'>://</span>github<span className='outoffont'>.</span>com<span className='outoffont'>/</span>idofogel</h2>
        <h2>Website<span className='outoffont'>:</span> You<span className='outoffont'>&#39;</span>re already in it<span className='outoffont'>!</span></h2>
    </div>);
}
export default Contact;