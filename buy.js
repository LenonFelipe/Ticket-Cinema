const seatingArea = document.getElementById('seating-area');
const totalDisplay = document.getElementById('total');
const seatPrice = 15; // Valor de cada assento
let total = 0;


// Criar os assentos (colunas A-G e linhas 1-5)
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const rows = [1, 2, 3, 4, 5];

columns.forEach((col) => {
  rows.forEach((row) => {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = `${col}${row}`;
    seat.dataset.price = seatPrice; // Guardar o preço no elemento
    seatingArea.appendChild(seat);

    // Adicionar o evento de clique
    seat.addEventListener('click', () => {
      if (seat.classList.contains('selected')) {
        // Deselecionar e subtrair o valor
        seat.classList.remove('selected');
        total -= seatPrice;
      } else {
        // Selecionar e somar o valor
        seat.classList.add('selected');
        total += seatPrice;
      }
      totalDisplay.textContent = total.toFixed(2); // Atualizar o total
    });
  });
});




