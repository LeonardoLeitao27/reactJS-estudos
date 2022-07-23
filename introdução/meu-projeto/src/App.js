import './App.css'
import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName';
function App() {

  return (
    <div className="App">

      <HelloWorld/>
      <SayMyName nome="Leonardo"/>
    </div>
    
  );
}

export default App;
