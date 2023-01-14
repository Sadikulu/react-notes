import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const UseRef = () => {
  const emailRef = useRef(null);
  const setFocus = () => {
    //Eski Yöntem
    /* const txtEmail = document.getElementById("txtEmail");
    txtEmail.fokus(); */

    emailRef.current.focus();
    emailRef.current.style.backgroundColor = "red";
  };

  return (
    <Container className="mt-5">
      <input type="text" placeholder="Enter your email" ref={emailRef} />
      <button onClick={setFocus}>Set fokus</button>
    </Container>
  );
};

export default UseRef;
