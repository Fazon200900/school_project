function decimalToBinary10(userNumber, systemNumber) {
    let letters = "ABCDEF";
    let value = "";
    while (userNumber > 0) {
        if ((userNumber % systemNumber) >= 10) {
            value += letters.charAt((userNumber % systemNumber) - 10);
        }
        else {
            value += userNumber % systemNumber;
        }
        userNumber = Math.trunc(userNumber / systemNumber);
    }
    value = Array.from(value).reverse().join("");
    return value;
}

function decimalToBinaryOther(userNumber, systemNumber1, systemNumber2) {
    let strNumber = String(userNumber);
    let c1 = strNumber.length - 1;
    let letters = "ABCDEF";
    let flag = false;
    let c2 = 0;
    let num = 0;
    let sum = 0;
    while (c1 != -1) {
        for (let i = 0; i < letters.length; i++) {
            if (strNumber.charAt(c2) == letters.charAt(i)) {
                num = 10 + i;
                flag = true;
            }
        }
        if (flag == false) {
            num = +strNumber.charAt(c2);
        }
        sum += num * (systemNumber1 ** c1);
        flag = false;
        c1 -= 1;
        c2 += 1;
    }
    return decimalToBinary10(sum, systemNumber2);
}

function create_table_10(userNumber, systemNumber) {
    let letters = "ABCDEF";
    if (document.querySelector("table") != null) {
        document.querySelector("table").remove();
        document.querySelector(".answerP").remove();
    }

    let table = document.createElement("table");
    document.body.appendChild(table);
    table.classList.add("hide");

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let tr1 = document.createElement("tr");
    tbody.appendChild(tr1);

    let td1_1 = document.createElement("td");
    td1_1.textContent = userNumber;
    td1_1.classList.add("right");
    tr1.appendChild(td1_1);

    let td1_2 = document.createElement("td");
    td1_2.textContent = systemNumber;
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

    td2_2.textContent = Math.trunc(userNumber / systemNumber);
    td2_2.classList.add("right")    
    td2_1.textContent = +td2_2.textContent * systemNumber;
    td2_1.classList.add("bottom_right");
    td2_3.textContent = systemNumber;
    td2_3.classList.add("bottom");

    let temp = userNumber % systemNumber;
    if (temp >= 10) {
        temp = letters.charAt((userNumber % systemNumber) - 10);
    }
    userNumber = Math.trunc(userNumber / systemNumber);

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

        i += 1;

        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let td_3 = document.createElement("td");
        let td_4 = document.createElement("td");

        if (userNumber == 0 || userNumber == 1) {
            let td = document.createElement("td");
            td.classList.add("temp");
            td.textContent = temp;
            tr.appendChild(td);
            tbody.children[tbody.children.length - 2];
            break;
        }

        td_4.textContent = systemNumber;
        td_4.classList.add("bottom");
        td_3.textContent = Math.trunc(userNumber / systemNumber);
        td_3.classList.add("right");
        td_2.textContent = `-${+td_3.textContent*systemNumber}`;
        td_2.classList.add("bottom_right");
        td_1.textContent = temp;
        td_1.classList.add("temp");

        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        tr.appendChild(td_4);

        temp = userNumber % systemNumber;
        if (temp >= 10) {
            temp = letters.charAt((userNumber % systemNumber) - 10);
        }
        userNumber = Math.trunc(userNumber / systemNumber);
        console.log(i, userNumber);
    }
}


function createMainDiv(value1, value2) {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");
    mainDiv.classList.add("hide");
    document.body.appendChild(mainDiv);

    let mainInput = document.createElement("input");
    mainInput.classList.add("mainInput");
    mainInput.placeholder = "Введи число";
    mainDiv.appendChild(mainInput);

    let mainButton = document.createElement("button");
    mainButton.classList.add("mainButton");
    mainButton.textContent = "Принять";
    mainDiv.appendChild(mainButton);

    if (value1 == 10) {
        mainButton.addEventListener("click", () => {
            console.log("Вызвалась функция createMainDiv")
            if (mainInput.value != "") {
                const answer10 = document.createElement("p");
                answer10.className = "answerP";
                answer10.innerHTML = `Результат перевода: ${mainInput.value}<sub>10</sub> = ${decimalToBinary10(+mainInput.value, value2)}<sub>${value2}</sub>`;
                mainDiv.appendChild(answer10);
                create_table_10(+mainInput.value, value2);
            };
        });
    }

    else {
        mainButton.addEventListener("click", () => {
            console.log("Вызвалась функция createMainDiv")
            if (mainInput.value != "") {
                const answer10 = document.createElement("p");
                answer10.className = "answerP";
                answer10.innerHTML = `Результат перевода: ${mainInput.value}<sub>${value1}</sub> = ${decimalToBinaryOther(mainInput.value, value1, value2)}<sub>${value2}</sub>`;
                mainDiv.appendChild(answer10);
                // create_table_10(+mainInput.value, value2);
            };
        });
    }
};


descriptionButton = document.createElement("button");
descriptionButton.textContent = "Принять";
document.querySelector(".descriptionDiv").appendChild(descriptionButton);
descriptionButton.addEventListener("click", () => {
    let radioButton1 = document.querySelectorAll(".radio1");
    let radioButton2 = document.querySelectorAll(".radio2");
    let value1 = 0;
    let value2 = 0;
    let i = 0;
    while (i < radioButton1.length) {
        if (radioButton1[i].checked) {
            value1 = +radioButton1[i].value;
        };
        i += 1;
    };
    i = 0;
    while (i < radioButton2.length) {
        if (radioButton2[i].checked) {
            value2 = +radioButton2[i].value;
        };
        i += 1;
    };
    console.log(value1, value2);
    document.querySelector(".descriptionDiv").remove();
    createMainDiv(value1, value2);
});
