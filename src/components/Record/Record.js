import './Record.scss'
import { useState } from 'react';
import RecordDetails from '../RecordDetails/RecordDetails';

function Record({ id, location, width, length, texture, coloring, special, date, image, updateRecords}) {

    const [showRecord, setShowRecord] = useState(false)

    const toggleCard = () => {
        !showRecord ? setShowRecord(true) : setShowRecord(false);
        !showRecord ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
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
                updateRecords={updateRecords}
            />
            <div className='record__image'>
                <img className='record__image--pic' src={image} alt='pic' onClick={toggleCard}/>
                <span className='record__text' onClick={toggleCard}>{location.toUpperCase()}</span>
            </div>
        </div>
     );
}

export default Record;