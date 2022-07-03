import './DashboardPage.scss'
import axios from 'axios';
import diagram from '../../assets/images/anatomy-diagram.png'
import NewMole from '../../components/NewMole/NewMole';
import RecordList from '../../components/RecordList/RecordList';
import { useState, useEffect } from "react";

function DashboardPage({ history }) {
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
          <main className='dashboard'>
            <NewMole 
            show={showModal}
            hideModal={cancelRecord}
            submitHandler={submitRecord}
            />
            <div className='dashboard__header'>
              <h1 className='dashboard__header-text'>Welcome Back {userInfo.first_name}!</h1>
            </div>
            <div className='dashboard__recent'>
              <h2 className='dashboard__recent-header'>Your Most Recent Records</h2>
              <RecordList records={userRecords}/>
            </div>
            <div className='dashboard__new'>
              <span className='dashboard__new-text'>Got a new mole?</span>
              <button className='dashboard__new-button' onClick={newRecord}>New Record</button>
            </div>
            <div className='dashboard__records'>
              <span className='dashboard__records-text'>Something looking different?</span>
              <button className='dashboard__records-button'onClick={toRecords}>Edit Record</button>
            </div>
            <div className='dashboard__diagram'>
              <img className='dashboard__diagram--img'src={diagram} alt='diagram' />
            </div>
            <div className='dashboard__terms'>
              <h2 className='dashboard__terms-header'>Get Specific.</h2>
              <p className='dashboard__terms-text'>The more detail you put into a record, the easier it is to tell if anything's changed in the future.</p>
              <p className='dashboard__terms-text'>This can be a bit tricky, as medical speak can be confusing.</p>
              <p className='dashboard__terms-text'>To help with this, we've created a list of anatomical labelling terms to help you get as specific as you want to be.</p>
            </div>
          </main>
        )
    }

export default DashboardPage;