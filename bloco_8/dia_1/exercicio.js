const addEmployeeInfo = (name) => {
  let email = `${name.toLowerCase().replace(/\s/gi, '_')}@trybe.com`;
  return {name, email};
};

const newEmployees = (callback) => {
  const employess = {
    id1: callback('Arthur Hermann'),
    id2: callback('Lucas Gil'),
    id3: callback('Igor Akio'),
  }
  return employess
};

console.log(newEmployees(addEmployeeInfo));