function initSettings() {
    var storage = window.localStorage;
    var slider = document.getElementById("slider");
    slider.value = storage.getItem("speedInterval");
    if (storage.getItem("checkboxChecked") == true) {
        document.getElementById("checkbox").checked = true;
    } 
    else {
        document.getElementById("checkbox").checked = false;
    }
}

function outputUpdate() {
    var storage = window.localStorage;
    var slider = document.getElementById("slider");
    storage.setItem("speedInterval", slider.value);
}

function stellarRotation() {
    var storage = window.localStorage;
    if (document.getElementById("checkbox").checked == false) {
        storage.setItem("checkboxChecked", true);
    } 
    else {        
        storage.setItem("checkboxChecked", false);
    }

}