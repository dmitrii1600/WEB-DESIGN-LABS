import ItemView from './ItemView.js';

export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        this.controllerOnUpdItem = null;
        document.querySelector('#dictionary').addEventListener('click', (e) => this.onClick(e)); 
    }

    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    setControllerOnUpdItem(controllerOnUpdItem) {
        this.controllerOnUpdItem = controllerOnUpdItem;
    }

    onClick(e) {
        
        if (e.target.className === 'del-button btn btn-danger') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'upd-button btn btn-primary') {
            const word = prompt('Enter a new word:', '').trim();
            if (word) this.controllerOnUpdItem(e.target.dataset.id, word);
            return;
        } 
    }

    onAddItem(e) {
        const word = prompt('Enter a new word:', '').trim();
        if (word) this.controllerOnAddItem(word);
    }

    toHtml() {
        const itemsHtml = this.itemListModel.items.map( (item) => {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `<table class="table">
                    <thead>
                    <tr><th>Word</th><th>Operations</th></tr>
                    </thead>
                    <tbody>${itemsHtml}</tbody>
                </table>`;
    }
}