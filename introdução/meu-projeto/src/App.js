import './App.css'
import HelloWorld from './components/helloWorld'

function App() {
  const name = 'leonardo'

  return (
    <div className="App">
      <h1>Olá {name}</h1>

      <HelloWorld/>
    </div>
    
  );
}

export default App;
