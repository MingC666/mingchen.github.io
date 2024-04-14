document.addEventListener("DOMContentLoaded", function () {
    const addDiningPriceBtn = document.getElementById("addDiningPriceBtn");
    const addTogoPriceBtn = document.getElementById("addTogoPriceBtn");
    const diningPriceInput = document.getElementById("diningPriceInput");
    const togoPriceInput = document.getElementById("togoPriceInput");
    const demo = document.getElementById("demo");
    const totalLabel = document.getElementById("totalLabel");
    const diningTotalLabel = document.getElementById("diningTotalLabel");
    const togoTotalLabel = document.getElementById("togoTotalLabel");
    const diningTable = document.getElementById("diningTable");
    const togoTable = document.getElementById("togoTable");

    const diningTrans = [];
    const togoTrans = [];

    // Add event listeners for adding dining and togo prices
    addDiningPriceBtn.addEventListener("click", AddDiningPrice);
    addTogoPriceBtn.addEventListener("click", AddTogoPrice);

    // Function to add dining price
    function AddDiningPrice() {
        let price = parseFloat(diningPriceInput.value);
        if (isNaN(price)) return;

        AddTransaction(diningTrans, price, diningTable, diningTotalLabel, "Dining");
        CalculateTotal();
    }

    // Function to add togo price
    function AddTogoPrice() {
        let price = parseFloat(togoPriceInput.value);
        if (isNaN(price)) return;

        AddTransaction(togoTrans, price, togoTable, togoTotalLabel, "Togo");
        CalculateTotal();
    }

    // Function to add transaction
    // Function to add transaction
    function AddTransaction(transArray, price, table, totalLabel, totalType) {
        let id = transArray.length + 1;
        transArray.push(price);

        // Add row to table
        let newRow = `
            <tr>
                <td>${totalType}</td>
                <td>${id}</td>
                <td contenteditable="true">${price.toFixed(2)}</td>
                <td>
                    <button class="deleteBtn myBtn">Delete</button>
                </td>
                <td>
                    <button class="updateBtn myBtn">Update</button>
                </td>
            </tr>`;
        table.innerHTML += newRow;
    }


    // Calculate Total
    function CalculateTotal() {
        let diningTotal = 0;
        let togoTotal = 0;

        // Calculate dining total
        for (let i = 1; i < diningTable.rows.length; i++) {
            let price = parseFloat(diningTable.rows[i].cells[2].textContent);
            if (!isNaN(price)) {
                diningTotal += price;
            }
        }
        diningTotalLabel.innerHTML = diningTotal.toFixed(2);

        // Calculate togo total
        for (let i = 1; i < togoTable.rows.length; i++) {
            let price = parseFloat(togoTable.rows[i].cells[2].textContent);
            if (!isNaN(price)) {
                togoTotal += price;
            }
        }
        togoTotalLabel.innerHTML = togoTotal.toFixed(2);

        // Calculate total
        totalLabel.innerHTML = (diningTotal + togoTotal).toFixed(2);
    }


    // Event delegation for "Delete" and "Update" buttons in dining and togo tables
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            DeleteTransaction(event);
            CalculateTotal();
        } else if (event.target.classList.contains("updateBtn")) {
            UpdateTransaction(event);
            CalculateTotal();
        }
    });

    // Function to delete transaction
    function DeleteTransaction(event) {
        let rowIndex = event.target.closest("tr").rowIndex;
        let table = event.target.closest("table");
        let deletedPrice = parseFloat(table.rows[rowIndex].cells[2].textContent);

        if (table.id === "diningTable") {
            diningTrans.splice(rowIndex - 1, 1);
        } else if (table.id === "togoTable") {
            togoTrans.splice(rowIndex - 1, 1);
        }

        table.deleteRow(rowIndex);
        updateIds(table);
    }

    // Function to update IDs in the table
    function updateIds(table) {
        let rows = table.rows;
        for (let i = 1; i < rows.length; i++) {
            rows[i].cells[1].innerHTML = i;
        }
    }

    // Event listener for "Update" button
    function UpdateTransaction(event) {
        let rowIndex = event.target.closest("tr").rowIndex;
        let table = event.target.closest("table");
        let cell = table.rows[rowIndex].cells[2];
        let newPrice = parseFloat(cell.textContent);
        if (isNaN(newPrice)) return;

        cell.setAttribute("data-old", newPrice);

        demo.innerHTML = `Update ${table.id === "diningTable" ? "Dining" : "Togo"} #${rowIndex}, $${oldPrice.toFixed(2)} -> $${newPrice.toFixed(2)}`;
    }
});
