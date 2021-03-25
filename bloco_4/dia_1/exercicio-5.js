let a1 = 60
let a2 = 60
let a3 = 60
let c1
let c2

if (a1>0 && a2>0 && a3>0) {
    c1 = 1
} else {
    c1 = 0
}

if ((a1 + a2 + a3) == 180) {
    c2 = 1
} else {
    c2 = 0
}

if (c1 + c2  >= 2) {
    console.log ('Triângulo válido')
} else {
    console.log ('Não é um triângulo')
}

if (a1>0 && a2>0 && a3>0 && (a1+a2+a3)==180) {
    console.log ('Triângulo válido')
} else {
    console.log ('Não é um triângulo')
}
//*Verificar o gabarito pra novas soluções//
