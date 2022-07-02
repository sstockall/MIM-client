import './RecordsPage.scss'

function RecordsPage() {
    let token = sessionStorage.getItem('token');
    if(token) {
        return ( 
            <section className="records">
                <div className='records__header'>
                    <h2 className='records__header-text'>Welcome To Your Records Page</h2>
                    <span className='records__header-subtext'>This is a place to keep all of your records organized and in one place.</span>
                </div>
            </section>
        );
    } else {
        return (
            <h2 className='records__noauth'>Please login to see this page</h2>
        )
    }
}

export default RecordsPage;