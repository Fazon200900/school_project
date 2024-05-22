function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function checkNumber(number, notation) { // Функция для проверки числа на наличие лишних символов
    const values = [
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9', 'A', 'B',
        'C', 'D', 'E', 'F'
    ].slice(0, notation);
    for (let symbol of number.toString()) {
        if (!values.includes(symbol)) {
            return false;
        }
    }
    return true;
}


function decimalToBinary10(userNumber, systemNumber) { // Функция для перевода из других систем счисления в десятичную
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

function decimalToBinaryOther(userNumber, systemNumber1, systemNumber2) { // Функция для перевода из систем счисления в другие системы
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

function commonTask(sys1, sys2) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.classList.add("slide-top");
    document.body.appendChild(taskDiv);

    const num = getRandomInt(999999);

    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.innerHTML = `Переведите: ${decimalToBinaryOther(num, 10, sys1)}<sub>${sys1}</sub> = __________<sub>${sys2}</sub>`
    taskDiv.appendChild(taskText);

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Введи число"
    taskInput.classList.add("taskInput");
    taskDiv.appendChild(taskInput);

    const taskConfirm = document.createElement("button");
    taskConfirm.classList.add("taskConfirm");
    taskDiv.appendChild(taskConfirm);

    const span1 = document.createElement("span");
    span1.textContent = "Принять";
    taskConfirm.appendChild(span1);

    const taskBack = document.createElement("button");
    taskBack.classList.add("taskBack");
    taskDiv.appendChild(taskBack);

    const span2 = document.createElement("span");
    span2.textContent = "Назад";
    taskBack.appendChild(span2);

    taskConfirm.addEventListener("click", () => {
        if (taskInput.value == decimalToBinaryOther(num, 10, sys2)) {
            alert("Правильный ответ");
        }
        else {
            alert("Неверный ответ");
        }
    })
    taskBack.addEventListener("click", () => {
        document.querySelector(".tasksDiv").classList.remove("hide");
        taskDiv.remove();
    })
}

function leastTask(sys1, sys2) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.classList.add("slide-top");
    document.body.appendChild(taskDiv);

    const letters = "ABCDEF";
    let num = 0;
    const num1 = getRandomInt(999999);
    const num2 = getRandomInt(999999);
    const num3 = getRandomInt(999999);
    nums = [num1, num2, num3]
    let sum = 0
    for (let i of nums) {
        let sum2 = 0
        for (let j of String(decimalToBinaryOther(i, 10, sys2)).split("")) {
            if (letters.includes(j)) {
                sum2 += (10 + letters.indexOf(j))
            }
            else {
                sum2 += +j;
            }
        }
        if (sum2 > sum) {
            sum = sum2;
            num = decimalToBinaryOther(i, 10, sys1);
        }
    }
    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.innerHTML = `Напишите число сумма цифр, которого при переводе в ${sys2} систему будет наибольшей: ${decimalToBinaryOther(num1, 10, sys1)}<sub>${sys1}</sub>, ${decimalToBinaryOther(num2, 10, sys1)}<sub>${sys1}</sub>, ${decimalToBinaryOther(num3, 10, sys1)}<sub>${sys1}</sub>`
    taskDiv.appendChild(taskText);

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Введи число"
    taskInput.classList.add("taskInput");
    taskDiv.appendChild(taskInput);

    const taskConfirm = document.createElement("button");
    taskConfirm.classList.add("taskConfirm");
    taskDiv.appendChild(taskConfirm);

    const span1 = document.createElement("span");
    span1.textContent = "Принять";
    taskConfirm.appendChild(span1);

    const taskBack = document.createElement("button");
    taskBack.classList.add("taskBack");
    taskDiv.appendChild(taskBack);

    const span2 = document.createElement("span");
    span2.textContent = "Назад";
    taskBack.appendChild(span2);

    taskConfirm.addEventListener("click", () => {
        if (taskInput.value == num) {
            alert("Правильный ответ");
        }
        else {
            alert("Неверный ответ");
        }
    })
    taskBack.addEventListener("click", () => {
        document.querySelector(".tasksDiv").classList.remove("hide");
        taskDiv.remove();
    })
}

function greatestTask(sys1, sys2) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.classList.add("slide-top");
    document.body.appendChild(taskDiv);

    const letters = "ABCDEF";
    let num = 0;
    const num1 = getRandomInt(999999);
    const num2 = getRandomInt(999999);
    const num3 = getRandomInt(999999);
    nums = [num1, num2, num3]
    let sum = 999999;
    for (let i of nums) {
        let sum2 = 0
        for (let j of String(decimalToBinaryOther(i, 10, sys2)).split("")) {
            if (letters.includes(j)) {
                sum2 += (10 + letters.indexOf(j))
            }
            else {
                sum2 += +j;
            }
        }
        if (sum2 < sum) {
            sum = sum2;
            num = decimalToBinaryOther(i, 10, sys1);
        }
    }
    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.innerHTML = `Напишите число сумма цифр, которого при переводе в ${sys2} систему будет наименьшей: ${decimalToBinaryOther(num1, 10, sys1)}<sub>${sys1}</sub>, ${decimalToBinaryOther(num2, 10, sys1)}<sub>${sys1}</sub>, ${decimalToBinaryOther(num3, 10, sys1)}<sub>${sys1}</sub>`
    taskDiv.appendChild(taskText);

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Введи число"
    taskInput.classList.add("taskInput");
    taskDiv.appendChild(taskInput);

    const taskConfirm = document.createElement("button");
    taskConfirm.classList.add("taskConfirm");
    taskDiv.appendChild(taskConfirm);

    const span1 = document.createElement("span");
    span1.textContent = "Принять";
    taskConfirm.appendChild(span1);

    const taskBack = document.createElement("button");
    taskBack.classList.add("taskBack");
    taskDiv.appendChild(taskBack);

    const span2 = document.createElement("span");
    span2.textContent = "Назад";
    taskBack.appendChild(span2);

    taskConfirm.addEventListener("click", () => {
        if (taskInput.value == num) {
            alert("Правильный ответ");
        }
        else {
            alert("Неверный ответ");
        }
    })
    taskBack.addEventListener("click", () => {
        document.querySelector(".tasksDiv").classList.remove("hide");
        taskDiv.remove();
    })
}

