import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Card name="Subodh Uprety" age={22} />
      <Card name="John Doe" age={30} />
    </>
  )
}

export default App