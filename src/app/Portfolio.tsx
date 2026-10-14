import { useState } from 'react';
import Shteigenproject from './shteigenproject';
import MapMarket from './mapMarket';
import FindMinyanProj from './FindMinyanProj';
const Projects = () =>{
    const [proj,setProj] = useState("");
    return (<div className="under-header">
        <div onClick={() => {if(proj !== "shteigen") setProj("shteigen"); else {setProj("");}}} style={{cursor:'pointer'}}>The Shteigen project</div>
    {proj === 'shteigen' && <Shteigenproject />}
    <div onClick={() => {if(proj !== "supermarket") setProj("supermarket"); else {setProj("");}}} style={{cursor:'pointer'}}>The map supermarket project</div>
    {proj === 'supermarket' && <MapMarket />}
    <div onClick={() => {if(proj !== "findMinyan") setProj("findMinyan"); else {setProj("");}}} style={{cursor:'pointer'}}>The find minyan project</div>
    {proj === 'findMinyan' && <FindMinyanProj />}
    </div>);
}
export default Projects;