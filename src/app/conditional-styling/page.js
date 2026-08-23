'use client';
import { useState } from 'react';
import style from '../conditionalStyling.module.css';

const ConditionalStyling = () => {
  const [color, setColor] = useState('blue');
  const {green}  = style;
  return (
    <>
       <h2 className={style.heading}>Conditional Styling In Next JS</h2>
       {/* Conditional Styling */}
       {/* <h3 className={color == 'blue' ? style.green : style.pink }>Hello, Alex</h3> */}

       {/* use style attribute */}
       {/* <h3 style={{backgroundColor: color=='blue' ? 'yellow' : 'purple'}}>Hello Alex</h3> */}

       {/*  use id attribute */}
       {/* <h2 id={style.my}>Hello Alex</h2> */}


       {/* Multiple Tags */}
       <h3 className={green}>Hello, Alex</h3>
       <h3 className={green}>Hello, Alex</h3>
       <h3 className={green}>Hello, Alex</h3>

       <button onClick={() => setColor('red')}>Change Color</button>
    </>
  )
}

export default ConditionalStyling