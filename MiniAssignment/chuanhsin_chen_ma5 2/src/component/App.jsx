import React, {useState}from 'react';
import Box from './Box';




function App() {

  const fruits = ["banana", "kiwi", "apple"];

  const [selectedFruit, setSelectedFruit] = useState(fruits[1]);
  // useState returns an array.
  // Array: first element: the data you want React to render (initially). fruits[1] is the initial value to be rendered, the initial state;
  //        second element: setState, the function that changes the state value.

  // Updating multiple states: 
  // Method1: Pass in object to useState()
  // Method2: Use multiple states.    ===> See video!!


  function randomFruitSelector() {
    const randomIdx = Math.floor(Math.random() * fruits.length);
    // selectedFruit = fruits[randomIdx];
    setSelectedFruit(fruits[randomIdx]);  // Change the state value to fruits[randomIdx], and force React to re-render.
    console.log(selectedFruit);
  }

  // When returning more than one elements, siblings need to be wrapped into one parent element.
  return (
    <div>

    {/**/ }
      <Box text="banana" name="first box" favoritePokemon='lizard'>  
        <div>This is a div</div>
        {/* Can nest elements inside React Component. In Box.jsx, within the Box definition, 
         it can refer to the children nested here by using "props.children"*/}
        
      </Box>


      <Box text = {selectedFruit}/>
      <button onClick={()=> randomFruitSelector()}>Random fruit selector</button>
      {/* Values inside the function is changing (i.e. selectFruit),
          but the page is not re-rendered.
          We should use Hooks to force re-render */}
      <Box color="aqua"/>
      
      
    </div>
  )

}

export default App;