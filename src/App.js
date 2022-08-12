// Random Color Generator
// colors = [{color: "hexcode", isDelete: false}] --> state
// add color input
// input field nimmt zahl auf --> onChange --> state
// button onClick --> colors.length wird geändert

import { useState } from 'react';

function App() {

  const [colors, setColors] = useState([
    // {
    //   hexcode: "#41c8d2",
    //   isDelete: false
    // },
    // {
    //   hexcode: "#3ebc63",
    //   isDelete: false
    // },
    // {
    //   hexcode: "#711a19",
    //   isDelete: false
    // }
  ]);

  const [input, setInput] = useState('');

  // !
  console.log('colors', colors);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {

    let newColors = [...colors];

    // newColors + (newObj * input)
    for (let i = 0; i < input; i++) {
      // add ONE new squre
      const newObj = {
        hexcode: "#711a19",
        isDelete: false
      }
      newColors = [...newColors, newObj]      
    }

    setColors(newColors);
  }

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      {/* input field & button */}
      <div>
        <input 
          type="number"
          // value input oder input.value
          value={input}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
        >
          + Add colors
        </button>
      </div>

      {/* color squares */}
      <div>
        {/* single square */}
        {colors.map((color, index) => (
          <div className="square" key={index}>
            <button>X</button>
            <p>{color.hexcode}</p>
          </div>
          )
        )}
      </div>

     
    </div>
  );
}

export default App;
