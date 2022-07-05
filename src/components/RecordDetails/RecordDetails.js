import './RecordDetails.scss';
import close from '../../assets/icons/close.svg';
import deleteIcon from '../../assets/icons/bin.png';
import editIcon from '../../assets/icons/edit_icon.png';
import axios from 'axios';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import NewMole from '../NewMole/NewMole';

function RecordDetails({ id, location, width, length, texture, coloring, special, date, image, show, closeModal, updateRecords }) {

    const showHideClass = show ? "record-details display-block" : "record-details display-none" 
    const formatDate = new Date(date).toLocaleDateString();
    
    const [deleteModal, setDeleteModal] = useState(false); 
    const [editModal, setEditModal] = useState(false);

    const toggleDelete = () => {
        !deleteModal ? setDeleteModal(true) : setDeleteModal(false)
        console.log(deleteModal)
    }

    const toggleEdit = () => {
        !editModal ? setEditModal(true) : setEditModal(false)
        console.log(editModal)
    }

    const deleteRecord = () => {
        axios.delete(`http://localhost:8080/dashboard/${id}`)
        .then((res) => {
            console.log(res)
            toggleDelete()
            closeModal()
            updateRecords()
        })
        .catch((err) => console.error(err))
    }

    const editRecord = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/dashboard/${id}`, {
            location: e.target.location.value,
            width: e.target.width.value,
            length: e.target.length.value,
            texture: e.target.texture.value,
            coloring: e.target.coloring.value,
            special_info: e.target.special_info.value
        })
        .then((res) => {
            toggleEdit();
            updateRecords();
        })
        .catch((err) => console.error(err))
        
    }

    return ( 
        <div className={showHideClass}>
            <div className='record-details__main'>
                <DeleteModal 
                    show={deleteModal}
                    deleteRecord={deleteRecord}
                    closeModal={toggleDelete}
                />
                <NewMole 
                    show={editModal}
                    submitHandler={editRecord}
                    hideModal={toggleEdit}
                    location={location}
                    width={width}
                    length={length}
                    texture={texture}
                    coloring={coloring}
                    special={special}
                    image={image}
                />
                <img className='record-details__close' src={close} alt='close' onClick={closeModal}/>
                <div className='record-details__sections'>
                    <div className='record-details__section record-details__section--image '>
                        <img src={image} alt='' />
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Location:</span>
                        <span className='record-details__input'>{location.toUpperCase()}</span>
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Date:</span>
                        <span className='record-details__input record-details__input--small'>{formatDate}</span>
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Width:</span>
                        <span className='record-details__input record-details__input--small'>{width}</span>
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Length:</span>
                        <span className='record-details__input record-details__input--small'>{length}</span>
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Texture:</span>
                        <span className='record-details__input record-details__input--small'>{texture.toUpperCase()}</span>
                    </div>
                    <div className='record-details__section'>
                        <span className='record-details__text'>Coloring:</span>
                        <span className='record-details__input'>{coloring.toUpperCase()}</span>
                    </div>
                    <div className='record-details__section record-details__section--special'>
                        <span className='record-details__text'>Special Info:</span>
                        <span className='record-details__input'>{special}</span>
                    </div>
                    <div className='record-details__buttons'>
                        <img className='record-details__buttons--edit'src={editIcon} alt='edit' onClick={toggleEdit}/>
                        <img className='record-details__buttons--delete'src={deleteIcon} alt='delete'onClick={toggleDelete} />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RecordDetails;