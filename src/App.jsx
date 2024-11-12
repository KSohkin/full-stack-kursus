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

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="https://github.com/KSohkin">Ksohkin</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Gerten', age: 10},
    { name: 'Aleks', age: 12}
  ]

  return (
    <div>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </div>
  )
}
export default App