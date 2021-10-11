import * as React from "react";

const App = () => {
  fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      "x-rapidapi-key": "2fa1a9a8b3mshfa2aaf681c10668p15f376jsn98118a00bf79"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
};

export default App;
