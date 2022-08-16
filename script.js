/*
1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
*/
let profitMonth = +prompt('Введите ваш месячный доход')
let target = +prompt('Введите сумму, которую хотите накопить')
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
let result
function getAccumulatedMonth () {
  return result = profitMonth - totalExpensesMonth
  }


/* 
3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
*/
let accumulatedMonth = getAccumulatedMonth()
alert(`Ваш остаток ${result}` )

/*
4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
*/
let resultTarget
function getTargetMonth () {
  return resultTarget = Math.ceil(target  / result)
}
getTargetMonth ()
alert(`Вы накопите нужную вам сумму через ${resultTarget} месяцев`)


/*
budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
*/
let budgetDay
function getBudgetDay() {
  return budgetDay = Math.floor(accumulatedMonth / 30)
}
getBudgetDay()
alert(`Ваш бюджет на день ${budgetDay}`)