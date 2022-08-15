/*
1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
*/
let profitMonth = +prompt('Введите ваш месячный доход')
let expensesMonth = prompt('Перечислите расходы за месяц через запятую, после запятой ставьте пробел')
let arrExpensesMonth = expensesMonth.split(', ');
let res = 0;
let total=0;
const getExpensesMonth = () => {
  for (let i = 0; i < arrExpensesMonth.length; i++) {
    res = +prompt(`Введите затраты на ${arrExpensesMonth[i]}`)
    total += res
}
 //return alert(`Общая сумма ваших месячных затрат ${total}`)
return total;
}
let totalExpensesMonth = getExpensesMonth()
alert(`Общая сумма ваших месячных затрат ${total}`)

/*
2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
*/

function getAccumulatedMonth () {
  let result = profitMonth - totalExpensesMonth

  return alert(`Ваш остаток ${result}` )
}
getAccumulatedMonth()


