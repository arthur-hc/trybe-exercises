const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  //Testando meu array
  const arthur = {
      Futebol: 'Bom',
      Surf: 'Médio',
      Luta: 'Ótimo',
      Skate: 'Médio'
  }

  const esportes = (nome) => {
    const arrayEsportes = Object.keys(nome);
    const arrayNivel = Object.values(nome)
    console.log(arrayEsportes)
    console.log(arrayNivel)
    for(index in arrayEsportes) {
        console.log(`${arrayEsportes[index]}, Nível: ${nome[arrayEsportes[index]]}`)
    }
  }

esportes (arthur)