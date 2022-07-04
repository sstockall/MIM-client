import './RecordList.scss';
import Record from '../Record/Record';

function RecordList({ records, isRecordPage}) {

    const dashboardArr = records.slice(0, 3);

    return isRecordPage ?  
        ( 
            <ul className='records-list'>
                {records.map((record) => {
                    return <li
                        key={record.id}
                        className='records-list__item'
                        >
                            <Record 
                                id={record.id}
                                image={record.image}
                                date={record.updated_at}
                                location={record.location}
                                width={record.width}
                                length={record.length}
                                texture={record.texture}
                                coloring={record.coloring}
                                special={record.special_info}
                            />
                        </li>
                    })
                }
            </ul>
        )
    :
        (
            <ul className='records-list__recent'>
                {dashboardArr.map((record) => {
                    return <li
                            key={record.id}
                            className='records-list__recent-item'
                            >
                                <Record 
                                    id={record.id}
                                    image={record.image}
                                    date={record.updated_at}
                                    location={record.location}
                                    width={record.width}
                                    length={record.length}
                                    texture={record.texture}
                                    coloring={record.coloring}
                                    special={record.special_info}
                                />
                            </li>
                        })
                    }
                </ul>
        )
}

export default RecordList;