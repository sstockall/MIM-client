import './HomePage.scss'

function HomePage() {
    return ( 
        <main className="home">
            <section className='home__hero'>
                <h1 className='home__hero-header'>Let Us Worry For You</h1>
                <p className='home__hero-text'>Keeping track of your moles is stressful.</p>
                <p className='home__hero-text'>Some would say it's a full time job.</p>
                <p className='home__hero-text'>So why not let <span className='home__hero-text--mim'>MIM</span> do it for you?</p>
            </section>
            <section className='home__background'>

            </section>
        </main>
     );
}

export default HomePage;