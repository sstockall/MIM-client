import RecordList from '../../components/RecordList/RecordList';
import './RecordsPage.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import NewMole from '../../components/NewMole/NewMole';
import Header from '../../components/Header/Header';

function RecordsPage({ history }) {
    const [userInfo, setUserInfo] = useState({});
    const [userRecords, setUserRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])

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
            setLoggedIn(true);
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
      let formData = new FormData();
      formData.append("image", e.target.image.files[0]);
      formData.append('upload_preset', 'phk0eezk')
      
      axios.post('http://localhost:8080/images', formData)
        .then((res) => {
          axios.post('http://localhost:8080/dashboard/records', {
            image_url: res.data.path,
            location: e.target.location.value,
            width: e.target.width.value,
            length: e.target.length.value,
            texture: e.target.texture.value,
            coloring: e.target.coloring.value,
            special_info: e.target.special_info.value,
            user_id: userInfo.id,
          })
          .then(() => {
            e.target.reset();
            setShowModal(false);
            updateRecords();  
          })
          .catch((err) => console.error(err));
        })
        .catch((err) => console.log(err))
    }

    return !loggedIn ?
        <div className='loading'>
        <h2 className='loading__text'>You must be <NavLink to='/login' className='loading__text-link'>logged in</NavLink> to view this page.</h2>
        </div>
    :
        ( <main>
          <Header />
        <section className="records">
          <NewMole 
            show={showModal}
            hideModal={toggleModal}
            submitHandler={submitRecord}
            buttonText='Create Record'
            create={true}
          />
          <div className='records__header'>
              <h2 className='records__header-text'>Store All of Your Records in One Easy Place</h2>
              <div className='records__header-subtext'>
                <span className='records__header-directions'>To edit or delete a record, click on the specific record you would like to change.</span>
                <span className='records__header-directions'>You can also create a <button className='records__header-button' onClick={toggleModal}>New Record</button></span>
                <span className='records__header-back'>Back to <NavLink className='records__header-back--link' to='/dashboard'>Dashboard</NavLink></span>
              </div>
          </div>
          <div className='records__list'>
            <h4 className='records__list-header'>Click on any of the cards below for more details.</h4>
            <RecordList 
              records={userRecords}
              isRecordPage={true}
              updateRecords={updateRecords}
            />
            <h4 className='records__list-header records__list-header--bottom'>Scroll right to access your full skin profile</h4>
          </div>
        </section>
        </main>
    );
} 

export default RecordsPage;