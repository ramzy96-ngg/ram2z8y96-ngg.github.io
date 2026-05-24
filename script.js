const form = document.getElementById("form");

const appointmentsList = document.getElementById("appointments-list");

const appointments = [];

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;

  const phone = document.getElementById("phone").value;

  const service = document.getElementById("service").value;

  const appointment = {
    name: name,
    phone: phone,
    service: service
  };

  appointments.push(appointment);

  const card = document.createElement("div");

  card.classList.add("appointment-card");

  card.innerHTML = `
    <h3>${appointment.name}</h3>
    <p>Телефон: ${appointment.phone}</p>
    <p>Услуга: ${appointment.service}</p>
  `;

  appointmentsList.appendChild(card);

  form.reset();

});

function showLicense(){

  alert("Лицензия врача подтверждена");

}