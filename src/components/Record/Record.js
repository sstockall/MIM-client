import './Record.scss';
import { useState } from 'react';
import RecordDetails from '../RecordDetails/RecordDetails';

function Record({ id, location, width, length, texture, coloring, special, date, image}) {

    const [showRecord, setShowRecord] = useState(false)

    const toggleCard = () => {
        !showRecord ? setShowRecord(true) : setShowRecord(false)
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
                closeModal={toggleCard}
            />
            <div className='record__image'>
                <img src={image} alt='' />
            </div>
            <div className='record__title'>
                <span className={'record__text'}  onClick={toggleCard}>{location}</span>
            </div>
        </div>
     );
}

export default Record;