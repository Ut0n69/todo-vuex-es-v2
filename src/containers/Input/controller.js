import store from '@/store';

export default class ItemController {
  constructor(item) {
    this.item = item;
  }

  addItem() {
    store.dispatch('items/addItem', this.item);
  }
}
