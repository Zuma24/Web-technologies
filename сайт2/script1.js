const num = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
Temperature(num);

function Temperature(num) {
    alert(`Цельсий: ${num}, Фаренгейт: ${Math.min((9*num/5)+32)}.`);
    // alert(`Цельсий: ${num}, Фаренгейт: ${((9*num/5)+32).toFixed(1)}.`);
}