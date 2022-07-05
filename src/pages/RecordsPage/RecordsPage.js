import RecordList from '../../components/RecordList/RecordList';
import './RecordsPage.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import NewMole from '../../components/NewMole/NewMole';

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
    
    const toggleModal = () => {
      !showModal ? setShowModal(true) : setShowModal(false)
    }

    const submitRecord = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/dashboard/records', {
            location: e.target.location.value,
            width: e.target.width.value,
            length: e.target.length.value,
            texture: e.target.texture.value,
            coloring: e.target.coloring.value,
            special_info: e.target.special_info.value,
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
          <NewMole 
            show={showModal}
            hideModal={toggleModal}
            submitHandler={submitRecord}
          />
          <nav className='records__nav'>
            <div className='records__nav-item'>
              <NavLink to='/'className='records__nav-link'>Home</NavLink>
            </div>
            <div className='records__nav-item'>
              <NavLink to='/dashboard'className='records__nav-link'>Dashboard</NavLink>
            </div>
            <div className='records__nav-item'>
              <span className='records__nav-link' onClick={toggleModal}>New Record</span>
            </div>
            <div className='records__nav-item'>
              <span className='records__nav-link'>Terminology</span>
            </div>
          </nav>
          <div className='records__header'>
              <h2 className='records__header-text'>Store All of your Records in One Easy Place</h2>
          </div>
          <span className='records__click'>Click on any of the cards below for more details on the record.</span>
          <div className='records__list'>
            <h4 className='records__list-header'>Scroll right to access your full skin profile</h4>
            <RecordList 
              records={userRecords}
              isRecordPage={true}
              updateRecords={updateRecords}
            />
          </div>
        </section>
    );
} 

export default RecordsPage;