/*
1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
*/
let expensesMonth = prompt('Перечислите расходы за месяц через запятую, после запятой ставьте пробел')
let arrExpensesMonth = expensesMonth.split(', ');
let res = 0;
let total=0;
const getExpensesMonth = () => {
  for (let i = 0; i < arrExpensesMonth.length; i++) {
    res = +prompt(`Введите затраты на ${arrExpensesMonth[i]}`)
    total += res
}
 return alert(`Общая сумма ваших месячных затрат ${total}`)
}

getExpensesMonth();
