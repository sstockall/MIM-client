import './Record.scss';
import { useState, useEffect } from 'react';

function Record({ id, location, width, length, texture, coloring, special, date, image}) {
    // const formatDate = new Date(date).toLocaleDateString();

    const [showRecord, setShowRecord] = useState(false)

    return ( 
        <div className='record'>
            <div className='record__image'>
                <img src={image} alt='image' />
            </div>
            <div className='record__title'>
                <button className='record__text'>{location}</button>
            </div>
        </div>
     );
}

export default Record;