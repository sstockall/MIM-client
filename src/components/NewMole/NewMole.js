import './NewMole.scss'
import InputField from '../InputField/InputField';

function NewMole( { show, submitHandler, hideModal }) {
    const showHideClass = show ? "new-mole display-block" : "new-mole display-none" 
    return (  
        <section className={showHideClass}>
                <div className='new-mole__main'>
                    <div className='new-mole__content'>
                        <div className='new-mole__header'>
                            <h2 className='new-mole__header-text'>New Mole Record</h2>
                            <span className='new-mole__text'>Fill out few quick fields and we'll get the mole logged into your skin profile.</span>
                        </div>
                        <form className='new-mole__form' encType='multipart/form-data' onSubmit={submitHandler}>
                            <div className='new-mole__inputs'>
                                <InputField className='new-mole__form-field'type="file" name="image" label="Image" />
                                <InputField className='new-mole__form-field'type="location" name="location" label="Location" placeholder="Right upper arm, left cheek..." />
                                <InputField className='new-mole__form-field'type="text" name="width" label="Width" placeholder="0.5cm, 2mm..." />
                                <InputField className='new-mole__form-field'type="text" name="length" label="Length" placeholder="2cm, 3mm..." />
                                <InputField className='new-mole__form-field'type="text" name="texture" label="Texture" placeholder="Raised, flat..." />
                                <InputField className='new-mole__form-field'type="text" name="coloring" label="Coloring" placeholder="Light brown, black, skin colored..." />
                                <label htmlFor='special-info' className='new-mole__form-label'>Special Info</label>
                                <textarea className='new-mole__form-textarea' name='special-info' />
                            </div>
                            <div className='new-mole__buttons'>
                                <button className='new-mole__submit-button'>Create Record</button>
                                <button type='button' className='new-mole__cancel-button' onClick={hideModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    );
}

export default NewMole;