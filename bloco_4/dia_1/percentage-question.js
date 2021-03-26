var s = "29% of the others.";
s = s.replace('%');
console.log(s);
// This is a long string which is of the others.
var s = "29% of the others.";
s = s.replace(/\d+% ?/g, "");
console.log(s);
// This is a long string which is of the others.

let notaPer = '95%'
nota = notaPer.replace ('%')

if (nota >=90) {
    console.log('A')
  } else if (nota >=80) {
    console.log ('B')
  } else if (nota >=70) {
    console.log ('C')
  } else if (nota >=60) {
    console.log ('D')
  } else if (nota >=50) {
    console.log ('E')
  } else {
    console.log ('F')
  }