"use strict";

// Урок 1. Функциональный Javascript
// Домашнее задание
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
var arr = [1, 5, 7, 9];
console.log(Math.min.apply(Math, arr)); // 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  var count = 0;
  return {
    increment: function increment() {
      count++;
    },
    decrement: function decrement() {
      count--;
    },
    getCount: function getCount() {
      return count;
    }
  };
} // function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   function decrement() {
//     count--;
//   }
//   function getCount() {
//     return count;
//   }
//   return {
//     increment,
//     decrement,
//     getCount,
//   };
// }


var counter = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount()); // 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
  // if (root == null || root == undefined) {
  // проверка на рут элемент
  //   console.log(`${root} корневой элемент не найден!`);
  // } else {
  //   if (root.classList && root.classList.contains(className)) {
  //     return root;
  //   }
  //   let result = null;
  var childNodes = root.childNodes;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;
      var result = findElementByClass(node, className);

      if (result) {
        return result; // break;
      }
    } // return result;
    // }

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
} // Пример


var rootElement = document.getElementById("root");
var targetElement = findElementByClass(rootElement, "my-class");

if (targetElement) {
  console.log(targetElement);
} else {
  console.log("Элемент не найден!");
}