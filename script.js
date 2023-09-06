
const jsonData = [
    {
        "id": "1",
        "name": "Lura Senger",
        "email": "Xander_Collier@yahoo.com"
      },
      {
        "id": "2",
        "name": "Wilburn Weber",
        "email": "Bennett_Kreiger11@yahoo.com"
      },
      {
        "id": "3",
        "name": "Tyrique Hahn",
        "email": "Juston.Altenwerth@yahoo.com"
      },
      {
        "id": "4",
        "name": "Lenny Bailey",
        "email": "Guiseppe_Hegmann@yahoo.com"
      },
      {
        "id": "5",
        "name": "Vladimir Keeling",
        "email": "Louisa_Walsh18@hotmail.com"
      },
      {
        "id": "6",
        "name": "Kellie Crona",
        "email": "Chandler_Abernathy@yahoo.com"
      },
      {
        "id": "7",
        "name": "Carolina White",
        "email": "Royal50@hotmail.com"
      },
      {
        "id": "8",
        "name": "Alfredo Conn",
        "email": "Clarabelle34@hotmail.com"
      },
      {
        "id": "9",
        "name": "Stan Shanahan",
        "email": "Lamar.McClure@hotmail.com"
      },
      {
        "id": "10",
        "name": "Marvin Fay",
        "email": "Osbaldo58@hotmail.com"
      },
];

const itemsPerPage = 1;
const tableContainer = document.getElementById("table-container");
const currentPageLabel = document.getElementById("current-page");
const firstPageButton = document.getElementById("first");
const previousPageButton = document.getElementById("previous");
const nextPageButton = document.getElementById("next");
const lastPageButton = document.getElementById("last");

let currentPage = 1;

function createTablePage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const table = document.createElement("table");
    table.classList.add("table");

    const thead = document.createElement("thead");
    if (jsonData.length > 0) {
        const headerRow = document.createElement("tr");
        for (const key in jsonData[0]) {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);
    }

    const tbody = document.createElement("tbody");
    for (let i = startIndex; i < endIndex && i < jsonData.length; i++) {
        const rowData = jsonData[i];
        const row = document.createElement("tr");
        for (const key in rowData) {
            const cell = document.createElement("td");
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

function updatePaginationButtons() {
    firstPageButton.disabled = currentPage === 1;
    previousPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(jsonData.length / itemsPerPage);
    lastPageButton.disabled = currentPage === 10;
}

firstPageButton.addEventListener("click", () => {
    currentPage = 1;
    currentPageLabel.textContent = currentPage;
    createTablePage(currentPage);
    updatePaginationButtons();
});

lastPageButton.addEventListener("click", () => {
    currentPage = 10;
    currentPageLabel.textContent = currentPage;
    createTablePage(currentPage);
    updatePaginationButtons();
});

previousPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        currentPageLabel.textContent = currentPage;
        createTablePage(currentPage);
        updatePaginationButtons();
    }
});

nextPageButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(jsonData.length / itemsPerPage)) {
        currentPage++;
        currentPageLabel.textContent = currentPage;
        createTablePage(currentPage);
        updatePaginationButtons();
    }
});

createTablePage(currentPage);
updatePaginationButtons();