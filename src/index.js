import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Obema' },
  { id: 2, name: 'Tramp' },
  { id: 3, name: 'Putin' },
  { id: 4, name: 'Hitler' },
  { id: 5, name: 'Stalin' }
]

let messagesData = [
  { id: 1, message: 'message1', likesCount: 10 },
  { id: 2, message: 'message2', likesCount: 2 },
  { id: 3, message: 'message3', likesCount: 22 }
]

let avatarData = [
{id: 1, src :'https://picsum.photos/50/50'},
{id: 2,src :'https://picsum.photos/50/50'},
{id: 3,src :'https://picsum.photos/50/50'}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs= {dialogsData} messages= {messagesData} avatar= {avatarData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
