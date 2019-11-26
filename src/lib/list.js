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
