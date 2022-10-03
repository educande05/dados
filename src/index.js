
const button = document.querySelector("button");
const counter = [];

const printStats = () => {
  const tableStats = document.querySelector(".stats");
  const table = [];

  counter.forEach((num, i) => {
    const tr = /* html */`
    <tr>
        <td>Tirada ${i}</td>
        <td>${num}</td>
    </tr>
    `;
    table.push(tr);
  });

  tableStats.innerHTML = table.join("");
};

function updateDice() {
  const dice = document.querySelector(".dice");
  const newDice = Math.round(Math.random() * 6) + 1;
  dice.textContent = newDice;
  counter.push(newDice);
  printStats();
}
button.addEventListener("click", () => {
  updateDice();
});
