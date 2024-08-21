function a() {
  return 'Executando a()';
}

function b() {
  return 'Executando b()';
}

function c() {
  console.log(b());
  console.log(a());
  return 'Executando c()';
}

// console.log(b());
console.log(c());
// console.log(a());
