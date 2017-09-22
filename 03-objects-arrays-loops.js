//contains - принимает две строки и выдает true/false в зависимости от того, является ли второй аргумент подстрокой первого
//contains('test', 'est')  // true
//contains('test', 'rest') // false
//contains('test', 'test') // true

function contains() {
	'use strict';
alert('test' > 'est');
}
contains();

function contains() {
	'use strict';
alert('test' == 'rest');
}
contains();

function contains() {
	'use strict';
alert('test' == 'test');
}
contains();
---------------------------------------------------

var  arr = [1, 2, 3, 4, 5]
      function extractOddItems() {
      document.write('Нечётные элементы: ')
 	for (i = 0; i<arr.length; i++) {
 	if (arr[i]%2==1)
		 document.write(arr[i]+ ' ');
 } 
 }
extractOddItems();
---------------------------------------------------
var  arr = [2,4,5,6]
      function extractOddItems() {
      document.write('Нечётные элементы: ')
 	for (i = 0; i<arr.length; i++) {
 	if (arr[i]%2==1)
		 document.write(arr[i]+ ' ');
 } 
 }
extractOddItems();
----------------------------------------------------
var  arr = [6,8,10]
      function extractOddItems() {
      document.write('Нечётные элементы: ')
 	for (i = 0; i<arr.length; i++) {
 	if (arr[i]%2==1)
		 document.write(arr[i]+ ' ');
 } 
 }
extractOddItems();
---------------------------------------------------
//objectFromArray - принимает два массива. Первый - ключи, второй - значения. Возвращает объект
//objectFromArray(['first', 'second', 'third'], [1, 2, 3]) // {first: 1, second: 2, third: 3}

function objectFromArray(key,name){
	var generatedObj = {};
	var key = ['first', 'second', 'third'];
	var name = [1, 2, 3];
for(var i = 0; i < key.length; i++) {
  	generatedObj[key[i]] = name[i];
  }
  return generatedObj;
}
objectFromArray();
---------------------------------------------------------
//toMatrix - принимает массив и длину строки матрицы. Возвращает матрицу
//toMatrix([1,2,3,4,5,6,7,8,9], 3) // [[1,2,3], [4,5,6], [7,8,9]]
	
function toMatrix(arr, leng) {
	var arr = [1,2,3,4,5,6,7,8,9];
	var leng = 3;
	var total = [];
for (var i = 0; i < arr.length; i += leng) {
            total.push(arr.slice(i, i + leng));
        }
        return total;
    }
toMatrix();
==============================================================
toQueryString - принимает объект, возвращает строку http запроса
toQueryString({first: 1, second: 2, third: 3}) // "?first=1&second=2&third=3"
