import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RecordsPage from './pages/RecordsPage/RecordsPage';
import HomePage from './pages/HomePage/HomePage';
import LesionsPage from './pages/LesionsPage/LesionsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignUpPage} />
          <Route path='/dashboard' exact component={DashboardPage} />
          <Route path='/records' component={RecordsPage} />
          <Route path='/lesions' component={LesionsPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
