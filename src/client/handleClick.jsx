const handleClick = () => {
  fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium", {
      "method": "GET",
      "headers": {
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY
      }
  })
  .then(response => {
      return response.json();
  })
  .then(response => {
      console.log(response);
      document.querySelector('img').src = response[0].media;
  })
  .catch(err => {
      console.error(err);
  });
};

export default handleClick;
