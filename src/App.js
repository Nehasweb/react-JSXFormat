import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 style={{color:'mediumorchid'}}>Neha Gholap</h1>
     <input type="text"/>
     <button>Save</button>
     <button type="button" onClick={()=>{alert('Logged In')}}>Alert</button>
    </div>
  );
}

export default App;
