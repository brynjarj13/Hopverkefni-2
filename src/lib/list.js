import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list'); //list.scss
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
      .then((res) => {
        return res.json();
      });
  }

  load() {
    this.loadLectures()
    empty(this.container);
  }
}
let listcontainer = document.getElementsByClassName('list');
const button = document.querySelector('button');
function listRemover(){
  /*function that removes all lectures once before showing the one selected*/
  while (listcontainer.firstChild) {
    listcontainer.removeChild(listcontainer.firstChild);
  }
  button.removeEventListener('click', listRemover);
}
button.addEventListener('click', listRemover);

const html__button =
  document.getElementsByClassName('html__button');
html__button.addEventListener('click', toggleHtml);

const css__button =
  document.getElementsByClassName('css__button');
css__button.addEventListener('click', toggleCss);

const javascript__button =
  document.getElementsByClassName('javascript__button');
javascript__button.addEventListener('click', toggleJavascript);

let i = 1;
function toggleHtml() {
  i++;
  if (i % 2 === 0) {
    adds
  }
  else {
    removes
  }
}

let y = 1;
function toggleCss() {
  y++;
  if (y % 2 === 0) {
    adds
  }
  else {
    removes
  }
}

let x = 1;
function toggleJavascript() {
  x++;
  if (x % 2 === 0) {
    adds
  }
  else {
    removes
  }
}

const listOuterbox = document.createElement('div');
listOuterbox.setAttribute('class','outerbox');

const listPicbox = document.createElement('div');
listPicbox.setAttribute('class','picbox');

const listTextbox = document.createElement('div');
listTextbox.setAttribute('class','textbox');

const listThumbnail = document.createElement('img');
listThumbnail.setAttribute('class','thumbnail');
listThumbnail.setAttribute('src','enter link');/* here a link to the thumbnail that it gets is needed*/
listPicbox.appendChild(listThumbnail);

const listTitle = document.createElement('p');
listTitle.setAttribute('class','title');
const title = document.createTextNode('');/*add link to title text*/
listTitle.appendChild(title);
listTextbox.appendChild(listTitle);

const listCategory = document.createElement('p');
listCategory.setAttribute('class','category');
const category = document.createTextNode('');/*add link to category text*/
listCategory.appendChild(category);
listTextbox.appendChild(listCategory);
listOuterbox.appendChild(listPicbox);
listOuterbox.appendChild(listTextbox);
listcontainer.appendChild(listOuterbox)













