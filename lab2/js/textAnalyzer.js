function checkMatch(textArray, dictionary) {
    let words = dictionary.map(e => e.word);
    let style = "true-words";

    let newText = textArray.map(element => {

        if (words.indexOf(element) != -1) {
            return `<span class="${style}">${element}</span>`
        }
        return element;

    });

    return newText.join(" ");
}

onmessage = function (e) {
    console.log(e.data);
    this.postMessage(checkMatch(e.data.textArray, e.data.words));
};


