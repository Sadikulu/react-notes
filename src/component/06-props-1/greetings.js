import React from "react";
import Welcome from "./welcome";

const Greetings = () => {
  return (
    <div>
      <h1>Greetings Componenet</h1>
      <Welcome firstName="Ali" lastName="Gel" />
      <Welcome firstName="Ayşe" lastName="Gel" />
    </div>
  );
};

export default Greetings;
