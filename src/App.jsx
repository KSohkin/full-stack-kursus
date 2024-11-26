import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increasesByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreasesByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
    const setToZero = () => {
      console.log('resetting to zero, value before', counter)
      setCounter(0)
    }

    return (
      <div>
        <Display counter = {counter} />
        <Button onClick={increasesByOne} text="+"/>
        <Button onClick={setToZero} text="0"/>
        <Button onClick={decreasesByOne} text="-"/>
      </div>
    )
}

export default App