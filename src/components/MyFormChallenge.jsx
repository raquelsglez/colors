import React, {useState, useRef, useEffect} from 'react';
import BoxColor from './BoxColor';

const MyFormChallenge = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

    return(
      <>
        <input type="text" ref={inputRef} placeholder="Choose a color" onChange={() => setInputValue(inputRef.current.value)} value={inputValue}/>
        <div className='container'>
          {colors.map((color, i) => (
            <BoxColor key={i} color={color} inputValue={inputValue}/>
          ))}
        </div>
      </>
    );
};

export default MyFormChallenge;
