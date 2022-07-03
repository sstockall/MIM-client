import './Record.scss'

function Record({ id, location, width, length, texture, coloring, special, date}) {
    const formatDate = new Date(date).toLocaleDateString();
    return ( 
        <div className='record'>
            {/* <div className='record__date'>
                <h4 className='record__header'>Discovered: </h4>
                <span className='record__text'>{formatDate}</span>
            </div> */}
            <div className='record__location'>
                <h4 className='record__header'>Location: </h4>
                <span className='record__text'>{location}</span>
            </div>
            {/* <div className='record__width'>
                <h4 className='record__header'>Width: </h4>
                <span className='record__text'>{width}</span>
            </div>
            <div className='record__length'>
                <h4 className='record__header'>Length: </h4>
                <span className='record__text'>{length}</span>
            </div>
            <div className='record__texture'>
                <h4 className='record__header'>Texture: </h4>
                <span className='record__text'>{texture}</span>
            </div>
            <div className='record__coloring'>
                <h4 className='record__header'>Coloring: </h4>
                <span className='record__text'>{coloring}</span>
            </div>
            <div className='record__special'>
                <h4 className='record__header'>Special Info: </h4>
                <span className='record__text'>{special}</span>
            </div> */}
        </div>
     );
}

export default Record;