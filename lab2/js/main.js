import ItemListModel from './model/ItemListModel.js';
import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';

let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);
let controller = new Controller(itemListModel, itemListView);
let textAnalyzer = new Worker("./js/textAnalyzer.js");

controller.addItem('This');
controller.addItem('text');
controller.addItem('editable');

let textContainer = document.getElementById("editable-div");
let dictionaryContainer = document.getElementById("dictionary");

function callWorker() {

    let words = controller.getItems();
    let text = document.getElementById("editable-div").textContent;
    let textArray = text.trim().split(" ");

    words = JSON.parse(JSON.stringify(words));
    textAnalyzer.postMessage({textArray, words});

}

textAnalyzer.onmessage = function (event) {
    document.getElementById('editable-div').innerHTML = event.data;
};

callWorker();
textContainer.addEventListener("blur", callWorker);
dictionaryContainer.addEventListener("DOMSubtreeModified", callWorker);



