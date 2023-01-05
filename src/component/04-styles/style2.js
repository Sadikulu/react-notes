import React from "react";

const Style2 = () => {
  const styleTitle = {
    fonSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        praesentium dolor placeat asperiores ab distinctio in dignissimos
        necessitatibus ex laborum fuga eos neque officiis sed dolore, tenetur
        non excepturi hic?
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>Componenet Props</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        praesentium dolor placeat asperiores ab distinctio in dignissimos
        necessitatibus ex laborum fuga eos neque officiis sed dolore, tenetur
        non excepturi hic?
      </p>
    </div>
  );
};

export default Style2;
