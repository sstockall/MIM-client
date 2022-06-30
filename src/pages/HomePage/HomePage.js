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
                        <h2 className='home__info-header'>MolesInMotion Helps You Track Your Moles Promptly and Accurately </h2>
                        <div className='home__info-textbox'>
                            <p className='home__info-text'>Keep your skin profile up-to-date with indepth individual records of each mole you encounter.</p>
                            <p className='home__info-text'>text text text</p>
                        </div>
                        <div className='home__info-cta'>
                            <NavLink to='/signup' className='home__info-link'>Sign Up</NavLink>
                            <span className='home__info-text'>now and get started tracking your moles today!</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
     );
}

export default HomePage;