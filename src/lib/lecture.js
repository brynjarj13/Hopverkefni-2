export default class Lecture {
  constructor() {
    this.url = 'lectures.json';
  }

  loadLectures() {
    return fetch(this.url)
      .then(res => res.json());
  }

  createLecture(content) {
    content.forEach((i) => {
      let item;/* esllint-disable-line */
      switch (i.type) {
        case 'youtube':
          item = youtube(i.data); /* esllint-disable-line */
          break;
        case 'text':
          item = text(i.data);/* esllint-disable-line */
          break;
        case 'list':
          item = list(i.data);/* esllint-disable-line */
          break;
        case 'heading':
          item = heading(i.data);/* esllint-disable-line */
          break;
        case 'code':
          item = code(i.data);/* esllint-disable-line */
          break;
        case 'quote':
          item = quote(i.data, i.attribute);/* esllint-disable-line */
          break;
        case 'image':
          item = image(i.data, i.caption);/* esllint-disable-line */
          break;
        default:
          item = el('div', i.type);/* esllint-disable-line */
      }
    });
  }
}
