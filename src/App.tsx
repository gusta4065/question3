import React, { useState } from 'react';
//import SideBar from "./components/sidebar/index"
import './App.css';
import './hooks/heap';
import { HeapSort } from './hooks/heap';

function App() {
  const [array, setArray] = useState<number[]>([]);
  function handleCreateArray(input: string): Array<number> {
    const nArray = input.split(' ').map(n => parseInt(n, 10));
    return nArray;
  }
  const heap = new HeapSort();

  let sortA: Array<number> = [];

  return (
    <div className="App">
      <div className="w3-sidebar w3-bar-block" /*style="width:25%"*/>
        <form className="w3-container">

          <label>Insira os valores</label>

          <input className="w3-input" type="textarea"
          onChange={event => {setArray( handleCreateArray(event.target.value) ); }}
          //value= {array}
          />

          <button className="w3-button w3-round-xxlarge" onClick={()=> { setArray(heap.sort(array))
            sortA = array;
          }} >and Rounder</button>

        </form>
      </div>

      <main>
        <div>
          {array.map(item => {
            return (
              <span>{item} </span>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
