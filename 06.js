const _ = require('lodash');

const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 },
  { nome: 'Pedro', nota: 8.5 }
];

const media = _.meanBy(alunos, 'nota');

console.log(`Média das notas: ${media.toFixed(2)}`);
