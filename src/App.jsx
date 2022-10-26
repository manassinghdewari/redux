import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
const App = () => {
  return (
    // main tag specifies the main content of the document.
    // main content should be unique
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App