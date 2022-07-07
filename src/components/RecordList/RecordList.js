import './RecordList.scss';
import Record from '../Record/Record';

function RecordList({ records, isRecordPage, updateRecords }) {

    const formatDate = (record) => {
        return new Date(record.updated_at).getTime();
    }

    const sortedArr = records.sort((a,b) => {
        return formatDate(b) - formatDate(a)
    });
    
    const dashboardArr = sortedArr.slice(0, 4);
    

    return isRecordPage ?  
        ( 
            <ul className='records-list'>
                {sortedArr.map((record) => {
                    return <li
                        key={record.record_id}
                        className='records-list__item'
                        >
                            <Record 
                                id={record.record_id}
                                image={record.image_url}
                                date={record.updated_at}
                                location={record.location}
                                width={record.width}
                                length={record.length}
                                texture={record.texture}
                                coloring={record.coloring}
                                special={record.special_info}
                                updateRecords={updateRecords}
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
                            key={record.record_id}
                            className='records-list__recent-item'
                            >
                                <Record 
                                    id={record.record_id}
                                    image={record.image_url}
                                    date={record.updated_at}
                                    location={record.location}
                                    width={record.width}
                                    length={record.length}
                                    texture={record.texture}
                                    coloring={record.coloring}
                                    special={record.special_info}
                                    updateRecords={updateRecords}
                                />
                            </li>
                        })
                    }
                </ul>
        )
}

export default RecordList;