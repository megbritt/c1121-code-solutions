function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Megan Brittany Martinez'));
console.log(lawSchool('Megan Brittany Martinez'));
