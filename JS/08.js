console.log(process.argv);

function temParam(param) {
  return process.argv.indexOf(param) !== -1;
}

if (temParam('--producao')) {
  console.log('Executando em produção');
}

if (temParam('--desenvolvimento')) {
  console.log('Executando em desenvolvimento');
}
