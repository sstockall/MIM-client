import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './HomePage.scss';

function HomePage() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return ( 
        <main className="home">
            <section className='home__hero'>
                <h1 className='home__hero-header'>Let Us Worry For You</h1>
            </section>
            <div className='home__text'>
                <p className='home__text-box'>KEEPING TRACK OF YOUR MOLES IS STRESSFUL</p>
                <p className='home__text-box'>LET <span className='home__text-box--mim'>MIM</span> DO IT FOR YOU</p>
            </div>
            <section className='home__lower'>
                <section className='home__info'>
                    <div className='home__info-header'>
                        <h2 className='home__info-heading'><span className='home__info-heading--mim'>MolesInMotion</span> Makes Tracking Your Moles Easy</h2>
                    </div>
                    <div className='home__info-content'>
                        <div className='home__info-textbox'>
                            <p className='home__info-text'>Keep your skin profile up to date with in-depth records for each individual mole. Be as specific as you want, with sections for:</p>
                            <ul className='home__info-list'>
                                <li className='home__list-item'>
                                    Photos 
                                    <span className='home__list-item--description'>
                                        - compare your mole with previous photos to look for changes
                                    </span>
                                </li>
                                <li className='home__list-item'>
                                    Measurements
                                    <span className='home__list-item--description'>
                                        - concrete proof of any changes in size 
                                    </span>
                                </li>
                                <li className='home__list-item'>
                                    Physical Attributes
                                    <span className='home__list-item--description'>
                                        - record texture and coloring for a more in-depth description 
                                    </span>
                                </li>
                                <li className='home__list-item'>
                                    Clinical Information
                                    <span className='home__list-item--description'>
                                        - include any biopsy results or notes from your doctor 
                                    </span>
                                </li>
                                <li className='home__list-item'>And more!</li>
                            </ul>
                        </div>
                        <div className='home__info-cta'>
                            <NavLink to='/signup' className='home__info-link'>Sign Up</NavLink>
                            <span className='home__info-text'>now and get started on your mole map today!</span>
                        </div>
                    </div>
                </section>
                <section className='home__lesions'>
                    <div className='home__lesions-inner'>
                        <h2 className='home__lesions-header'>See A Spot You're Not Sure About? </h2>
                        <div className='home__lesions-text'>
                            <span className='home__lesions-span'>
                                Take a look at our list of <NavLink to='/lesions' className='home__lesions-link'> common skin lesions</NavLink>, their characteristics, and treatment options.
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </main>
     );
}

export default HomePage;