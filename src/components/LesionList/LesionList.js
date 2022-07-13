import './LesionList.scss'
import Lesion from '../Lesion/Lesion';

function LesionList({ lesions }) {
    return ( 
        <ul className='lesion-list'>
            {lesions.map((lesion) => {
                return <li
                    key={lesion.id}
                    className='lesion-list__item'
                    >
                        <Lesion 
                            id={lesion.record_id}
                            image={lesion.photo}
                            name={lesion.name}
                            description={lesion.description}
                            treatments={lesion.treatments}
                            status={lesion.status}
                        />
                    </li>
                })
            }
        </ul>
    );
}

export default LesionList;