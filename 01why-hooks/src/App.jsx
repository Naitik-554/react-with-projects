import './App.css'
import {useState} from 'react'
import Naitik from './Naitik'
function App() {

  const [counter, setCounter] = useState(5)

  const incVal = () => {
    setCounter((p) => p < 20 ? p+1 : p)
  }

  const decVal = () => {
    setCounter((p) => {
      return p > 0 ? p-1 : p
    })
  }

  // let myObj = {
  //   name : "Naitik",
  //   degree : "B.Tech"
  // }

  return (
    <>
      <h1>Naitik & React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incVal}>Increase</button>
      <br/>
      <br/>
      <button onClick={decVal}>Decrease</button>
      <br/>
      <br/>
      <Naitik counter={counter} />
    </>
  )
}

export default App
