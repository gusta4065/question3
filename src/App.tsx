import React, { useState } from 'react';
//import SideBar from "./components/sidebar/index"
import './App.css';
import './hooks/heap';
import { HeapSort } from './hooks/heap';

function App() {
  const [input, setInput] = useState('');
  //const [array, setArray] = useState<number[]>([]);
  function handleCreateArray(input: string): Array<number> {
    const nArray = input.split(' ').map(n => parseInt(n, 10));
    return nArray;
  }
  const heap = new HeapSort();
  function submitSort(event: any){
    event.preventDefault();
    alert(heap.sort(handleCreateArray(input)));
  }

  return (
    
    <div className="App">
    <main>
      <div className=" w3-bar-block" /*style="width:25%"*/>
        <form className="w3-container" onSubmit={submitSort}>

          <label>Insira os valores</label>

          <input className="w3-input" type="textarea"
          onChange={event => setInput(event.target.value )}
          //value= {array}
          />

          <button className="w3-button w3-round-xxlarge" type='submit' >and Rounder</button>

        </form>
      </div>
      </main>
    </div>
  );
}

export default App;
