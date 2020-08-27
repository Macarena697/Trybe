const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appenJoke = (joke) => {
  let body = document.querySelector('body');
  let h2 = document.querySelector('h2');
  h2.innerHTML = joke;
  body.appendChild(h2);
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => {
    const joke = data.joke;
    appenJoke(joke);
  })
};

window.onload = () => fetchJoke();