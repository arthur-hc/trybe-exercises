let cp = 1
let sp= 2
let x = 1000

let profit = (sp*x)-((cp*1.2)*x)

if (cp>=0 && sp>=0 && x>=0) {
    console.log (profit)
} else {
    console.log ('Error')
}
