const container = document.body.childNodes[1];

fetch('http://localhost:3000/')
  .then((response) => {
    if (response.ok) return response.json();
  })
  .then((data) => {
    const employees = data[0].data;
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
  });
