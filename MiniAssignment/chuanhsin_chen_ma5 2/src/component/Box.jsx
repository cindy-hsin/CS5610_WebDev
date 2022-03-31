
import React, {useState}from 'react';
import './Box.css';


/**
 * Input: props: {text: "banana"} 
 */

export default function Box(props) {
  let className = "box";

  const fruitList = ["kiwi", "banana", "apple", "orange"];
  const [fruit, setFruit] = useState('kiwi');


  if (fruit === 'kiwi') {
    className += ' aqua';
  } else if (fruit === 'banana'){
    className += ' yellow';
  }

  function randomFruitSelector() {
    const randomIdx = Math.floor(Math.random() * fruitList.length);
    const selectedFruit = fruitList[randomIdx];
    setFruit(selectedFruit);  // Change the state value to fruits[randomIdx], and force React to re-render.
    
    if (selectedFruit === 'kiwk') {
      props.onKiwiCheck(true)
    } else {
      props.onKiwiCheck(false);
    }
  
  }  

  return (
    <div className={className}>
      {fruit}
      <button onClick={()=> randomFruitSelector()}>Random fruit selector</button>
    </div>
  );

  // let text ="hello";
  // // To check if props has been passed in an attribute called "text"
  // if (props.text !== undefined) {
  //   text = props.text;
  // }

  // return (
  //   <div className={className}>   
  //     {/* Why do we need curly bracket around "box green" */}
  //     {text}
  //     {props.children}
  //   </div>
  // );
}