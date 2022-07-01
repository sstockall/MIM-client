import './DashboardPage.scss'
import { Component } from 'react';
import axios from 'axios';
import diagram from '../../assets/images/anatomy-diagram.png'

class DashboardPage extends Component { 
    state = {
      isLoading: true,
      userInfo: {},
      userRecords: [],
      showModal: false
    }
  
    componentDidMount() {
      let token = sessionStorage.getItem('token');
     
      if (!!token) {
        axios.get('http://localhost:8080/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res)
          this.setState({
            userInfo: res.data.user,
            userRecords: res.data.records,
            isLoading: false
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }

    toRecords = () => {
      this.props.history.push('/dashboard/records')
    }

    newRecord = () => {
      this.setState({ showModal: true })
    }
  
    render() {
      const { userInfo, isLoading, userRecords } = this.state;
      console.log(userInfo, userRecords)
      return isLoading ?
        <div className='loading'>
          <h2 className='loading__text'>Loading...</h2>
        </div>
      :
        (
          <main className='dashboard'>
            <div className='dashboard__inner'>
              <div className='dashboard__header'>
                <h1 className='dashboard__header-text'>hey {userInfo.first_name}</h1>
              </div>
              <div className='dashboard__new'>
                <span className='dashboard__new-text'>Got a new mole?</span>
                <button className='dashboard__new-button' onClick={this.newRecord}>New Record</button>
              </div>
              <div className='dashboard__records'>
                <span className='dashboard__records-text'>Existing mole looking different?</span>
                <button className='dashboard__records-button'onClick={this.toRecords}>Edit Record</button>
              </div>
              <div className='dashboard__diagram'>
                <img className='dashboard__diagram--img'src={diagram} alt='diagram' />
              </div>
            </div>
          </main>
        )
    }
  }

export default DashboardPage;