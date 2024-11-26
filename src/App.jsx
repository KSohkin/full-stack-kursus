/*
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}
const Total= (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Content part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Content part={course.parts[2].name} exercise={course.parts[2].exercises} />
      <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises} />
    </div>
  )
}
*/
const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age
    
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Kakku"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Geryen" age={26+ 10} />
      <Hello name ={name} age={age} />
    </div>
  )
}


export default App