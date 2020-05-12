export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        return `
            <tr>
                <td >
                    ${this.itemModel.word}
                </td>
                <td>
                    <button data-id="${this.itemModel.id}" class="del-button btn btn-danger">Delete</button>
                    <button data-id="${this.itemModel.id}" class="upd-button btn btn-primary">Update</button>
                </td>
            </tr>`;
    }
}