let a1 = 60
let a2 = 60
let a3 = 60
let sumAngles = a1 + a2 + a3
let c1
let c2

if (a1>0 && a2>0 && a3>0) {
    c1 = 1
} else {
    c1 = 0
}

if ((sumAngles) === 180) {
    c2 = 1
} else {
    c2 = 0
}

if (c1 + c2  >= 2) {
    console.log ('Triângulo válido')
} else {
    console.log ('Não é um triângulo')
}

if (a1>0 && a2>0 && a3>0 && sumAngles===180) {
    console.log ('Triângulo válido')
} else {
    console.log ('Não é um triângulo')
}
//*Verificar o gabarito pra novas soluções//
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.