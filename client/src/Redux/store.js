import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import user from './Reducers/User'
import articles from './Reducers/Article'
import { GLOBAL_STATE } from './types'

const reducer = combineReducers({
  user,
  articles,
})
let storeEnchance

if (process.env.NODE_ENV !== 'production') {
  storeEnchance = compose(composeWithDevTools(applyMiddleware(thunk)))
} else {
  storeEnchance = applyMiddleware(thunk)
}

const persistConfig = {
  key: GLOBAL_STATE,
  storage,
  blacklist: ['user', 'articles'],
}
const persistedReducer = persistReducer(persistConfig, reducer)

// 1 reducer 2 state 3 middleware
// const globalState = localStorage.getItem(GLOBAL_STATE)
// const initialState =  globalState ? JSON.parse(globalState) : undefined
const store = createStore(persistedReducer, storeEnchance)
const persistor = persistStore(store)

// export const StoreState = () => {
//   const state = store.getState()
//   localStorage.setItem(GLOBAL_STATE, JSON.stringify(state))
// }

export { store, persistor }
