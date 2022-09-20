import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import { compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose());


console.log('store', store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);