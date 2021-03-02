import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Dialogs from './components/Pages/Dialogs/Dialogs'
import Menu from './components/Menu/Menu'
import Profile from './components/Pages/Profile/Profile'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="socialNetwork">
        <body>
          <div id="wrapper">
            <Header />
            <div className='content-wrapper'>
              <Route path='/home' render={ () => <Main/>} />
              <Route path='/profile' render={ () => <Profile avatar={props.avatar}/>} />
              <Route path='/dialogs' render={ () => <Dialogs dialogs= {props.dialogs} messages= {props.messages}/>} />
            </div>
            <Footer />
          </div>
        </body>
      </div>
    </BrowserRouter>
  );

}



export default App;
