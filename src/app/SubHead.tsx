
const SubHead = (props: {subhead: string, choosemod: (index: number) => void, indx: number}) => {
    return (<span  className='cover-header'><span className="pre-sub-header"></span><span onClick={()=>{props.choosemod(props.indx)}} className="sub-header">{props.subhead}</span></span>);
}
export default SubHead;
