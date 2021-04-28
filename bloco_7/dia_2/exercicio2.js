const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // exercicio 1 - adiciona propriedade ao alvo
  const addTurn = (target, key, property) => {
      target[key] = property;
  }
  addTurn(lesson2, 'turno', 'manhã');
  console.log(lesson2);

  // exercicio 2 - lista as keys do objt
  const showKeys = (object) => {
    console.log(Object.keys(object));
  }
  showKeys(lesson2);

  // exercicio 3 - mostra o tamanho do objt
  const showSize = (object) => {
    console.log(Object.keys(object).length);
  }
  showSize(lesson1);

  // exercicio 4 - mostra os valores do objet