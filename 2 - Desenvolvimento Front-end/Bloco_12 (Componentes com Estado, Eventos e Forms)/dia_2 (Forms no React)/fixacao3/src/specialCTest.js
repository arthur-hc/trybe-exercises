const { keyName, ask, value, func, type, className, placeholder, maxC, noSpecialC } = this.props

let error;

if(value && noSpecialC === true) {
  const specialC = /[!@#$`º%~^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if(specialC.test(value)){
    error = 'Caractere inválido'
  }
}


//FUNC BASE
// let specialC;
// var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// if(format.test('ar!!thur')){
//   specialC = true;
// } else {
//   specialC = false;
// }

// console.log(specialC)