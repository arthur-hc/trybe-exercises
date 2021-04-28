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
  const showValues = (object) => {
    console.log(Object.values(object));
  }
 showValues(lesson3);

 // exercicio 5 - agrupa  as lessons em um novo objeto
  const allLessons = {};
  Object.assign(allLessons,{lesson1,lesson2,lesson3});
  console.log(allLessons);

  // exercicio 6 - retorna o número total de estudantes
  const studentsTotal = () => {
    return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
  }
  console.log(studentsTotal())

  // exercicio 7 - retorna o valor da chave selecionada de uma lesson
  const getValueByNumber = (lesson, index) => {
    const values = Object.values(lesson)
    return values[index]
  }
  console.log(getValueByNumber(lesson1, 0));

  // exercicio 8 - verifica se o chave/valor existe na função
  const verifyKeyValue = (lesson, key, value) => {
    return lesson[key].includes(value);
  }
  console.log(verifyKeyValue(lesson3, 'turno', 'noite'));
  console.log(verifyKeyValue(lesson3, 'materia', 'Maria Clara'));
