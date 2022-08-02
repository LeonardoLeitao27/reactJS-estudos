import './App.css'
import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName';
import List from './components/list';

function App() {

  return (
    <div className="App">

      <HelloWorld/>
      <SayMyName nome="Leonardo"/>
      <List/>
    </div>
    
  );
}

export default App;
