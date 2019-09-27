import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ContributionPage from './pages/ContributionPage'
import AboutPage from './pages/AboutPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPage from './pages/ForgotPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminCheckPage from './pages/AdminCheckPage'
import AdminControlPage from './pages/AdminControlPage'
import DetailPage from './pages/DetailPage'
import UserPage from './pages/UserPage'
import UploadPage from './pages/UploadPage'
import NotfoundPage from './pages/NotfoundPage'

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/category' exact component={CategoryPage}/>
        <Route path='/contribution' exact component={ContributionPage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/signin' exact component={SignInPage}/>
        <Route path='/signup' exact component={SignUpPage}/>
        <Route path='/forgot' exact component={ForgotPage}/>
        <Route path='/admin' exact component={AdminLoginPage}/>
        <Route path='/admin/:id' exact component={AdminCheckPage}/>
        <Route path='/admin/control' exact component={AdminControlPage}/>
        <Route path='/detail/:id' exact component={DetailPage}/>
        <Route path='/user/:id' exact component={UserPage}/>
        <Route path='/upload' exact component={UploadPage}/>
        <Route exact component={NotfoundPage}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
