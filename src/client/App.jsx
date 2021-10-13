import * as React from "react";
import handleClick from "./handleClick";

const App = () => {
  handleClick();

  return (
    <main>
      <div class="wrapper">
        <img />
        <button onClick={handleClick}>Recieve New Quote</button>
      </div>
    </main>
  );
};

export default App;
