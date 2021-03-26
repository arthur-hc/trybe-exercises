let sbruto = 3000
let inss
let ir
let sliquido

if (sbruto<=1556.94) {
    inss = sbruto*0,08
} else if (sbruto<=2594.92) {
    inss = sbruto*0,09
} else if (sbruto<=5189.82) {
    inss = sbruto*0.11
} else {
    inss = 570.88
}

let sbase = sbruto-inss

if (sbruto<=1903.98) {
    ir = 0
} else if (sbruto<=2826.65) {
    ir = (sbase*0.075) - 142.80
} else if (sbruto<=3751.05) {
    ir = (sbase*0.15) - 354,80
} else if (sbruto<=4664.68) {
    ir = (sbase*0.225) - 636.13
} else {
    ir = (sbase*0.275) - 570.88
}

console.log (sbruto -inss -ir)