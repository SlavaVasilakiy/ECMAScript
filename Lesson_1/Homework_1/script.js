// Урок 1. Функциональный Javascript
// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let count = 0; // инициализируем значение счетчика

  // возвращаем объект с двумя методами
  return {
    increment() {
      count++; // увеличиваем значение счетчика на 1
    },

    decrement() {
      count--; // уменьшаем значение счетчика на 1
    },

    getCount() {
      return count; // возвращаем значение счетчика
    },
  };
}

const counter = createCounter();

console.log(counter.getCount()); // 0

counter.increment();

console.log(counter.getCount()); // 1

counter.decrement();

console.log(counter.getCount()); // 0

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
  if (root == null || root == undefined) {
    // проверка на рут элемент
    console.log(`${root} корневой элемент не найден!`);
  } else {
    if (root.classList && root.classList.contains(className)) {
      return root;
    }

    let result = null;
    const childNodes = root.childNodes;

    for (const node of childNodes) {
      result = findElementByClass(node, className);
      if (result) {
        break;
      }
    }

    return result;
  }
}

// Пример

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");

if (targetElement) {
  console.log(targetElement);
} else {
  console.log("Элемент не найден!");
}
