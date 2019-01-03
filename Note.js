class Note {
    constructor(value) {
        let colors = ['rgb(255, 255, 117)', 'rgb(184, 255, 162)', 'rgb(255, 152, 186)', 'rgb(137, 202, 255)']
        this.note = document.createElement('article');
        // this.button = document.createElement('button');
        // this.i = document.createElement('i');
        // this.p = document.createElement('p');

        // this.p.textContent = value;
        // this.i.classList = 'fas fa-trash-alt';

        this.note.innerHTML = `<button><i class="fas fa-trash-alt"></i></button><p>${value}</p>`;

        this.note.style.transform = `rotate(${Math.floor((Math.random() * 8) - 4)}deg) scale(1, 1)`;
        this.note.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))];
        // document.querySelector('main').appendChild(this.note);
        // this.note.appendChild(this.button);
        // this.note.appendChild(this.p);
        // this.button.appendChild(this.i);
    }
}