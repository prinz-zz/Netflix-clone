import './listitem.scss';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';


export default function Listitem({index}) {

    const [isHovered, setIsHovered] = useState(false);

    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div
          className="listitem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
            <img src='https://hbomax-images.warnermediacdn.com/images/GYpEJvwB4Q4xHKQEAAACK/tileburnedin?size=1280x720&partner=hbomaxcom&v=29cd1850b91a58c54ea635f3153891cc&host=art-gallery.api.hbo.com&language=en-us&w=1280' alt='' />

           
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrowIcon className='icon' />
                        <AddIcon className='icon' />
                        <ThumbUpOutlinedIcon className='icon' />
                        <ThumbDownOutlinedIcon className='icon' />
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className='ageLimit'>+16</span>
                        <span>2009</span>
                    </div>
                    <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    <div className="genre">Action</div>
                

                </div>
                
        </div>
    )
}