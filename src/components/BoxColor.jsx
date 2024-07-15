import React, { useRef, useEffect, useState } from 'react';

const BoxColor = ({color, inputValue}) => {
  const [textValue, setTextValue] = useState('');
  const completRef = useRef(null);

  useEffect(() => {
    setTextValue(`I'm not a ${inputValue} color`)
    
    completRef.current.style.backgroundColor = '';
    completRef.current.style.color = color;

    if (inputValue === color) {
      completRef.current.style.backgroundColor = color;
      completRef.current.style.color = 'black';
      setTextValue(`Yes, I'm ${inputValue} color`);
    }
    
  }, [inputValue]);
  
  return(
    <div className={`box ${color}`} ref={completRef}>
      <p>{textValue}</p>
    </div>
  );
};

export default BoxColor;  
