// Урок 4. Асинхронность в Javascript
// Домашнее задание

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

/**
 * @param {number} id positive number <= 12
 */
async function getUserData(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (response.ok) {
    console.log(await response.json());
  } else {
    throw new Error(
      `Ошибка запроса, код ошибки: ${response.status}, запрашиваемый адрес не найден!`
    );
  }
}

getUserData(1);

// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

async function saveUserData(userData) {
  // Формируем объект запроса
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Устанавливаем тип содержимого как JSON
    },
    body: JSON.stringify(userData), // Преобразуем данные в формат JSON и отправляем в теле запроса
  };

  try {
    const response = await fetch("https://reqres.in/api/users", requestOptions);
    if (response.ok) {
      console.log(response.status);
      return response.json();
    } else {
      throw new Error(`Ошибка запроса, код ошибки: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

async function saveUserDataAndHandleResponse(userData) {
  try {
    const response = await saveUserData(userData);
    console.log("Данные успешно сохранены:", response);
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

// Пример использования функции
const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserDataAndHandleResponse(user);

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

function changeStyleDelayed(id, time, time2) {
  setTimeout(() => {
    if (id) {
      id.forEach((e) => {
        e.classList.add("rainbow-text");
        e.textContent = "А через 5 секунд у тебя кругом пойдёт голова";
        setTimeout(() => {
          e.classList.replace("rainbow-text", "rainbow-rotate-text");
          e.textContent = "88888888888888888888888888888888";
        }, time2);
      });
    }
  }, time);
}

const myElement = document.querySelectorAll("#text");

// Пример использования функции
changeStyleDelayed(myElement, 2000, 5000);
