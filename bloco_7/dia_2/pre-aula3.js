const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(index in student) {
      skills.push(student[index]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsWithFor(student));
  
  // Com Object.values
  console.log(listSkillsWithValues(student));

  const studentInfo = (student) => {
    const skills = Object.keys(student);
    const level = Object.values(student);
    for (index in skills)
    console.log(`${skills[index]}: ${student[skills[index]]}`)
  }
  studentInfo(student)