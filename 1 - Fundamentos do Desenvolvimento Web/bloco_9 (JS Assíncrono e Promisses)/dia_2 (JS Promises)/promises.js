// PARA CRIAR UMA ***PROMISE***
// **IMPORTANTE OBSERVAR, QUE SÃO NECESSÁRIOS 2 PARÂMETROS. ELA POSSUIRA 3 ESTADOS AO IR P/ FILA ESPECIAL(PENDING, RESOLVED E REJECTED)
const promise = new Promise((resolve, reject) => {

});

// EXEMPLO AO CRIAR UMA FUNC QUE TRAZ ***RESOLVED*** OU ***REJECTED***(O RESOLVE DEVE SEMPRE VIR PRIMEIRO)
// OBSERVE QUE COM REJECT UM ERRO É LANÇADO. TAMBÉM É IMPORTANTE PERCEBER O USO DO RETURN ANTES DO REJECT, TIRANDO A NECESSIDADE DO ELSE.
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});
// <===========================================================>

// ***.THEN***(RETORNO DA PROMISE) É UTILIZADO PARA DAR SEQUÊNCIA A PROMISE PODENDO UTILIZAR OU NÃO O RETORNO DA PROMISE ANTERIOR >>>EM CASO DE SUCESSO<<<. COMO VISTO EM AULA, PODE APESAR CHAMAR A PRÓXIMA FUNÇÃO

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
}) //SE HOUVER SUCESSO RETORNÁ O RESOLVE
.then(number => `Que sucesso =) nosso número foi ${number}`) //PEGA ATRAVÉS DO THEN O RETORNO DA PROMISE E A UTILIZA PARA CRIAR UMA MENSAGEM
.then(msg => console.log(msg)); // PEGA A MENSAGEM CRIADA ANTERIORMENTE ATRAVÉS DO THEM E UTILIZA A FUNCÃO CONSOLE.LOG
// <===========================================================>

// PARA CAPTURAR O ERRO, UTILIZAŚE O ***.CATCH***
// QUANDO HOUVER ERRO EM ALGUM DAS THEN, O ERRO IRÁ PULAR(PULARÁ TODAS AS THEN) DIRETAMENTE PARA O CATCH, PEGANDO QUALQUER ERRO DE UMA DAS THEN. POR ISSO, É GERALMENTE UTILIZADO NO FINAL 
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));