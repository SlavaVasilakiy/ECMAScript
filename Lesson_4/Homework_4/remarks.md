Павел Тарасов・Преподаватель
Вячеслав, здравствуйте :)

1. В 19 строке нужно было вернуть значение, не выводить его. В 27 строке мы уже должны промис принять. Если прям строго следовать заданию, то должно быть так:

async function getUserData(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(await response.text());
}

getUserData(3)
  .then(result => console.log(result))
  .catch(err => console.log(`Ошибка: ${err.message}`));
То есть возвращается промис, либо с результатом, либо с сообщением ошибки.
2. В консоль статус не нужно выводить в функции (46 строка).
3. :)) Отлично все сделали.
Отличная работа, спасибо, надеюсь, еще пересечемся где-нибудь, Вячеслав :)
