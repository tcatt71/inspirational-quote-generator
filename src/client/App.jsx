import * as React from "react";
import handleSubmitClick from "./handleSubmitClick";

const App = () => {
  handleSubmitClick();

  return (
    <main>
      <div className="wrapper">
        <img />
        <button onClick={handleSubmitClick}>Recieve New Quote</button>
        <input type="text" />
      </div>
    </main>
  );
};

export default App;
