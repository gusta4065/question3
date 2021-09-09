import React, {useState, createContext} from 'react';
import SideBar from "./components/sidebar/index"
import logo from './logo.svg';
import './App.css';

function App() {
  [array, setArray] = useState('');
  function handleCreateArray( array: string ){
      heapArray: number[] = 
  }
  return (
    <div className="App">
      <form className="w3-container">

      <label>Insira os valores</label>

       <input className="w3-input" type="textarea"
        onChange={context => context.setArray(event.target.value)}
        value= {array}
      />

      {/*<button className="w3-button w3-round-xxlarge">and Rounder</button>*/}

      </form>  
      <main>
        <div>
          Rodrigo Lima
        </div>
      </main>
    </div>
  );
}

export default App;
