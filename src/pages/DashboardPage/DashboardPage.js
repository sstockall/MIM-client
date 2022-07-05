import './DashboardPage.scss'
import axios from 'axios';
import diagram from '../../assets/images/anatomy-diagram.png'
import NewMole from '../../components/NewMole/NewMole';
import RecordList from '../../components/RecordList/RecordList';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function DashboardPage() {
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
      // let formData = new FormData();
      // formData.append("image", e.target.image.files[0]);
      // formData.append('upload_preset', 'phk0eezk')

      // axios.post('https://api.cloudinary.com/v1_1/dob0dukux/upload', formData)
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => console.log(err))
      
      axios.post('http://localhost:8080/dashboard/records', {
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
          />
          <nav className='dashboard__nav'>
            <div className='dashboard__nav-item'>
              <NavLink to='/'className='dashboard__nav-link'>Home</NavLink>
            </div>
            <div className='dashboard__nav-item'>
              <NavLink to='/records'className='dashboard__nav-link'>Records</NavLink>
            </div>
            <div className='dashboard__nav-item'>
              <span className='dashboard__nav-link' onClick={newRecord}>New Record</span>
            </div>
            <div className='dashboard__nav-item'>
              <span className='dashboard__nav-link'>Terminology</span>
            </div>
          </nav>
          <section className='dashboard__hero'>
              <h1 className='dashboard__hero-header'>hey {userInfo.first_name}</h1>
          </section>
          <section className='dashboard__content'>
            <section className='dashboard__recent'>
              <h2 className='dashboard__recent-header'>Recent Records</h2>
              <RecordList 
              records={userRecords}
              isRecordPage={false}
              updateRecords={updateRecords}
              />
            </section>
            <div className='dashboard__diagram'>
              <img className='dashboard__diagram--img'src={diagram} alt='diagram' />
            </div>
            <div className='dashboard__terms'>
              <h2 className='dashboard__terms-header'>Be Specific</h2>
              <p className='dashboard__terms-text'>The more detail you put into a record, the easier it is to tell if anything's changed in the future.</p>
              <p className='dashboard__terms-text'>This can be a bit tricky, as medical speak can be confusing.</p>
              <p className='dashboard__terms-text'>To help with this, we've created a list of anatomical labelling terms to help you get as specific as you want to be.</p>
            </div>
          </section>
        </main>
      )
  }

export default DashboardPage;