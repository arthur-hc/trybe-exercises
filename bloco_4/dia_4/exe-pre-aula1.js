let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}
player ['fullName'] = player.name + " "+ player.lastName+ ' ';
console.log ('A jogadora ' + player['fullName'] + 'tem ' + player.age + ' anos de idade')