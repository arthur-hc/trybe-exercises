enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); //saída: 2

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}