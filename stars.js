var deg = 0;

function initApp() {

    var storage = window.localStorage;
    var canvas = document.getElementById("canvas");
    if (storage.getItem("checkboxChecked") == null) {
        storage.setItem("checkboxChecked", true);
    }
    if (storage.getItem("speedInterval") == null) {
        storage.setItem("speedInterval", 3000);
    }
    canvas.width = window.screen.availWidth * 1.5;
    canvas.height = window.screen.availHeight * 1.5;
}

function rotateStars() {
    deg = deg + .01;
    var localDeg = deg;
    document.getElementById("canvas").style = 'transform:rotate('+localDeg+'deg);-ms-transform:rotate('+localDeg+'deg);-webkit-transform:rotate('+localDeg+'deg);';
}

function initStars() {
    var storage = window.localStorage;
    updateStarfield();
    setInterval(perform, storage.getItem("speedInterval"));
    if (storage.getItem("checkboxChecked") == true) {
        setInterval(rotateStars, 10);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function perform() {
    var canvas = document.getElementById("canvas");
    Velocity(canvas, "fadeOut", {delay: 0, duration: 500});
    await sleep(500);
    updateStarfield();
    Velocity(canvas, "fadeIn", {duration: 500});
    }

function updateStarfield() {

    var starTable = document.getElementById('canvas');

    var totalRows = 0;
    var totalColumns = 0;
    var max = 30;
    var min = 1;
    totalRows = Math.round(window.screen.availHeight / 44);
    totalColumns = Math.round(window.screen.availWidth / 45);
    var tbl = document.createElement("table");
    tbl.setAttribute('cellpadding', '0');
    tbl.setAttribute('cellspacing', '0');
    tbl.setAttribute('border', '0');

    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");
        for (var c = 0; c < totalColumns; c++) {
            var cell = document.createElement("td");
            var starImg = document.createElement("img");
            starImg.src = 'img/' + getRandomInt(min, max) + '.png';
            starImg.setAttribute('style', 'display: block');
            var degVar = getRandomInt(0, 3);
            if (degVar == 0) {
                starImg.style = 'transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);';
            } else if (degVar == 1) {
                starImg.style = 'transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);';
            } else if (degVar == 2) {
                starImg.style = 'transform:rotate(270deg);-ms-transform:rotate(270deg);-webkit-transform:rotate(270deg);';
            }

            cell.appendChild(starImg);
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    starTable.innerHTML = '';
    starTable.appendChild(tbl);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
