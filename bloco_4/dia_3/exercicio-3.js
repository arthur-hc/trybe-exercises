let n = 5
let asteriscos = '*'
let linhaAsteriscos = ''
let numeroAsteriscos = 1

for (let numeroAsteriscos = 1; numeroAsteriscos <= n ; numeroAsteriscos +=1) {
linhaAsteriscos = ''

for(index = 0; index < n; index +=1) {
    if (n - numeroAsteriscos > index) {
        linhaAsteriscos += ' '
    } else {
        linhaAsteriscos += '*'
    }
}
console.log (linhaAsteriscos)
}


// linhaAsteriscos += espacos (n-index) + asteriscos (index)
//'    *'
//'   **'
//'  ***'
//' ****'
