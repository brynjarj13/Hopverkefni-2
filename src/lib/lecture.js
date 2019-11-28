export default class Lecture {
  constructor (){
    this.url = 'lectures.json';
  }

  loadLectures() {
    return fetch(this.url)
    .then((res) => {
      return res.json();
    });
  }

  createLecture(content) {

    content.forEach((i) => {
      let item;
      switch (i.type) {
        case 'youtube':
        item = youtube(i.data);
        break;
        case 'text':
        item = text(i.data);
        break;
        case 'list':
        item = list(i.data);
        break;
        case 'heading':
        item = heading(i.data);
        break;
        case 'code':
        item = code(i.data);
        break;
        case 'quote':
        item = quote(i.data, i.attribute);
        break;
        case 'image':
        item = image(i.data, i.caption);
        break;
        default:
        item = el('div', i.type);
      }
    });
  }
}
