import { empty } from './helpers';

const listcontainer = document.getElementsByClassName('list');
export default class List {
  constructor() {
    this.container = document.querySelector('.list'); // list.scss
    this.url = 'lectures.json';
  }


  setContent(...content) {
    empty(this.container);

    content.forEach((item) => {
      const contentToShow = typeof item === 'string'
        ? document.createTextNode(item) : item;

      this.container.appendChild(contentToShow);
    });
  }

  loadLectures() {
    return fetch(this.url)
      .then(res => res.json());
  }

  load() {
    this.loadLectures();
    empty(this.container);
  }

  createList(lectures) {
    lectures.forEach((i) => {
      const listOuterbox = document.createElement('div');
      listOuterbox.setAttribute('class', 'outerbox');
      listOuterbox.setAttribute('id', i.category);

      const listPicbox = document.createElement('div');
      listPicbox.setAttribute('class', 'picbox');

      const listTextbox = document.createElement('div');
      listTextbox.setAttribute('class', 'textbox');

      const listThumbnail = document.createElement('img');
      listThumbnail.setAttribute('class', 'thumbnail');
      listThumbnail.setAttribute('src', i.thumbnail);/* here a link to the thumbnail that it gets is needed */
      listPicbox.appendChild(listThumbnail);

      const listTitle = document.createElement('p');
      listTitle.setAttribute('class', 'title');
      const textTitle = document.createTextNode(i.title);/* add link to title text */
      listTitle.appendChild(textTitle);
      listTextbox.appendChild(listTitle);

      const listCategory = document.createElement('p');
      listCategory.setAttribute('class', 'category');
      const textCategory = document.createTextNode(i.category);/* add link to category text */
      listCategory.appendChild(textCategory);
      listTextbox.appendChild(listCategory);
      listOuterbox.appendChild(listPicbox);
      listOuterbox.appendChild(listTextbox);
      listcontainer.appendChild(listOuterbox);
    });
  }
}

const button = document.querySelector('button');
function listRemover() {
  /* function that removes all lectures once before showing the one selected */
  while (listcontainer.firstChild) {
    listcontainer.removeChild(listcontainer.firstChild);
  }
  button.removeEventListener('click', listRemover);
}
button.addEventListener('click', listRemover);

let i = 1;
function toggleHtml() {
  i += 1;
  if (i % 2 === 0) {
    /* adds */
  } else {
    /* removes */
  }
}

let y = 1;
function toggleCss() {
  y += 1;
  if (y % 2 === 0) {
    /* adds */
  } else {
    /* removes */
  }
}

let x = 1;
function toggleJavascript() {
  x += 1;
  if (x % 2 === 0) {
    /* adds */
  } else {
    /* removes */
  }
}

const htmlButton = document.getElementsByClassName('html__button');
htmlButton.addEventListener('click', toggleHtml);

const cssButton = document.getElementsByClassName('css__button');
cssButton.addEventListener('click', toggleCss);

const javascriptButton = document.getElementsByClassName('javascript__button');
javascriptButton.addEventListener('click', toggleJavascript);
