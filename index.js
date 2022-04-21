import './style.css';
const input = document.querySelector('.form__input');
const btn = document.getElementById('form__button');
const output = document.querySelector('.results');

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=';

const fetchData = (url) =>
  fetch(url).then((res) =>
    res.status === 200
      ? res.json()
      : (output.innerHTML = `<a href="https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter">uzyskaj dostęp</a>`)
  );


const createItems = (item) => ` <li class="entry">
<img class="entry__image" src="${item.imageUrl}" alt="Cover">
<a href="https://goodreads.com${item.bookUrl}"> <p class="entry__name">${item.bookTitleBare}</p> </a>
</li>`;

const innerData = (data) => {
  output.innerHTML = data.map((item) => createItems(item));
};

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  fetchData(API_URL + encodeURI(input.value)).then((data) => innerData(data));
});