
const Skill = (props:{name: string}) => {
    return (<span className='skill slide-item'><span className='tiltedsquare'></span><span className='skilltext'>{props.name}</span></span>);
}
export default Skill;