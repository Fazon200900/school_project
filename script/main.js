// function decimalToBinary(userNumber) {
//     let value = ""
//     while (userNumber > 0) {
//         value += userNumber % 2;
//         userNumber = Math.trunc(userNumber/2);
//     }
//     value = Array.from(value).reverse().join("");
//     return value;
// }

// let valueInput = document.createElement("input");
// document.body.appendChild(valueInput);

// let acceptButton = document.createElement("button");
// acceptButton.textContent = "Accept";
// document.body.appendChild(acceptButton);

// let resultP = document.createElement("p");
// document.body.appendChild(resultP);

// acceptButton.addEventListener("click", () => {
//     resultP.innerHTML = `Результат перевода: ${valueInput.value}<sub>10</sub> = ${decimalToBinary(valueInput.value)}<sub>2</sub>`;
// });

let userNumber = 1234;

let table = document.createElement("table");
document.body.appendChild(table);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

let tr1 = document.createElement("tr");
tbody.appendChild(tr1);

let td1_1 = document.createElement("td");
td1_1.textContent = userNumber;
td1_1.classList.add("right");
tr1.appendChild(td1_1);

let td1_2 = document.createElement("td");
td1_2.textContent = 2;
td1_2.classList.add("bottom");
tr1.appendChild(td1_2);

let tr2 = document.createElement("tr");
tbody.appendChild(tr2);

let td2_1 = document.createElement("td");
tr2.appendChild(td2_1);

let td2_2 = document.createElement("td");
tr2.appendChild(td2_2);

let td2_3 = document.createElement("td");
tr2.appendChild(td2_3);

td2_2.textContent = Math.trunc(userNumber / 2);
td2_2.classList.add("right")
td2_1.textContent = +td2_2.textContent * 2;
td2_1.classList.add("bottom_right");
td2_3.textContent = 2;
td2_3.classList.add("bottom");

let temp = userNumber % 2;
userNumber = Math.trunc(userNumber / 2);

let i = 0;

while (userNumber > 0) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let j = 0;
    while (j < i) {
        let td_hollow = document.createElement("td");
        tr.appendChild(td_hollow);
        j++;
    };

    let td_1 = document.createElement("td");
    tr.appendChild(td_1);

    let td_2 = document.createElement("td");
    tr.appendChild(td_2);

    let td_3 = document.createElement("td");
    tr.appendChild(td_3);

    let td_4 = document.createElement("td");
    tr.appendChild(td_4);

    td_4.textContent = 2;
    td_4.classList.add("bottom");
    td_3.textContent = Math.trunc(userNumber / 2);
    td_3.classList.add("right");
    td_2.textContent = `-${+td_3.textContent*2}`;
    td_2.classList.add("bottom_right");
    td_1.textContent = temp;
    td_1.classList.add("temp");

    temp = userNumber % 2;
    i += 1;
    userNumber = Math.trunc(userNumber / 2);
};
