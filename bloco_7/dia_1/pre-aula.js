function userInfo() {
    const userEmail = 'maria@email.com';
    console.log(userEmail);
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
userInfo();



if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  var userName = "Isabella";
  var userName = "Lucas";
  console.log(userName); // Resultado: Lucas

let favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

const userInfo2 = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo2.name = "João"

console.log(userInfo2) // { name: "João", id: "5483-2", email: "claudio@email.com }