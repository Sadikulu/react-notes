import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Button, ButtonGroup } from "react-bootstrap";

/* const Counter = () => {
   const [counter, setCounter] = useState(0);
   return (
     <ButtonGroup aria-label="Basic example">
       <Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
         <AiOutlinePlusCircle />
       </Button>
       <Button variant="light" disabled>
         {counter}
       </Button>
       <Button variant="warning" onClick={() => setCounter((prev) => prev - 1)}>
         <AiOutlineMinusCircle />
       </Button>
       <Button variant="danger" onClick={() => setCounter(0)}>         <GrPowerReset />
       </Button>
     </ButtonGroup>
   );
 };
 */

// eğer state içinde if falan kullanılacaksa bu şekilde olmalı
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = (val) => {
    if (val < 0) val = 0;
    setCounter(val);
  };
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => handleClick(counter + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => handleClick(counter - 1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button
        variant="danger"
        onClick={() => handleClick(0)}
        disabled={!counter}
      >
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
