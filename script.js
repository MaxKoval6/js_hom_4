//task1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//task2
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i + "Парне число");
  } else {
    console.log(i + "Непране число");
  }
}

//task3
let num = 20;
while (num < 28) {
  num++;
  console.log(num);
}

//task4
let hero = prompt("Введіть ім'я героя");
while (hero.length < 6) {
  console.log(hero);
  hero = prompt("Введіть ім'я героя");
}
console.log("Кількість букв більше 6");
