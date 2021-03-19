/**
 * Main store function
 */
import { createStore } from 'redux'
import rootReducer from './reducers'

export default function store(initialState = {}) {

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
