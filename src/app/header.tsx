import headlineslist from './headlineslist';
import SubHead from './SubHead';

const Header = (props:{chooseModule: (index: number) => void,ashamburger: boolean}) => { 
    return (<div className='header'>{     
        props.ashamburger && headlineslist.map((item, index) => (
            <SubHead key={index} choosemod={props.chooseModule} indx={index} subhead={item} />
            ))
    }</div>);
}
export default Header;
