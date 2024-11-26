import { useState } from "react"
import './App.css';


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
   <div>
    <div>
       <h1>Give feedback</h1>
      <button onClick={() => {setGood(good +1)}}>good</button>
      <button onClick={() => {setNeutral(neutral +1)}}>neutral</button>
      <button onClick={() => {setBad(bad +1)}}>bad</button>
    </div>
    <h2>statistics</h2>
    <table>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>all</td>
        <td>{bad + good + neutral}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>average</td>
        <td>{(good*1 + bad*-1 + neutral*0) / (good + bad + neutral)}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>positive</td>
        <td>{Math.round(good / (bad + neutral + good) * 100)}%</td>
      </tr>
    </table>
  </div> 
  )
}

export default App