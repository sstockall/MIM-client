import RecordList from '../../components/RecordList/RecordList';
import './RecordsPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RecordsPage({ history }) {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [userRecords, setUserRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);

    let getUser = () => {
      let token = sessionStorage.getItem('token');
        if (!!token) {
          axios.get('http://localhost:8080/dashboard', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            setUserInfo(res.data.user);
            setUserRecords(res.data.records);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err)
        })
      }
    }

    useEffect(() => {
      getUser();
    }, [])

    let updateRecords = () => {
      let token = sessionStorage.getItem('token');
      axios.get('http://localhost:8080/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res)
        setUserRecords(res.data.records);
      })
      .catch((err) => {
        console.log(err)
      })
    }

    const toRecords = () => {
        history.push('/records')
      }
  
    const newRecord = () => {
        setShowModal(true);
    }

    const cancelRecord = (e) => {
        setShowModal(false);
        e.preventDefault();
    }

    const submitRecord = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/dashboard/records', {
            location: e.target.location.value,
            width: e.target.width.value,
            length: e.target.length.value,
            texture: e.target.texture.value,
            coloring: e.target.coloring.value,
            user_id: userInfo.id
        })
        .then((res) => {
            e.target.reset();
            setShowModal(false);
            updateRecords();  
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return isLoading ?
        <div className='loading'>
        <h2 className='loading__text'>Loading...</h2>
        </div>
    :
        ( 
        <section className="records">
            <div className='records__header'>
                <h2 className='records__header-text'>Welcome To Your Records Page</h2>
                <span className='records__header-subtext'>This is a place to keep all of your records organized and in one place.</span>
            </div>
            <RecordList 
            records={userRecords}
            isRecordPage={true}
            />
        </section>
    );
} 

export default RecordsPage;