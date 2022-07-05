import InputField from '../InputField/InputField';
import './EditModal.scss'

function EditModal({ editRecord, show,  }) {
    return ( 
        <div className={show ? 'edit-modal display-block' : 'edit-modal display-none'}>
            <div className='edit-modal__main'>
                <form className='edit-modal__form'>
                    <h2>placeholder</h2>
                    {/* <InputField label={} name={} type={} placeholder={}/> */}
                </form>
            </div>
        </div>
    );
}

export default EditModal;