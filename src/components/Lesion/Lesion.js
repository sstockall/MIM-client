import './Lesion.scss'

function Lesion({id, image, name, description, treatments, status }) {
    return ( 
        <div className='lesion'>
            <div className='lesion__overlay'>
                <h2 className='lesion__header'>{name}</h2>
            </div>
            <div className='lesion__text'>
                <div className='lesion__upper-section'>
                    <img className='lesion__image' src={image} alt='pic' />
                    <div className='lesion__section'>
                        <h3 className='lesion__title'>Description</h3>
                        <p className='lesion__input'>{description}</p>
                    </div>
                </div>
                <div className='lesion__lower-section'>
                    <div className='lesion__section'>
                        <h3 className='lesion__title'>Treatments</h3>
                        <p className='lesion__input'>{treatments}</p>
                    </div>
                    <div className='lesion__section'>
                        <h3 className='lesion__title'>Status</h3>
                        <p className='lesion__input'>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesion;