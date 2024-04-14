document.addEventListener("DOMContentLoaded", function () {
    const addDiningPriceBtn = document.getElementById("addDiningPriceBtn");
    const addTogoPriceBtn = document.getElementById("addTogoPriceBtn");
    const changeDiningPriceBtn = document.getElementById("changeDiningPriceBtn");
    const changeTogoPriceBtn = document.getElementById("changeTogoPriceBtn");
    const diningIndex = document.getElementById("diningIndex");
    const togoIndex = document.getElementById("togoIndex");
    const changeDiningPriceInput = document.getElementById("changeDiningPrice");
    const changeTogoPriceInput = document.getElementById("changeTogoPrice");
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
    let total = 0;
    let diningTotal = 0;
    let togoTotal = 0;

    addDiningPriceBtn.addEventListener("click", AddDiningPrice);
    diningPriceInput.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            AddDiningPrice();
        }
    });

    addTogoPriceBtn.addEventListener("click", AddTogoPrice);
    togoPriceInput.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            AddTogoPrice();
        }
    });

    changeDiningPriceBtn.addEventListener("click", ChangeDiningPrice);
    changeDiningPriceInput.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            ChangeDiningPrice();
        }
    });

    changeTogoPriceBtn.addEventListener("click", ChangeTogoPrice);
    changeTogoPriceInput.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            ChangeTogoPrice();
        }
    });

    function AddDiningPrice() {
        let price = parseFloat(diningPriceInput.value);
        if (isNaN(price)) return;

        diningTrans.push(price);
        let id = diningTrans.length;

        total += price;
        totalLabel.innerHTML = total.toFixed(2);

        let newRow = `
            <tr>
                <td>${id}</td>
                <td>${price.toFixed(2)}</td>
                <td>
                    <button class="myBtn">Delete</button>
                </td>
                <td>
                    <button class="myBtn">Update</button>
                </td>
            </tr>`;
        diningTable.innerHTML += newRow;

        demo.innerHTML = `Adding Dining ${id} : ${price.toFixed(2)}`;
        diningTotal += price;
        diningTotalLabel.innerHTML = diningTotal.toFixed(2);
    }

    function AddTogoPrice() {
        let price = parseFloat(togoPriceInput.value);
        if (isNaN(price)) return;

        togoTrans.push(price);
        let id = togoTrans.length;

        total += price;
        totalLabel.innerHTML = total.toFixed(2);

        let newRow = `
            <tr>
                <td>${id}</td>
                <td>${price.toFixed(2)}</td>
                <td>
                    <button class="myBtn">Delete</button>
                </td>
                <td>
                    <button class="myBtn">Update</button>
                </td>
            </tr>`;
        togoTable.innerHTML += newRow;

        demo.innerHTML = `Adding Togo ${id} : ${price.toFixed(2)}`;
        togoTotal += price;
        togoTotalLabel.innerHTML = togoTotal.toFixed(2);
    }

    function ChangeDiningPrice() {
        let index = parseInt(diningIndex.value);
        if (index < 1 || index > diningTrans.length) return;

        let newPrice = parseFloat(changeDiningPriceInput.value);
        let oldPrice = diningTrans[index - 1];
        if (isNaN(newPrice) || newPrice === oldPrice) return;

        diningTrans[index - 1] = newPrice;
        diningTable.rows[index].cells[1].innerHTML = newPrice.toFixed(2);

        total = total - oldPrice + newPrice;
        totalLabel.innerHTML = total.toFixed(2);

        demo.innerHTML = `Update Dining #${index}, $${oldPrice.toFixed(2)} -> $${newPrice.toFixed(2)}`;
        diningTotal += newPrice - oldPrice;
        diningTotalLabel.innerHTML = diningTotal.toFixed(2);
    }

    function ChangeTogoPrice() {
        let index = parseInt(togoIndex.value);
        if (index < 1 || index > togoTrans.length) return;

        let newPrice = parseFloat(changeTogoPriceInput.value);
        let oldPrice = togoTrans[index - 1];
        if (isNaN(newPrice) || newPrice === oldPrice) return;

        togoTrans[index - 1] = newPrice;
        togoTable.rows[index].cells[1].innerHTML = newPrice.toFixed(2);

        total = total - oldPrice + newPrice;
        totalLabel.innerHTML = total.toFixed(2);

        demo.innerHTML = `Update Togo #${index}, $${oldPrice.toFixed(2)} -> $${newPrice.toFixed(2)}`;
        togoTotal += newPrice - oldPrice;
        togoTotalLabel.innerHTML = togoTotal.toFixed(2);
    }



    // Event listener for "Delete" button in diningTable
    diningTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            let rowIndex = event.target.closest("tr").rowIndex;
            let deletedPrice = parseFloat(diningTable.rows[rowIndex].cells[1].textContent);
            total -= deletedPrice;
            totalLabel.innerHTML = total.toFixed(2);
            diningTotal -= deletedPrice;
            diningTotalLabel.innerHTML = diningTotal.toFixed(2);
            diningTrans.splice(rowIndex - 1, 1);
            diningTable.deleteRow(rowIndex);
            updateDiningTable();
        }
    });

    // Event listener for "Delete" button in togoTable
    togoTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            let rowIndex = event.target.closest("tr").rowIndex;
            let deletedPrice = parseFloat(togoTable.rows[rowIndex].cells[1].textContent);
            total -= deletedPrice;
            totalLabel.innerHTML = total.toFixed(2);
            togoTotal -= deletedPrice;
            togoTotalLabel.innerHTML = togoTotal.toFixed(2);
            togoTrans.splice(rowIndex - 1, 1);
            togoTable.deleteRow(rowIndex);
            updateTogoTable();
        }
    });

    // Function to update dining table after deletion
    function updateDiningTable() {
        let rows = diningTable.rows;
        for (let i = 2; i < rows.length; i++) {
            rows[i].cells[0].innerHTML = i - 1;
        }
    }

    // Function to update togo table after deletion
    function updateTogoTable() {
        let rows = togoTable.rows;
        for (let i = 2; i < rows.length; i++) {
            rows[i].cells[0].innerHTML = i - 1;
        }
    }

});
