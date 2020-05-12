import Item from "../model/Item.js";

export default class Controller {
    constructor(itemListModel, itemListView) {
        this.itemListModel = itemListModel;
        this.itemListView = itemListView;
        this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.itemListView.setControllerOnAddItem(this.addItem);
        this.itemListView.setControllerOnDelItem(this.delItem);
        this.itemListView.setControllerOnUpdItem(this.updItem);
        this.initOnModelChange();
        document.querySelector('#add-item').addEventListener('click', (e) => itemListView.onAddItem(e));
    }

    onChangeCallback() {
        document.querySelector('#dictionary').innerHTML = this.itemListView.toHtml();
    }

    getItems() {
        return this.itemListModel.items;
    }

    addItem(word) {
        const item = new Item(word);
        return this.itemListModel.add(item);
    }

    delItem(id) {
        this.itemListModel.delete(id);
    }

    updItem(id, word) {
        this.itemListModel.update(id, word);
    }

    initOnModelChange() {

        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#dictionary').innerHTML = this.itemListView.toHtml();
                return true;
            }
        };

        this.itemListModel.items = new Proxy(this.itemListModel.items, handler);
    }
}