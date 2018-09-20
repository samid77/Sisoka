import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/style.css';
// import './assets/css/bootstrap.css';
import './assets/css/MyStyle.css';



ReactDOM.render(
    // <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
  registerServiceWorker();
