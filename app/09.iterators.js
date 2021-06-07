console.log('Topic: Iterators');
// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.

// function keyValueIterable(target) {
//     const keys = Object.keys(target)
//
//     target[Symbol.iterator] = function () {
//         return {
//             next() {
//                 const done = keys.length === 0
//                 const key = keys.shift()
//                 return {
//                     value: [key, target[key]],
//                     done
//                 }
//             }
//         }
//     }
//
//     return target;
// }
//
// const colors = {
//   green: '#0e0',
//   orange: '#f50',
//   pink: '#e07'
// };
//
// const itColors = keyValueIterable(colors);
// for (const [, color] of itColors) {
//   console.log(color);
// }


// Task 2
// RU: В коллекции хранятся все имена пользователей, которые присоединились к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте итератор, который возвращает только имена администраторов.
// EN: The following collection store all the names of the user that have joined a particular telegram group.
//     The boolean flag indicates whether a user is an administrator of the group.
//     Сreatereate an iterator that returns only the administrators' names.

// const users = {
//   anna: false,
//   boris: true, // admin
//   christina: false,
//   dave: false,
//   elena: false,
//   felix: true,  // admin
//     [Symbol.iterator]: function () {
//         const keys = Object.entries(this).filter(([, value]) => value)
//         let index = 0
//
//         return {
//             next() {
//                 const [name] = keys[index++] || []
//                 const done = index > keys.length
//
//                 return {
//                     value: name,
//                     done
//                 }
//             }
//         }
//     }
// };
// // console.log(users)
// [...users].forEach(name => console.log(name)); // boris, felix


// Task 3
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random

// function take(iterator, count) {
//     let index = 0
//     const results = []
//
//     for (const iteratorElement of iterator) {
//         if(index++ >= count) break
//         results.push(iteratorElement)
//     }
//
//     return {
//         [Symbol.iterator]: () => ({
//             next() {
//                 const item = results.shift()
//                 return {
//                     value: item,
//                     done: !item
//                 }
//             }
//         })
//     }
// }
//
// const random = {
//   [Symbol.iterator]: () => ({
//     next: () => ({
//       value: Math.random()
//     })
//   })
// };
//
// const a = [...take(random, 10)];
// console.log(a);


// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

// const Fib = {
//     previous: 0,
//     nxt: 1,
//     [Symbol.iterator]() {
//         return this
//     },
//     next() {
//         const value = this.previous + this.nxt
//         this.previous = this.nxt
//         this.nxt = value
//         return {
//             value: this.previous == 1 ? this.previous : value,
//         }
//     }
// }
//
// // console.log([...Fib])
//
// for (let v of Fib) {
//   console.log(v);
//   if (v > 50) break;
// }


// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

// Number.prototype[Symbol.iterator] = function() {
//     let currentNum = 0
//     return {
//         next: () => {
//             const done = this > 0 ? currentNum > this : currentNum < this
//             return {
//                 value: this > 0 ? currentNum++ : currentNum--,
//                 done
//             }
//         }
//     }
// }
//
// console.log([...-5]);
// console.log([...5]);
