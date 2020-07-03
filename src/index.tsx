import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { fetchBitcoinData } from './store/trades/actions'

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    ReduxPromise,
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(fetchBitcoinData())

// StrictMode renders components twice (on dev but not production) in
// order to detect any problems with your code and warn you about them
// (which can be quite useful).

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
