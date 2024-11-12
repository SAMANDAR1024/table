// Qatorni o'chirish funksiyasi
function ochir(button) {
    // Tugmaning joylashgan qatorini topib o'chirish
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Qatorni tahrirlash funksiyasi
function tahrirla(button) {
    // Qator elementlarini olish
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    // Name va age ustunlarini tahrirlash
    const name = cells[1].innerText;
    const age = cells[2].innerText;

    // Foydalanuvchidan yangi qiymatlar so'rash
    const newName = prompt("Yangi ismni kiriting:", name);
    const newAge = prompt("Yangi yoshni kiriting:", age);

    // Agar foydalanuvchi yangi qiymat kiritgan bo'lsa, uni yangilash
    if (newName) cells[1].innerText = newName;
    if (newAge) cells[2].innerText = newAge;
}
