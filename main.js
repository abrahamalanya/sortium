let participants = [];
let buttonSelectWinner = document.querySelector("#buttonSelectWinner");

function handleFile() {
  const fileInput = document.getElementById('txtFile');
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const contents = e.target.result;
    const lines = contents.split('\n');

    let container = document.querySelector("#participants");
    let html = `<div class="header">
        <div class="title">
          <p>${lines.length}</p>
          <h3>jugadores</h3>
        </div>
      </div>
      <div class="container">`;
    
    lines.forEach(function (line) {
      const participant = line.trim(); // Eliminar espacios en blanco al inicio y al final de cada línea

      // Validar que la línea no esté vacía antes de agregarla al array
      if (participant !== '') {
        participants.push(participant);
        html += `<div class="player">
              <img src="https://cdn-icons-png.flaticon.com/512/1395/1395030.png" alt="player">
              <p>${participant}</p>
            </div>`;
      }
    });

    html += `</div>`;
    participants = participants;
    container.innerHTML = html;
    buttonSelectWinner.removeAttribute("disabled")
  };
  reader.readAsText(file);
}

// buttonSelectWinner
buttonSelectWinner.addEventListener('click',function () {
  let winnerPlayer = document.querySelector("#winnerPlayer");
  if (participants.length === 0) {
    console.log('No hay participantes cargados.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * participants.length);
  const randomParticipant = participants[randomIndex];

  winnerPlayer.dataset.text = randomParticipant;
  buttonSelectWinner.disabled = true;
});