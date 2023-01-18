import React from "react";

const Event = () => {
  //event Handler
  const sayHello1 = () => {
    alert("Hello");
  };
  const sayHello2 = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div>
      {/* Event handler parametresiz kullanılacaksa aşağıdaki gibi fonksiyon kullanmadan çağrılabilir. */}
      <div onClick={sayHello1}>Say Hello1</div>
      {/* Event handler a  parametre gönderilecekse aşağıdaki gibi fonksiyon kullanmak zorunludur. */}
      <div onClick={() => sayHello2("Ali")}>Say Hello2</div>;
    </div>
  );
};

export default Event;
