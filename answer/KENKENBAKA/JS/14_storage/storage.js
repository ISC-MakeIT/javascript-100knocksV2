selectStorage = localStorage;
if (localStorage.getItem('key') == null) {
    localStorage.setItem("key", "0");
}

function goToPage1() {
    let status = document.getElementById("select").value;
    localStorage.setItem("key", status);
    location.href = "14_storage1.html";
}

function goToPage2() {
    let status = document.getElementById("select").value;
    localStorage.setItem("key", status);
    location.href = "14_storage2.html";
}

function getState() {
    console.log(localStorage.getItem('key'));
    let num = localStorage.getItem('key');
    elements = document.getElementById("select")
    elements.options[num].selected = true;
}
