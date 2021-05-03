/**
 * Main store function
 */
import { createStore } from 'redux'
import rootReducer from './reducers'

function store(initialState = {}) {

  const enhancers = []
  
  if (process.env.NODE_ENV !== 'production') {
    window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  
  const store = createStore(rootReducer, initialState)

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }
  
  return store
}

export default store()
