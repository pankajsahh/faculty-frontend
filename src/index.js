import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Store from "./components/context/Shop.js"
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <p className='bg-secondary  p-3 text-center text-white h5'  >heroku services stoped so cannot acces backend services Login is bypassed</p>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
