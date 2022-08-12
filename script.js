
/*
1) Следующим переменным присвоить значения 
   - money - любое число “Доход за месяц”,
   - income - строка с дополнительными доходом (например: фриланс), 
   - addExpenses - строка с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка), 
   - deposit - любое булево значение,
   - mission - любое число (Какую сумму хотите накопить),
   - period - число от 1 до 12 (месяцев)
*/

let money = 200000;
let income = 'developer front-end';
let addExpenses = 'Internet, Taxi, shisha, beer';
let deposit = true;
let mission = 250000;
let period = 12;


/*
2) Используя методы и свойства:
   - Вывести в консоль тип данных значений переменных money, income, deposit;
   - Вывести в консоль длину строки addExpenses
   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
   - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
   - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
   - Вывести в консоль budgetDay
*/

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '))
let budgetDay = money / 30
console.log(budgetDay.toFixed(2))