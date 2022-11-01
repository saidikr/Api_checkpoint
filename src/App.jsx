
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import { HomePage } from './pages'
import { UsersDetailsPage } from './pages/UsersDetailsPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<HomePage/>} />
          <Route path="/users/:id" element={<UsersDetailsPage key="1"/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
