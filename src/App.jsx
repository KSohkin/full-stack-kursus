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
  const friends = ["Kaupo Sohkin", "Gerten Pilv"]

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
export default App