export default class TodoList {
  constructor() {
    this._list = [];
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItemToList(itemObj) {
    this._list.push(itemObj);
  }

  removeItemFromList(id) {
    let location = this._list.find((item) => item.id === id);
    this._list.splice(location, 1);
  }
}
