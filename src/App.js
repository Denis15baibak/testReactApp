import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Dialogs from './components/Dialogs/Dialogs'
import Menu from './components/Menu/Menu'

const App = () => {
  return (
    <BrowserRouter>
      <div className="socialNetwork">
        <body>
          <div id="wrapper">
            <Header />
            <Menu />
            <div className='content-wrapper'>
              <Route path='/home' component={Main} />
              <Route path='/dialogs' component={Dialogs} />
            </div>
            <Footer />
          </div>
        </body>
      </div>
    </BrowserRouter>
  );

}



export default App;
