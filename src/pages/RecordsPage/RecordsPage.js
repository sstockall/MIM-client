import RecordList from '../../components/RecordList/RecordList';
import './RecordsPage.scss';
import { Component } from 'react';
import axios from 'axios';

class RecordsPage extends Component {
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
      render() {
        const { userInfo, isLoading, userRecords } = this.state;
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
                <RecordList records={this.state.userRecords}/>
            </section>
        );
    } 
}

export default RecordsPage;