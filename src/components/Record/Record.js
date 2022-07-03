import './Record.scss';
import { useState, useEffect } from 'react';
import RecordDetails from '../RecordDetails/RecordDetails';

function Record({ id, location, width, length, texture, coloring, special, date, image}) {

    const [showRecord, setShowRecord] = useState(false)

    const expandCard = () => {
        setShowRecord(true)
    } 

    return ( 
        <div className='record'>
            <RecordDetails 
                id={id}
                location={location}
                width={width}
                length={length}
                texture={texture}
                coloring={coloring}
                special={special}
                date={date}
                image={image}
                show={showRecord}
            />
            <div className='record__image'>
                <img src={image} alt='image' />
            </div>
            <div className='record__title'>
                <button className={showRecord ? 'record__text--expand' : 'record__text'} onClick={expandCard}>{location}</button>
            </div>
        </div>
     );
}

export default Record;