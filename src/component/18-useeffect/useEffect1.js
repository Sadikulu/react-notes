import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const UseEffect1 = (id) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  console.log(`Bu satir render ve re-render durumlarinda ve 
  alltta ki return kismi render edilmeden önce çaliştirilir`);

  useEffect(() => {
    console.log(
      `Mounting: Bu satir sadece render durumunda çalişir
       ancak rerender durumlarinda çalişmaz`
    );
    return () => {
      console.log(`UnMounting: Bu bölüm component hafizadan 
    atilmadan önce çaliştirilir`);
    };
  }, []);
  useEffect(() => {
    console.log(`Updating: Bu satir render ve re-render durumlarinda ve
    alltta ki return kismi render edildikten sonra çaliştirilir
    Bu yseEffect özellikle altta ki elementlere useRef ile erişmek için kullanilir`);
  });
  useEffect(() => {
    console.log(`Updating: Bu bölümde ki kodlar alt 
    tarafta yazilan dependency lerin(message,id) 
    değişmesi durumunda çalişir`);
  }, [message, id]);

  return (
    <div>
      <div>
        {message} - {error}
      </div>
      <Button variant="info" onClick={() => setMessage("Hello")}>
        Set Message
      </Button>
      <Button variant="danger" onClick={() => setError("Some errors")}>
        Throw Error
      </Button>
    </div>
  );
};
export default UseEffect1;
