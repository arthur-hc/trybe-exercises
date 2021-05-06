//NÃO HÁ NECESSIDADE DE REPETIR, O JS ENTENDERÁ O PARÂMETRO COMO CHAVE
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const newUser = (xablau, name, email, nomeDifente) => {
  return {
    xablau,
    name,
    email,
    observeAqui: nomeDifente,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com', 'Mas caso queira, posso escolher o id')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }