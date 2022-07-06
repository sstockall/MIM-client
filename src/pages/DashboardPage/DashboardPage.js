import './DashboardPage.scss'
import axios from 'axios';
import diagram from '../../assets/images/anatomy-diagram.png'
import NewMole from '../../components/NewMole/NewMole';
import RecordList from '../../components/RecordList/RecordList';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import ABC from '../../assets/images/ABCDEs.jpg';

function DashboardPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [userRecords, setUserRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);

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
        setUserRecords(res.data.records);
      })
      .catch((err) => {
        console.error(err)
      })
    }

    const newRecord = () => {
      setShowModal(true);
    }

    const cancelRecord = (e) => {
      e.preventDefault();
      setShowModal(false);
    }

    const submitRecord = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("image", e.target.image.files[0]);
      formData.append('upload_preset', 'phk0eezk')
      
      axios.post('http://localhost:8080/images', formData)
        .then((res) => {
          console.log(res)
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
          .then((res) => {
            e.target.reset();
            setShowModal(false);
            updateRecords();  
          })
          .catch((err) => console.error(err));
        })
        .catch((err) => console.log(err))
    }

    return isLoading ?
      <div className='loading'>
        <h2 className='loading__text'>Loading...</h2>
      </div>
    :
      (
        <main className='dashboard'>
          <NewMole 
          show={showModal}
          hideModal={cancelRecord}
          submitHandler={submitRecord}
          buttonText='Create Record'
          create={true}
          />
          <nav className='dashboard__nav'>
            <div className='dashboard__nav-item'>
              <NavLink to='/'className='dashboard__nav-link'>Home</NavLink>
            </div>
            <div className='dashboard__nav-item'>
              <NavLink to='/records'className='dashboard__nav-link'>Records</NavLink>
            </div>
            <div className='dashboard__nav-item'>
              <span className='dashboard__nav-link'>Terminology</span>
            </div>
          </nav>
          <section className='dashboard__hero'>
            <h1 className='dashboard__hero-header'>welcome back {userInfo.first_name}!</h1>
            <button onClick={newRecord}>New Mole</button>
          </section>
          <section className='dashboard__lower'>
              <div className='dashboard__recent'>
                <h2 className='dashboard__recent-header'>Recent Records</h2>
                <div className='dashboard__recent-list'>
                  <RecordList 
                  records={userRecords}
                  isRecordPage={false}
                  updateRecords={updateRecords}
                  />
                </div>
              </div>
              <div className='dashboard__wrapper'>
                <div className='dashboard__terms'>
                  <h2 className='dashboard__terms-header'>Be Specific</h2>
                  <p className='dashboard__terms-text'>The more detail you put into a record, the easier it is to tell if anything's changed in the future.</p>
                  <p className='dashboard__terms-text'>This can be a bit tricky, as medical speak can be confusing.</p>
                  <p className='dashboard__terms-text'>To help with this, we've created a list of anatomical labelling terms to help you get as specific as you want to be.</p>
                </div>
                <section className='dashboard__signs'>
                  <h2 className='dashboard__signs-header'>Warning Signs</h2>
                  <span className='dashboard__signs-text'>Early detection is key in treating skin cancer. Below is a list of things to keep in mind when doing your self exams.</span>
                  <img className='dashboard__signs-img' src={ABC} alt='diagram' />
                </section>
              </div>
          </section>
        </main>
      )
  }

export default DashboardPage;