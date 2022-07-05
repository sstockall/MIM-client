import './DeleteModal.scss'

function DeleteModal({ deleteRecord, show, closeModal}) {
    return ( 
        <div className={show ? 'delete-modal display-block' : 'delete-modal display-none'}>
            <div className='delete-modal__main'>
                <div className='delete-modal__content'>
                    <div className='delete-modal__text'>
                        <h2 className='delete-modal__header'>Are you sure you want to delete this record?</h2>
                    </div>
                    <div className='delete-modal__buttons'>
                        <button className='delete-modal__button' onClick={deleteRecord}>Delete</button>
                        <button className='delete-modal__button'onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DeleteModal;