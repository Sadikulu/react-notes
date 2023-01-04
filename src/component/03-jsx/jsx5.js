import React from "react";
const Jsx5 = () => {
  const names = ["Ali", "Veli", "Ayşe", "Fatma"];
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Jsx5;
