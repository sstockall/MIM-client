import './DashboardPage.scss'
import { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component { 
    state = {
      isLoading: true,
      userInfo: {}
    }
  
    componentDidMount() {
      let token = sessionStorage.getItem('authToken');
  
      if (!!token) {
        axios.get('http://', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res)
          this.setState({
            userInfo: res.data,
            isLoading: false
          })
        })
  
      } else {
        this.props.history.push('/login')
      }
    }
  
    render() {
      const {userInfo, isLoading } = this.state;
      return isLoading ?
        <>Loading...</>
      :
      (
        <>
          <h1>Dashboard</h1>
          <h2>Welcome, {userInfo.name}</h2>
        </>
      )
    }
  }

export default DashboardPage;