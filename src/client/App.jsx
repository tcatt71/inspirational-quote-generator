import * as React from "react";
import handleClick from "./handleClick";

const App = () => {
  handleClick();

  return (
    <main>
      <img />
      <button onClick={handleClick}>Get Quote!</button>
    </main>
  );
};

export default App;
