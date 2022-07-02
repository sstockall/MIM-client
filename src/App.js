import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RecordsPage from './pages/RecordsPage/RecordsPage';
import HomePage from './pages/HomePage/HomePage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/signup' exact component={SignUpPage}/>
          <Route path='/dashboard' exact component={DashboardPage}/>
          <Route path='/records' component={RecordsPage}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
