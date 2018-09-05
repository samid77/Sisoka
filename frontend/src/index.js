import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// importan baru
import { createStore } from 'redux';

// const initialState = {
//     hasil_login:""
// };

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case 'Login':
//             return {
//                 hasil_login: action.kirim
//             };
//         default:
//             return state;
//     }
// }


// const store = createStore(reducer);


ReactDOM.render(
    // <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));
  registerServiceWorker();