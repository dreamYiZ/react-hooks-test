import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("count", count);
    }, 3000);
    return () => {};
  }, [count]);

  return <>Hooks </>;
}
export default Hooks;
