import { useState } from 'react'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Tasks />
  )
}

export default App