function create_table_10(userNumber, systemNumber) { // Функция для создания таблицы при переводе из десятичной системы
    let letters = "ABCDEF";
    if (document.querySelector("table") != null) {
        document.querySelector("table").remove();
        document.querySelector(".answerP").remove();
    }

    let table = document.createElement("table");
    document.querySelector(".tableDiv").appendChild(table);

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


function createMainDiv(value1, value2) { // Функция для создания div с полем для ввода числа и ответом
    // value1 - 2
    // value2 - 8
    document.querySelector(".mainDiv").classList.remove("hide");
    document.querySelector(".backButton2").addEventListener("click", () => {
        document.querySelector(".mainInput").value = ""
        if (document.querySelector("table") != null) {
            document.querySelector("table").remove();
        }
        if (document.querySelector(".answerP") != null) {
            document.querySelector(".answerP").remove()
        }
        document.querySelector(".systemDiv").classList.remove("hide");
        document.querySelector(".mainDiv").classList.add("hide");
        document.querySelector(".tableDiv").classList.add("hide");
        value1 = 0;
        value2 = 0;
    });
    document.querySelector(".mainButton").addEventListener("click", () => {
        if (value1 !== value2) {
            console.log("Вызвалась функция createMainDiv")
            if (document.querySelector(".mainInput").value != "") {
                console.log(checkNumber(document.querySelector(".mainInput").value, value1));
                if (checkNumber(document.querySelector(".mainInput").value, value1) == true) {
                    const answer10 = document.createElement("p");
                    answer10.classList.add("answerP");
                    answer10.classList.add("slide-top");
                    answer10.innerHTML = `Результат перевода: ${document.querySelector(".mainInput").value}<sub>${value1}</sub> = ${decimalToBinaryOther(document.querySelector(".mainInput").value, value1, value2)}<sub>${value2}</sub>`;
                    document.querySelector(".mainDiv").appendChild(answer10);
                    create_table_10(decimalToBinaryOther(document.querySelector(".mainInput").value, value1, 10), value2);
                    document.querySelector(".tableDiv").classList.remove("hide");
                    document.querySelector(".mainInput").value = "";
                }
                else {
                    alert("Неверное число");
                    return false;
                }
            }
            else {
                alert("Введите число");
            }
        }
    });
}   

document.querySelector(".calculator").addEventListener("click", () => { // Проверка активированных радиобатоннов и запись их в переменную value1 и value2
    document.querySelector(".descriptionDiv").classList.add("hide");
    document.querySelector(".systemDiv").classList.remove("hide");
    document.querySelector(".systemButton").addEventListener("click", () => {
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
        document.querySelector(".systemDiv").classList.add("hide");
        createMainDiv(value1, value2);
    });
    document.querySelector(".backButton1").addEventListener("click", () => { // кнопка назад
        document.querySelector(".descriptionDiv").classList.remove("hide");
        document.querySelector(".systemDiv").classList.add("hide");
    });
});

document.querySelector(".tasks").addEventListener("click", () => {
    const select1 = document.getElementById("start");
    const select2 = document.getElementById("end");
    if (document.querySelector("table") != null) {
        document.querySelector("table").remove();
    }
    if (document.querySelector(".answerP") != null) {
        document.querySelector(".answerP").remove()
    }
    document.querySelector(".descriptionDiv").classList.add("hide");
    document.querySelector(".tasksDiv").classList.remove("hide");
    document.querySelector(".tasksButton").addEventListener("click", () => {
        const sys1 = +select1.value.slice(1, select1.value.length);
        const sys2 = +select2.value.slice(1, select2.value.length);
        console.log(sys1, sys2);
        if (sys1 !== sys2) {
            if (document.querySelectorAll(".taskDiv") != null) {
                for (let i of document.querySelectorAll(".taskDiv")) {
                    i.remove();
                }
            }
            const tasksNames = ["common", "least", "greatest"];
            task = tasksNames[getRandomInt(2)];
            document.querySelector(".tasksDiv").classList.add("hide");
            if (task == "common") {
                commonTask(sys1, sys2);
            }
            else if (task == "least") {
                leastTask(sys1, sys2);
            }

            else if (task == "greatest") {
                greatestTask(sys1, sys2);
            }
        }
    })
    document.querySelector(".backButton0").addEventListener("click", () => {
        document.querySelector(".descriptionDiv").classList.remove("hide");
        document.querySelector(".tasksDiv").classList.add("hide");
    })
});
