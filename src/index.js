import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import Header from 'components/header'

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes />
            </Router>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
