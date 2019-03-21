const inputField = document.querySelector('input');
const main = document.querySelector('main');

class Display {
    constructor() {
        let _arrayOfNotes = [];
        this.getArray = () => _arrayOfNotes;

        this.findAndRemoveNote = (e) => {
            const index = this.findIndexOfNote(e)
            this.removeNoteFromArray(_arrayOfNotes, index)
            this.renderNotes();
        }

        this.addNoteAndClearInput = () => {
            this.pushNoteToArray(_arrayOfNotes);
            this.clearInput();
            this.addDeleteEventToLastNoteInArray(_arrayOfNotes)
            this.renderNotes();
        }
        this.renderNotes = () => {
            this.clearMain()
            _arrayOfNotes.forEach(addKeyAndAppendNote(element, key))
        }
    }

    findIndexOfNote(e) {
        return e.target.parentNode.dataset.key;
    }

    removeNoteFromArray(array, indexOfNote) {
        array.splice(indexOfNote, 1)
    }

    pushNoteToArray(array) {
        array.push(new Note(inputField.value));
    }

    clearInput() {
        inputField.value = "";
    }

    addDeleteEventToLastNoteInArray(array) {
        array[array.length - 1].note.querySelector('button').addEventListener('click', this.findAndRemoveNote);
    }

    clearMain() {
        main.innerHTML = "";
    }

    addKeyAndAppendNote(element, key) {
        element.note.dataset.key = key;
        main.appendChild(element.note);
    }
}