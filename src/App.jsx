const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const footer = () => {
  return(
    <div>
      greeting app created by <a href="https://github.com/KSohkin">Ksohkin</a>
    </div>
  )
}

const App = () => {
  const name = 'José Mourinho'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Gerten' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App