import './DashboardPage.scss'
import axios from 'axios';
import NewMole from '../../components/NewMole/NewMole';
import RecordList from '../../components/RecordList/RecordList';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';

function DashboardPage() {
    const [userInfo, setUserInfo] = useState({});
    const [userRecords, setUserRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])

    let getUser = () => {
      let token = sessionStorage.getItem('token');
        if (!!token) {
          axios.get('https://moles-in-motion-api.herokuapp.com/dashboard', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            setUserInfo(res.data.user);
            setUserRecords(res.data.records);
            setLoggedIn(true)
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
      axios.get('https://moles-in-motion-api.herokuapp.com/dashboard', {
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
      document.body.style.overflow = 'hidden';

    }

    const cancelRecord = (e) => {
      e.preventDefault();
      setShowModal(false);
      document.body.style.overflow = 'unset'
    }

    const submitRecord = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("image", e.target.image.files[0]);
      formData.append('upload_preset', 'phk0eezk')
      
      axios.post('https://moles-in-motion-api.herokuapp.com/images', formData)
        .then((res) => {
          console.log(res)
          axios.post('https://moles-in-motion-api.herokuapp.com/dashboard/records', {
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
            document.body.style.overflow = 'unset'
            updateRecords();  
          })
          .catch((err) => console.error(err));
        })
        .catch((err) => console.log(err));
    }

    return !loggedIn ?
      <main>
        <Header />
        <div className='loading'>
          <h2 className='loading__text'>You must be <NavLink to='/login' className='loading__text-link'>logged in</NavLink> to view this page.</h2>
        </div>
      </main>
    :
      (  
      <main className='dashboard'>
        <Header />
        <section className='dashboard__upper'>
          <NewMole 
            show={showModal}
            hideModal={cancelRecord}
            submitHandler={submitRecord}
            buttonText='Create Record'
            create={true}
          />
          <div className='dashboard__hero'>
            <h1 className='dashboard__hero-header'>welcome back {userInfo.first_name}!</h1>
            <button onClick={newRecord}>New Mole?</button>
          </div>
          <section className='dashboard__lower'>
              <div className='dashboard__recent'>
                <h2 className='dashboard__recent-header'>Recent Records</h2>
                <div className='dashboard__recent-text'>
                  <span className='dashboard__recent-span'>Head over to your <NavLink to='/records'>Records Page</NavLink> for your full skin profile.</span>
                </div>
                <div className='dashboard__recent-list'>
                  <RecordList 
                  records={userRecords}
                  isRecordPage={false}
                  updateRecords={updateRecords}
                  />
                </div>
              </div>
              <div className='dashboard__wrapper'>
                <div className='dashboard__tips'>
                  <div className='dashboard__tips-text'>
                    <h3 className='dashboard__tips-header'>Tips for Better Records</h3>
                  </div>
                  <div className='dashboard__terms'>
                    <div className='dashboard__terms-overlay'>
                      <h2 className='dashboard__terms-header'>Be Specific</h2>
                    </div>
                    <p className='dashboard__terms-text'>The more detail you put into a record, the easier it is to tell if anything's changed in the future.</p>
                    <p className='dashboard__terms-text'>This can be a bit tricky, as medical speak can be confusing.</p>
                    <p className='dashboard__terms-text'>To help with this, we've created a list of anatomical labelling terms to help you get as specific as you want to be.</p>
                  </div>
                  <div className='dashboard__pics'>
                    <div className='dashboard__pics-overlay'>
                      <h2 className='dashboard__pics-header'>Clear Photos</h2>
                    </div>
                    <p className='dashboard__pics-text'>Having a high resolution photo of your mole makes it easier to compare and note any differences in the future.</p>
                    <p className='dashboard__pics-text'>It also helps to take photos that showcase the moles location, ensuring you are looking at the right mole when comparing.</p>
                  </div>
                </div>
              </div>
              <div className='dashboard__warnings'>
                <div className='dashboard__warnings-text'>
                  <h3 className='dashboard__warnings-header'>Watch For</h3>
                </div>
                <div className='dashboard__signs'>
                  <div className='dashboard__signs-overlay'>
                    <h2 className='dashboard__signs-header'>Warning Signs</h2>
                  </div>
                  <span className='dashboard__signs-text'>Early detection is key in treating skin cancer. Below is a list of things to keep in mind when doing your self exams.</span>
                </div>
              </div>
          </section>
        </section>
      </main>
    )
  }

export default DashboardPage;