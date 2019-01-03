const input = document.querySelector('input');
const main = document.querySelector('main');

class Display {
    constructor() {
        let _table = [];
        this.getTable = () => _table;

        this.removeNote = (e) => {
            console.log(e.target.parentNode.dataset.key)
            const index = e.target.parentNode.dataset.key;
            _table.splice(index, 1);
            this.renderNotes();
        }

        this.addNote = () => {
            _table.push(new Note(input.value));
            input.value = "";
            _table[_table.length - 1].note.querySelector('button').addEventListener('click', this.removeNote);
            this.renderNotes();
        }
        this.renderNotes = () => {
            main.innerHTML = "";
            _table.forEach((element, key) => {
                element.note.dataset.key = key;
                main.appendChild(element.note);
            })
        }


    }
}