import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import CounterComponent from './components/CounterComponent.jsx'
import Profile from './components/profileComponents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Profile />
    <CounterComponent />
  </Provider>
)
