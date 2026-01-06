import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.jsx'
import { LoginProvider } from './Context/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </LoginProvider>
  </StrictMode>,
)
