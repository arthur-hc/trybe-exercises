// ./index.js PARA RODAR, ALETERE O NOME P/ index.js

// OBSERVE QUE SE SURGIR NOVAS ESCOLAS, TEREMOS PROBLEMAS PARA DEFINIR A NOTA DE CORTE
// const GRADE_DICT = {
//   0.9: 'A',
//   0.8: 'B',
//   0.7: 'C',
//   0.6: 'D',
//   0.1: 'E',
// };

// const gradeKeys = Object.keys(GRADE_DICT);

// /* Função menor para remover o uso excessivo de `if{}else`s */
// const getGradeLetter = (gradeNumber) => {
//   let letterGrade = 'F';

//   for (let i = 0; i < gradeKeys.length; i += 1) {
//     if (gradeNumber >= gradeKeys[i]) {
//       letterGrade = GRADE_DICT[gradeKeys[i]];
//       break;
//     }
//   }

//   return letterGrade;
// };

// /* Coletar notas */
// const getLetterGrades = ({ name, grade }) => ({
//   name,
//   grade,
//   letterGrade: getGradeLetter(grade) });

// /* "Converter" */
// const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
//   name,
//   school,
//   disciplines: disciplines.map(getLetterGrades) });

// /* "Determinar" */
// const approvedStudents = ({ disciplines }) =>
//   disciplines.every(({ grade }) => grade > 0.7);

// /* "Atualizar" */
// const updateApprovalData = ({ name: studentName, disciplines }) => {
//   console.log(`A pessoa com nome ${studentName} foi aprovada!`);

//   disciplines.map(({ name, letterGrade }) =>
//     console.log(`${name}: ${letterGrade}`));
// };

// function setApproved(students) {
//   students
//     .map(percentageGradesIntoLetters)
//     .filter(approvedStudents)
//     .map(updateApprovalData);
// }

// /* Exemplo de execução */
// const students = [
//   {
//     name: 'Lee',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.6 },
//     ],
//   },
//   {
//     name: 'Clementine',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
// ];

// setApproved(students);

// module.exports = {
//   percentageGradesIntoLetters,
//   approvedStudents,
//   updateApprovalData,
//   setApproved,
//   getLetterGrades,
// };


// REFATORANDO PARA RESPEITAR O PRINCIPIO OPEN/CLOSED, ASSIM, NOVAS ESCOLAS SÃO ADICIONADAS AO OBJETO QUE CONTÉM AS ESCOLAS COM SUAS RESPECTIVAS NOTAS DE CORTE

/* Apoio para a função `setApproved` */
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};

const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Coletar notas */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade) });

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  school,
  disciplines: disciplines.map(getLetterGrades) });

/* "Determinar" */
const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}

/* Exemplo de execução */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Harry',
    school: 'Hogwarts',
    disciplines: [
      { name: 'matemática', grade: 0.9 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Drako',
    school: 'Hogwarts',
    disciplines: [
      { name: 'matemática', grade: 0.7 },
      { name: 'história', grade: 0.9 },
    ],
  },
];


setApproved(students);

module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};