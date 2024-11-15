const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

console.log('snack-8')
// Trova lo studente 'Marco Lanci' 
const marcoLanci = students.find(student => student.name === 'Marco Lanci'); 
// Recupera la classe dello studente 
const classeMarcoLanci = marcoLanci ? marcoLanci.class : null
console.log('La classe di Marco Lanci è',classeMarcoLanci);