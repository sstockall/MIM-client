import './RecordDetails.scss';
import close from '../../assets/icons/close.svg';
import { NavLink } from 'react-router-dom';

function RecordDetails({ id, location, width, length, texture, coloring, special, date, image, show, closeModal }) {

    const showHideClass = show ? "record-details display-block" : "record-details display-none" 
    const formatDate = new Date(date).toLocaleDateString();
    return ( 
        <div className={showHideClass}>
            <div className='record-details__main'>
                <NavLink to='/dashboard'><img className='record-details__close' src={close} alt='close' onClick={closeModal}/></NavLink>
                <div className='record-details__section'>
                    <img src={image} alt='' />
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
            </div>
        </div>
     );
}

export default RecordDetails;