function ochir(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function tahrirla(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    const name = cells[1].innerText;
    const age = cells[2].innerText;

    const newName = prompt("Yangi ismni kiriting:", name);
    const newAge = prompt("Yangi yoshni kiriting:", age);

    if (newName) cells[1].innerText = newName;
    if (newAge) cells[2].innerText = newAge;
}
