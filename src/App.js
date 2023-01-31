import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'


import { postsList } from './features/posts/postsList'

function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <postsList />
              </React.Fragment>
            )}
          />
         <Route path="/"/>
        </Routes>
      </div>
    </Router>
  )
}

export default App