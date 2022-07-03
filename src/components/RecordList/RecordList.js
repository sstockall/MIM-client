import './RecordList.scss';
import Record from '../Record/Record';

function RecordList({ records }) {
    
    return ( 
        <ul className='records'>
            {records.map((record) => {
                return <li
                    key={record.id}
                    >
                        <Record 
                            id={record.id}
                            date={record.updated_at}
                            location={record.location}
                            width={record.width}
                            length={record.length}
                            texture={record.texture}
                            coloring={record.colorling}
                            special={record.special_info}
                        />
                    </li>
                })
            }
        </ul>
     );
}

export default RecordList;