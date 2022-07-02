import { NavLink } from 'react-router-dom';
import './HomePage.scss'

function HomePage() {
    return ( 
        <main className="home">
            <div className='home__inner'>
                <section className='home__hero'>
                    <h1 className='home__hero-header'>Let Us Worry For You</h1>
                    <div className='home__hero-textbox'>
                        <p className='home__hero-text'>Keeping track of your moles is stressful.</p>
                        <p className='home__hero-text'>Let <span className='home__hero-text--mim'>MIM</span> do it for you.</p>
                    </div>
                </section>
                <section className='home__info'>
                    <div className='home__info-inner'>
                        <h2 className='home__info-header'><span className='home__info-header--mim'>MolesInMotion</span> Makes Tracking Your Moles Easy</h2>
                        <div className='home__info-textbox'>
                            <p className='home__info-text'>Keep your skin profile up to date with in-depth records for individual moles, including sections for:</p>
                            <ul className='home__info-list'>
                                <li className='home__list-item'>Photos</li>
                                <li className='home__list-item'>Measurements</li>
                                <li className='home__list-item'>Details</li>
                                <li className='home__list-item'>And more</li>
                            </ul>
                        </div>
                        <div className='home__info-cta'>
                            <NavLink to='/signup' className='home__info-link'>Sign Up</NavLink>
                            <span className='home__info-text'>now and get started tracking your moles today!</span>
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
            </div>
        </main>
     );
}

export default HomePage;