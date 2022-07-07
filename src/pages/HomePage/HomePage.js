import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './HomePage.scss';

function HomePage() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return ( 
        <main className="home">
            <section className='home__lower'>
                <div className='home__hero'>
                    <h1 className='home__hero-header'>MolesInMotion</h1>
                    <p className='home__hero-text'>a mole tracking app to help keep your skin safe and your mind clear</p>
                </div>
                <div className='home__content'>
                    <div className='home__content-profile'>
                        <p className='home__info-text'>Keep your skin profile up to date with in-depth records for each individual mole. Be as specific as you want, with sections for:</p>
                        <ul className='home__info-list'>
                            <li className='home__list-item'>
                                <h3 className='home__list-item--title'>Photos </h3>
                                <span className='home__list-item--description'>
                                    Compare your mole with previous photos to look for changes
                                </span>
                            </li>
                            <li className='home__list-item'>
                                <h3 className='home__list-item--title'>Measurements </h3>
                                <span className='home__list-item--description'>
                                    Concrete proof of any changes in size 
                                </span>
                            </li>
                            <li className='home__list-item'>
                                <h3 className='home__list-item--title'>Physical Attributes </h3>
                                <span className='home__list-item--description'>
                                    Record texture and coloring for a more in-depth description 
                                </span>
                            </li>
                            <li className='home__list-item'>
                                <h3 className='home__list-item--title'>Clinical Information </h3> 
                                <span className='home__list-item--description'>
                                    Include any biopsy results or notes from your doctor 
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='home__lesions'>
                        <h2 className='home__lesions-header'>See A Spot You're Not Sure About? </h2>
                        <span className='home__lesions-span'>
                            Take a look at our list of <NavLink to='/lesions' className='home__lesions-link'> common skin lesions</NavLink>, their characteristics, and treatment options.
                        </span>
                    </div> 
                </div>
            </section>
            <div className='home__cta'>
                    <NavLink to='/signup' className='home__cta-link'>Sign Up</NavLink>
                    <span className='home__cta-text'>now and get started on your mole map today!</span>
            </div>
        </main>
     );
}

export default HomePage;