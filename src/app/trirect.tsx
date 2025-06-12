import {useState, useRef} from 'react';
const Trirect = () => {
    const [mvms,setMvms] = useState(false);
    const mouseplacex = useRef(0);
    const rectref = useRef<HTMLDivElement | null>(null);
    const mouseplacey = useRef(0);
    const setMoveRect = (event: React.MouseEvent<HTMLDivElement>) => {
        if(mvms === false)
            setMvms(true);
        else
            setMvms(false);
        mouseplacex.current = event.pageX;
        mouseplacey.current = event.pageY;
        console.log('setMoveRect mvms: '+mvms+' mouseplacex: '+mouseplacex.current+' mouseplacey: '+mouseplacey.current);
    }
    const moveMouse = (event: React.MouseEvent<HTMLDivElement>) => {
        if(mvms){
            console.log()
            if(rectref.current !== null && event.pageX > mouseplacex.current){
                console.log('state 1 '+mouseplacex.current);
                rectref.current.style.left = event.pageX+"px";
            }
            if(rectref.current !== null && event.pageX < mouseplacex.current){
                console.log('state 2');
                rectref.current.style.left = event.pageX+"px";
            }
            if(rectref.current !== null && event.pageY > mouseplacey.current){
                console.log('state 3');
                rectref.current.style.top = event.pageY+"px";
            }
            if(rectref.current !== null && event.pageY < mouseplacey.current){
                console.log('state 3');
                rectref.current.style.top = event.pageY+"px";
            }
        }
    }
    const stopMove = () => {
        setMvms(false);
    }
    return (<div onMouseDown={(event) => {setMoveRect(event);}} onMouseUp={stopMove} onMouseMove={(event) => {moveMouse(event)}}><div style={{zIndex:'2',position:'absolute',width:'100%',bottom:'20px',top:'80px'}}></div><div ref={rectref} style={{position:'absolute'}}><div className='rectangle' style={{transform:'skew(110deg)',height:'15px',top: '-15px',left: '19px'}}></div><div style={{}} className='rectangle'></div><div className='rectangle' style={{transform: 'skewY(-19deg)',top: '-8px',width: '42px',height: '31px'}}></div><div className='rectangle' style={{transform: 'skewY(-19deg)',top: '-8px',width: '42px',height: '31px',left:'99px'}}></div></div></div>);
}
export default Trirect;