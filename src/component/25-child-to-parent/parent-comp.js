import React, { useState } from "react";
import ChildComp from "./child-to-parent";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (val) => {
    setCounter((prev) => prev + val);
  };
  return (
    <div>
      <div>Counter: {counter}</div>
      <ChildComp handleCounter={handleCounter} />
    </div>
  );
};

export default ParentComp;
/*{
    title: "Ödevleri kontor et",
    isCompleted: true,
    id: new Date.now()
}  */
