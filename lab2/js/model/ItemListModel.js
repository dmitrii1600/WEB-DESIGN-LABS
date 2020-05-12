export default class itemListModel {
    constructor() {
        this.items = [];
        this.onChangeCallback = null;
    }

    add(item) {
        item.onChangeCallback = this.onChangeCallback;
        this.items.push(item);
    }

    delete(itemId) {
        const itemIndex = this.items.findIndex((item) => item.id === itemId);
        this.items.splice(itemIndex, 1);
    }

    update(itemId, word) {
        this.items.findIndex((item) => {
            if (item.id === itemId) item.word = word;
        });
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

}