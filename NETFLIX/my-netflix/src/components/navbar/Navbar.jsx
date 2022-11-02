import { useState } from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className='left'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='Logo' />
                    
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
            </div>
                <div className='right'>
                    <SearchIcon className='icon'/>
                    <span className='icon'>Kid</span>
                    <NotificationsIcon className='icon'/>
                    <img src="https://picsum.photos/200" alt=''/>
                    <div className='profile'>
                        <ExpandMoreIcon className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Sign out</span>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}