import './App.css'

function Counter() {
  let count = 0;
  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={()=> {
        count++;
        console.log(count);
      }}
      >Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
