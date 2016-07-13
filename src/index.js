import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory as history } from 'react-router'
import {Provider} from 'react-redux'

import './style.scss'

import routes from './routes'
import configureStore from './configureStore'


const store = configureStore()

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	        <div id='app'>
                <Router history={history} routes={routes} />
	        </div>
        </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
