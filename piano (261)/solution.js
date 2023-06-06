const piano = document.querySelector('.keys')
const keys = document.querySelectorAll('.key')
const notes = document.querySelectorAll('.symbol')

let notesArr = []

const pianoNotes = []

pianoNotes['C'] = [0, 12]
pianoNotes['D'] = [2, 14]
pianoNotes['E'] = [4, 16]
pianoNotes['F'] = [5, 17]
pianoNotes['G'] = [7, 19]
pianoNotes['A'] = [9, 21]
pianoNotes['H'] = [11, 23]


for (let i = 0; i < notes.length; i++) {
    notes[i].classList.length === 3 ?
        notesArr.push(notes[i].classList[1] + ' ' + notes[i].classList[2])
        : notesArr.push(notes[i].classList[1])
}


async function giveMeSong() {
    for (let i of notesArr) {
        if (i[0] !== 's') {

            let note = pianoNotes[i[0]][i[1] - 1]

            if (i.includes('flat')) {
                keys[note - 1].click()
            }
            else if (i.includes('sharp')) {
                keys[note + 1].click()
            }
            else {
                keys[note].click()
            }
        }

        await new Promise(r => setTimeout(r, 200));
    }
}

setTimeout(giveMeSong, 1000)

