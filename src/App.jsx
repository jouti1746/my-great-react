import "./App.css";
import Batsman from "./batsman";
import ToDo from "./todo";
function App() {
  function handleClick(){
    alert('I am clicked');
  }
  
   const handleAdd5 = (num) =>{
      const newNum = (num + 5);
      alert(newNum);
   }


   const handleClick3 = () =>{
    alert('I am clicked 3')
  }
  return (
    <>
      <h1>React Core Concepts</h1>

      <Batsman></Batsman>

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => handleAdd5(10)}>Add me 5</button> */}

     {/* <ToDo task='Learn React' isDone={true} time='50'></ToDo>
     <ToDo task='Revise JS' isDone={false}></ToDo>
     <ToDo task='Take a Shower' isDone={true} time='100'></ToDo> */}

      {/* <Student></Student>
      <Person></Person>
      <Developer name='Jouti' tech='javascript' ></Developer>
      <Developer name='Rasel' tech='python'></Developer>
      <Developer name='Tafsir' tech='java'></Developer>
      <Device name='Apple Phone' value='100000'></Device>
      <Device name='Samsung Laptop' value='90000'></Device>
      <Device name='Redmi Tablet' value='50000'></Device>
      <Salami occassion='Roza Eid' amount='5000' ></Salami>
      <Salami occassion='Graduation' amount='10000' ></Salami> */}
    </>
  );
}

function Salami({occassion, amount}){
  return(
    <div>
      <p>Salami For: {occassion} </p>
      <p>Amount: {amount} </p>
    </div>
  )
}

function Device(props){
  return(
    <div style={{
      border: '4px solid pink',
      borderRadius: '20px',
      color:'red'
    }}>
      <h2>Brand: {props.name} </h2>
      <p>Price: {props.value} </p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}

function Pet() {
  return <h2>Cat</h2>;
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
      <p>Playing and Losing</p>
    </div>
  );
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border:'2px solid green',
      borderRadius:'20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Person() {
  const name = "Jouti";
  const age = 31;

  const personStyle ={
    color: 'red',
    fontSize: 20,
  }
  return (
    <p style={personStyle}>
      I am a person: {name} {age}
    </p>
  );
}
export default App;
