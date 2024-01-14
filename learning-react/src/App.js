import logo from './logo.svg';
import './App.css';
import HelloReact from './components/HelloReact'

function App() {

  const name = 'Rian'

  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <p>My first React.</p>

      <p>Testing {name}, testing {newName}.</p>

      <HelloReact />

    </div>
  );
}

export default App;
