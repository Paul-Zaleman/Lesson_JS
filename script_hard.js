
/*
Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
через if, 
через switch-case 
через многомерный массив без ифов и switch.
*/

/*
let lang = 'ru';
let arr;
if (lang==='ru') {
  arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  console.log(arr)
} else {
  arr = ['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'];
  console.log(arr)
}
*/


// let lang = 'en';
// let arr;
// switch(lang){
//   case 'en': 
//     arr = ['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'];
//     console.log(arr);
//     break;
//   case 'ru':
//     arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
//     console.log(arr);
//     break;
//   default:
//     console.log('Что-то пошло не так...')
// }
  
let array_lang = []
array_lang['ru'] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
array_lang['en'] = ['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'];
let lang = 'en'
console.log(array_lang[lang])
