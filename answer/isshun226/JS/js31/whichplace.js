const data = [];
function sort(array) {
    array.sort((a, b) => (a < b ? -1 : 1));
}

function randomtable(orderlength, max) {
    while (data.length < orderlength) {
        let random = Math.floor(Math.random() * (max - 1 + 1) + 1);
        if (data.includes(random) == false) {
            data.push(random);
        }
    }
    sort(data);
    return data;
}
function addTable(random) {
    const main = document.getElementById('main');
    const table = document.createElement('table');
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.textContent = random[j * 5 + i];
            td.addEventListener('click', () => alert(td.textContent));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    main.appendChild(table);
}
addTable(randomtable(25, 75));