import './RecordDetails.scss';
import { useState, useEffect } from 'react'; 

function RecordDetails({ id, location, width, length, texture, coloring, special, date, image }) {
    const [showRecord, setShowRecord] = useState(false)

    const showHideClass = showRecord ? "record-details display-block" : "record-details display-none" 
    const formatDate = new Date(date).toLocaleDateString();
    return ( 
        <div className={showHideClass}>
            <div className='record-details__section'>
                <img src={image} alt='image' />
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Location: {location}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Date: {formatDate}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Width: {width}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Length: {length}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Texture: {texture}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Coloring: {coloring}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Special Info: {special}</span>
            </div>
            <div className='record-details__section'>
                <span className='records-details__text'>Coloring: {coloring}</span>
            </div>
        </div>
     );
}

export default RecordDetails;