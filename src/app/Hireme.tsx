import { useEffect, useState} from 'react';
const Hireme = () => {
    const [hire_ido_fogel,setHire] = useState(0);
    useEffect(() => {
        console.log(hire_ido_fogel);
        setHire((prevState) => {return prevState+1});
    },[hire_ido_fogel]);
    
    return (<div>The welth you&#39;ll make if you hire me <span className='outoffont'>{hire_ido_fogel}</span></div>);
} 
export default Hireme;