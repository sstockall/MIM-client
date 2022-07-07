import './NewMole.scss'
import InputField from '../InputField/InputField';
import { useEffect } from 'react';
import close from '../../assets/icons/close.svg';

function NewMole( { show, submitHandler, hideModal, location, width, length, texture, coloring, special, create, buttonText, image, id }) {
    const showHideClass = show ? "new-mole display-block" : "new-mole display-none";
    const modalType = create ? "new-mole__main" : "new-mole__main-edit";

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return (  
        <section className={showHideClass}>
                <div className={modalType}>
                    <div className='new-mole__content'>
                        <div className='new-mole__header'>
                            <img className='new-mole__close' src={close} alt='close' onClick={hideModal}/>
                            <h2 className='new-mole__header-text'>{create ? 'New Mole Record' : 'Edit Record'}</h2>
                            <span className='new-mole__text'>Fill out few quick fields and we'll get the mole logged into your skin profile.</span>
                        </div>
                        <form className='new-mole__form' encType='multipart/form-data' onSubmit={submitHandler}>
                            <div className='new-mole__inputs'>
                                <InputField className='new-mole__form-field'type="file" name="image" label="Image" />
                                <InputField className='new-mole__form-field'type="location" name="location" label="Location" placeholder="Right upper arm, left cheek..." defaultValue={location}/>
                                <InputField className='new-mole__form-field'type="text" name="width" label="Width" placeholder="0.5cm, 2mm..." defaultValue={width}/>
                                <InputField className='new-mole__form-field'type="text" name="length" label="Length" placeholder="2cm, 3mm..." defaultValue={length}/>
                                <InputField className='new-mole__form-field'type="text" name="texture" label="Texture" placeholder="Raised, flat..." defaultValue={texture}/>
                                <InputField className='new-mole__form-field'type="text" name="coloring" label="Coloring" placeholder="Light brown, black, skin colored..." defaultValue={coloring}/>
                                <div className='new-mole__inputs-special'>
                                    <label htmlFor='special-info' className='new-mole__form-label' >Special Info</label>
                                    <textarea className='new-mole__form-textarea' name='special_info' defaultValue={special}/>
                                </div>
                            </div>
                            <div className='new-mole__buttons'>
                                <button className='new-mole__submit-button'>{buttonText}</button>
                                <button type='button' className='new-mole__cancel-button' onClick={hideModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    );
}

export default NewMole;