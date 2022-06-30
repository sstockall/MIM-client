import './DashboardPage.scss'
import { Component } from 'react';
import axios from 'axios';

class DashboardPage extends Component { 
    state = {
      isLoading: true,
      userInfo: {},
      userRecords: []
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
  
    render() {
      const { userInfo, isLoading } = this.state;
      console.log(userInfo)
      return isLoading ?
        <>Loading...</>
      :
      (
        <>
          <h1>Dashboard</h1>
          <h2>Welcome, {userInfo.first_name}</h2>
        </>
      )
    }
  }

export default DashboardPage;