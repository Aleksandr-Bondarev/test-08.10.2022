const container = document.body.childNodes[1];

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function () {
  alert('Соединение установлено.');
};

socket.onopen = function () {
  alert('Соединение установлено.');
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения');
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function (event) {
  alert('Получены данные');
  const employees = JSON.parse(event.data);
  employees.forEach((worker) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const fullName = document.createElement('p');
    fullName.textContent = `${worker.first_name} ${worker.last_name}`;

    const email = document.createElement('p');
    email.textContent = `email: ${worker.email}`;

    const img = document.createElement('img');
    img.src = worker.avatar;
    img.alt = 'workers avatar';

    card.append(img);
    card.append(fullName);
    card.append(email);
    container.append(card);
  });
};

socket.onerror = function (error) {
  alert('Ошибка ' + error.message);
};
