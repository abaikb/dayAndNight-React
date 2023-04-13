import { useState } from 'react'
import './App.css'

function App() {
  const [isDay, setIsDay] = useState(true)

  const toggleMode = () => {
    setIsDay(!isDay)
  }

  return (
    <>
      <div className={isDay ? 'day' : 'night'}>
        <div className="sun"></div>
      </div>
      <button onClick={toggleMode}>
        {isDay ? 'Switch to Night Mode' : 'Switch to Day Mode'}
      </button>
    </>
  )
}

export default App;
