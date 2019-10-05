import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContributionPage from './pages/ContributionPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPage from './pages/ForgotPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminNewsPage from './pages/AdminNewsPage';
import AdminUserPage from './pages/AdminUserPage';
import DetailPage from './pages/DetailPage';
import UserPage from './pages/UserPage';
import FileUploadPage from './pages/FileUploadPage';
import UploadPage from './pages/UploadPage';
import VerifyPage from './pages/VerifyPage';
import VerifyForgotPage from './pages/VerifyForgotPage';
import NotfoundPage from './pages/NotfoundPage';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/category' exact component={CategoryPage}/>
        <Route path='/contribution' exact component={ContributionPage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/signin' exact component={SignInPage}/>
        <Route path='/signup' exact component={SignUpPage}/>
        <Route path='/forgot' exact component={ForgotPage}/>
        <Route path='/adminlogin' exact component={AdminLoginPage}/>
        <Route path='/admindashboardnews' exact component={AdminNewsPage}/>
        <Route path='/admindashboardusers' exact component={AdminUserPage}/>
        <Route path='/detail/:id' exact component={DetailPage}/>
        <Route path='/user/:id' exact component={UserPage}/>
        <Route path='/upload' exact component={FileUploadPage}/>
        <Route path='/upload' exact component={UploadPage}/>
        <Route path='/verify' exact component={VerifyPage}/>
        <Route path='/verifyforgot'exact component={VerifyForgotPage}/>
        <Route exact component={NotfoundPage}/>
        </Switch>
      </Router>
      </Provider>
    )
  }
}

export default App
