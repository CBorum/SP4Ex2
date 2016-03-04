var divs = document.getElementsByTagName("div");
for (var i = 0; i < 3; i++) {
    var divStyle = divs[i].style;
    divStyle.backgroundColor = "blue";
}

function person(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
}

var persons = [
    new person("fn1", "ln1", "12345678", "abc1@example.com"),
    new person("fn2", "ln2", "12345678", "abc2@example.com"),
    new person("fn3", "ln3", "12345678", "abc3@example.com"),
    new person("fn4", "ln4", "12345678", "abc4@example.com")
];

var table = document.getElementById("table");

for (var i = 0; i < persons.length; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    td1.appendChild(document.createTextNode(persons[i].firstName));
    td2.appendChild(document.createTextNode(persons[i].lastName));
    td3.appendChild(document.createTextNode(persons[i].phone));
    td4.appendChild(document.createTextNode(persons[i].email));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");

div1.onclick = function () {
    console.log("clicked the first div...");
};
div2.onclick = function () {
    console.log("clicked the second div...");
};
div3.onclick = function () {
    console.log("clicked the third div...");
};
div4.onmouseover = function () {
    div4.appendChild(document.createTextNode('a'));
};
div5.onmouseover = function () {
    div5.appendChild(document.createTextNode('b'));
};
div6.onmouseover = function () {
    div6.appendChild(document.createTextNode('xD'));
};
div4.onmouseout = function () {
    while (div4.firstChild) {
        div4.removeChild(div4.firstChild);
    }
};
div5.onmouseout = function () {
    while (div5.firstChild) {
        div5.removeChild(div5.firstChild);
    }
};
div6.onmouseout = function () {
    while (div6.firstChild) {
        div6.removeChild(div6.firstChild);
    }
};

function processForm(formValues) {
    var table = document.getElementById("tableForForm");
    var tr = document.createElement('tr');
    var tda = document.createElement('td');
    tda.appendChild(document.createTextNode(document.getElementById("tInput").value));
    tr.appendChild(tda);
    var radio = document.getElementsByName("rInput");
    for (var i = 0; i < radio.length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(radio[i].checked));
        tr.appendChild(td);
    }
    var checked = document.getElementsByName("cInput");
    for (var i = 0; i < checked.length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(checked[i].checked));
        tr.appendChild(td);
    }
    table.appendChild(tr);
    return false;
}

var listO = document.getElementsByTagName('li');
for (var i = 0; i < listO.length; i++) {
    listO[i].onclick = function (element) {
        console.log("Greetings " + element.target.innerHTML);
    };
}

var lastWasOperand = false;
var calcSym = "";
var firstNumber = 0;

function appendNumber(number) {
    var display = document.getElementById('display');
    if (lastWasOperand) {
        display.innerHTML = display.innerHTML + number;
    } else {
        display.innerHTML = number;
        lastWasOperand = true;
    }
}

function calcFunc(symbol) {
    var display = document.getElementById('display');
    if (lastWasOperand) {
        firstNumber = parseFloat(display.innerHTML);
    }
    display.innerHTML = symbol;
    calcSym = symbol;
    lastWasOperand = false;
}

function equal() {
    var display = document.getElementById('display');
    res = 0;
    switch (calcSym) {
        case "+":
            res = firstNumber + parseFloat(display.innerHTML);
            break;
        case "-":
            res = firstNumber - parseFloat(display.innerHTML);
            break;
        case "*":
            res = firstNumber * parseFloat(display.innerHTML);
            break;
        case "/":
            res = firstNumber / parseFloat(display.innerHTML);
            break;
    }
    display.innerHTML = res;
    lastWasOperand = false;
}

var divs = document.getElementsByClassName('t1');
for (var i = 0; i < divs.length; i++) {
    divs[i].onclick = function (element) {
        switch (element.target.id) {
            case "multiply":
                calcFunc("*");
                break;
            case "divide":
                calcFunc("/");
                break;
            case "minus":
                calcFunc("-");
                break;
            case "plus":
                calcFunc("+");
                break;
            case "comma":
                appendNumber(".");
                break;
            case "equal":
                equal();
                break;
            default:
                appendNumber(element.target.innerHTML);
                break;
        }
    };
}