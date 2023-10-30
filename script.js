// let str = 'hello'
// console.log(str.includes('e'))

// let str = 'lorem ipsum dolor sit amet'
// console.log(str.split(' '))

// let str = 'Bolot'
// console.log(str.split('').reverse().join(''))

// let students = ['Aidin', 'Aigerim', 'Maksat', 'Elba', 'Angela']
// console.log(students.map(classmate => classmate.toUpperCase()))

// let arr= [1, 2, 3, 4, 5]
// console.log(arr.map(el number => el * 4))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// console.log(arr.map(el => {
//     return el === 5 ? el * el : el
// }))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.filter( el =>el % 2=== 0))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.map((el , idx) => idx % 2 === 0))

// let arr = ['Aidin', 'Aigerim', 'Maksat', 'Elba', 'Angela']
// console.log(arr.filter(classmate => classmate.length % 2 === 0))


// let arr = ['Aidin', 'Aigerim', 'Maksat', 'Elba', 'Angela']
// console.log(arr.filter(el => el.includes('A')))

// let arr = ['Aidin', 'Aigerim', 'Maksat', 'Elba', 'Angela']
// console.log(arr.filter(el => !el.includes('A')))

// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.map(el => el % 2 ? el * el : el));

//[2, 3, 2]
// let arr = ['john', 'nikolas', 'harry', 'nikita', 'elba']
// console.log(arr.filter(item =>item.length % 2 === 0).map(item =>item.length / 2))

// function pswCheck(psw, confPsw) {
//
// }

//Homework
//#1
// строка проверить строку на наличие . и после нее на com или ru
// let arr = 'floptropica.com'
// console.log(arr.endsWith('.ru'))

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// let arr = 'floptrop'
// console.log(arr.length >= 4 && arr.length <= 8 && arr.length % 2 === 0);

// строка поменять букву каждого четного индекса на E можно решить через map
// let arr = ['Floptropica']
// function myFunction(arr) {
//     return arr.map((item, idx)=>{
//         if (idx %2 === 0){
//             return 'E'
//         } else {
//             return item
//         }
//     })
// }
// let inputArr = ['F', 'l', 'o', 'p', 't', 'r', 'o', 'p', 'i', 'c', 'a'];
// console.log(myFunction(inputArr).join(''));

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
// let a = '123456'
// let b = '123456'
// function pswCheck(psw, confPsw) {
//     if (psw === confPsw) {
//         return 'valid';
//     } else {
//         return 'invalid';
//     }
// }
// console.log(pswCheck(123456, 123456))

// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// let arr = ['lorem', 'ipsum', 'dolor', 'sit']
// console.log(arr.map(word => word.length))

// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// let arr = ['lorem', 'ipsum', 'dolor']
// console.log(arr.map((element, index) => index + 1))

// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']

// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let arr = ['lorem', 'ipsum', 'dolor']
// console.log(arr.map(word => word.toUpperCase()))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join('-'))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join('/'))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join(' '))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(str.filter(word => word === 'ipsum' || word === 'sit'))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(str.filter(word =>word === 'lorem' || word === 'dolor' || word === 'amet'))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// let a = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let b = ['consectetur', 'adipiscing', 'elit']
// console.log([a+ ',' +b])

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// let str = [123,33,444,'22',55,66,77,88,99]
// console.log(str.filter(el => el !== '22'))

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// let str1 = [123,33,444,'22',55,66,77,88,99]
// let str2 = 22
// console.log(str1.filter(el => el !== '22') + ',' + str2)

// ['null', undefined, 0, false, true, ''] => [0, false, true]
// let arr = ['null', undefined, 0, false, true, '']
// console.log(arr.filter(element => !['null', undefined, ''].includes(element)))

// ['null', undefined, 0, false, true, ''] => [0, false, true, 'null', undefined, '']
// let arr = ['null', undefined, 0, false, true, '']
// console.log(arr.filter(element => element === 0 || element === false || element === true || element === 'null' || element === undefined || element === ''))

// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// let arr = [1123, 'qwe']
// console.log([arr[0], arr[1], arr[0], arr[1]])

// [null, undefined] => [null, undefined, null, undefined]
// let arr = [null, undefined]
// console.log([arr[0], arr[1], arr[0], arr[1]])

// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
let str = 'lorem ipsum dolor sit amet'
let a = str.filter(element=> element ['lorem'])
console.log(a)