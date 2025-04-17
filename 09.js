process.stdout.write('Executando em produção\n');

process.stdin.on('data', function(data) {
  process.stdout.write(`Você digitou: ${data}`);
  process.exit(0);
});
