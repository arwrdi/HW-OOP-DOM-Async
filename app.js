class Orang {
  constructor(name, age, money) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
}
const orangDefault = [
  new Orang("Arwin Renardi", 25, 670000),
  new Orang("Si Paling Gege", 29, 460000),
  new Orang("Spiderman", 30, 670000),
];
let sumUmur = 0;
let sumMoney = 0;
let averageUmur = 0;
let averageMoney = 0;
function averageAge() {
  for (let i = 0; i < orangDefault.length; i++) {
    //   console.log(valueOfSum);
    sumUmur += orangDefault[i].age;
    sumMoney += orangDefault[i].money;
  }
  averageUmur = sumUmur / orangDefault.length;
  averageMoney = sumMoney / orangDefault.length;
}
averageAge();
// averageUmur = sumUmur / orangDefault.length;
console.log(sumUmur);
console.log(orangDefault.length);

const table = document.getElementById("table");
const tableBody = document.getElementById("table-body");
const resume = document.getElementById("resume");
populateData(tableBody);
resume.innerHTML = `Rata- rata usia pada list adalah ${averageUmur} dan rata-rata uang sangu sejumlah ${averageMoney}`;

function tombolSubmit() {
  const nameElement = document.getElementById("name");
  const ageElement = document.getElementById("usia");
  const moneyElement = document.getElementById("uang");

  const name = nameElement.value;
  const age = ageElement.value;
  const money = moneyElement.value;

  const { isValid, messages } = inputValidation(name, age, money);
  if (isValid) {
    const newOrang = new Orang(name, +age, +money);
    orangDefault.push(newOrang);
    tableBody.innerHTML = "";
    populateData(tableBody);
    sumUmur = 0;
    averageUmur = 0;
    sumMoney = 0;
    averageMoney = 0;
    averageAge();
    // console.log(averageUmur);
    // console.log(averageMoney);
    // console.log(orangDefault.length);
    // console.log(sumUmur);
    // console.log(sumMoney);
    // averageUmur = sumUmur / orangDefault.length;

    resume.innerHTML = `Rata- rata usia pada list adalah ${averageUmur} dan rata-rata uang sangu sejumlah ${averageMoney}`;
  } else {
    alert(messages);
  }
}
// console.log(sumUmur);
// console.log(orangDefault.length);
function inputValidation(name, age, money) {
  let isValid = true;
  let messages = "";

  if (10 > name.length) {
    isValid = false;
    messages = "atleast 10 character";
  }
  if (age < 25) {
    isValid = false;
    messages = "You must be 25 years old atleast";
  }
  if (money < 100000 || money > 1000000) {
    isValid = false;
    messages = "money must be in range";
  }
  return {
    isValid,
    messages,
  };
}
function populateData(tableBody) {
  for (let i = 0; i < orangDefault.length; i++) {
    let row = tableBody.insertRow(i);

    // row.insertCell(0).innerHTML = `${i+1}`
    row.insertCell(0).innerHTML = `${orangDefault[i].name}`;
    row.insertCell(1).innerHTML = `${+orangDefault[i].age}`;
    row.insertCell(2).innerHTML = `${+orangDefault[i].money}`;
  }
}

// function sumAge() {
//   var sumVal = 0;
//   for (var i = 1; i < table.rows.length; i++)
//     sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
//   var avgAge = sumVal / (table.rows.length - 1);
//   // console.log(avgAge)
//   console.log(sumVal);
// }
