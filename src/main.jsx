import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CoinProvider } from './context/CoinContext'
// import { Provider } from 'react-redux';
// import store from "./features/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <CoinProvider>
    <App/>
    </CoinProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
