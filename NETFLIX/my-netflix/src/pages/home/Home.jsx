import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/feature/Featured';
import List from '../../components/list/List';


export default function Home() {
    return (
        <div className='home'>
            <Navbar />            
            <Featured type='movie' />
            <List />
            <List/>
        </div>
    )
}