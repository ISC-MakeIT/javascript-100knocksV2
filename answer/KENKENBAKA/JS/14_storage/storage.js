selectStorage = sessionStorage;
if (selectStorage.getItem('key') == null) {
    selectStorage.setItem("key", "0");
}

function goToPage1() {
    let status = document.getElementById("select").value;
    selectStorage.setItem("key", status);
    location.href = "14_storage1.html";
}

function goToPage2() {
    let status = document.getElementById("select").value;
    selectStorage.setItem("key", status);
    location.href = "14_storage2.html";
}

function getState() {
    console.log(selectStorage.getItem('key'));
    let num = selectStorage.getItem('key');
    elements = document.getElementById("select")
    elements.options[num].selected = true;
}
