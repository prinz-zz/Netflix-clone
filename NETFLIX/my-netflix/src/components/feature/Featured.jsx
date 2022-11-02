import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select id='genre'>
                        <option>Genere</option>
                        <option value='action'>Action</option>
                        <option value='adventure'>Adventure</option>
                        <option value='animation'>Animation</option>
                        <option value='crime'>Crime</option>
                        <option value='comedy'>Comedy</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        
                    </select>
                </div>
                )}

            <img src='https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png' alt='' width='100%' />
            
            <div className="info">
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6237/1296237-h-5662015305e4' alt='' />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima perspiciatis, recusandae sint sunt obcaecati tempora doloribus eveniet aperiam amet libero culpa laborum eum a, minus rem maxime repellat impedit?
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}