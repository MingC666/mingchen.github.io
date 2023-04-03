var addDiningPriceBtn = document.getElementById("addDiningPriceBtn");
var addTogoPriceBtn = document.getElementById("addTogoPriceBtn");
var changeDiningPriceBtn = document.getElementById("changeDiningPriceBtn");
var changeTogoPriceBtn = document.getElementById("changeTogoPriceBtn");
var diningIndex = document.getElementById("diningIndex");
var togoIndex = document.getElementById("togoIndex");
var changeDiningPrice = document.getElementById("changeDiningPrice");
var diningPriceInput = document.getElementById("diningPriceInput");
var togoPriceInput = document.getElementById("togoPriceInput");
var changeTogoPrice = document.getElementById("changeTogoPrice");
var deleteDiningTransBtn = document.getElementById("deleteDiningTransBtn")
var deleteTogoTransBtn = document.getElementById("deleteTogoTransBtn")
var diningTotalLabel = document.getElementById("diningTotalLabel")
var togoTotalLabel = document.getElementById("togoTotalLabel")
const DEMO = document.getElementById("demo")

const diningTrans = []
const togoTrans = []
const totalLabel = document.getElementById("totalLabel");
const diningTable = document.getElementById("diningTable");
const togoTable = document.getElementById("togoTable");
var togoTotal = 0
var diningTotal = 0
var total = 0;

//////////////////
/// Add Price  ///
/////////////////
/////Dining
addDiningPriceBtn.addEventListener("click", AddDiningPrice);
// add keyboard 'Enter' functionality
diningPriceInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        AddDiningPrice();
    }
});
/// To go
addTogoPriceBtn.addEventListener("click", AddTogoPrice);
// add keyboard 'Enter' functionality
togoPriceInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        AddTogoPrice();
    }
});

//////////////////////
/// Chaning Price ///
/////////////////////
/// Dining
changeDiningPriceBtn.addEventListener("click", ChangeDiningPrice);
document.getElementById("changeDiningPrice").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        ChangeDiningPrice()
    }
});
/// Togo
changeTogoPriceBtn.addEventListener("click", ChangeTogoPrice)
// document.getElementById("chhangeTogoPrice").addEventListener("keydwon", function (e) {
//     if (e.code === "Enter") {
//         ChangeTogoPrice()
//     }
// })

//////////////////////
/// Delete Price ////
/////////////////////
deleteDiningTransBtn.addEventListener("click", function () {
    console.log("deleting")
    let index = parseInt(diningIndex.value);
    if (index < 1 || index > diningTrans.length || isNaN(index)) return
    console.log(diningTrans)
    let delete_trans = deleteTrans(diningTrans, index - 1)
    console.log(diningTrans)
    // re-showing the data
    var s = `
                <tr>
                    <td>Dining</td>
                </tr>
                <tr>
                    <td style="width:50%">Id</td>
                    <td style="width:30%">Price</td>
                </tr>`
    for (let i = 0; i < diningTrans.length; ++i) {
        s += `
            <tr>
                <td style="width:5%">${i + 1}</td>
                <td style="width:30%">${diningTrans[i]}</td>
            </tr>`;
    }
    diningTable.innerHTML = s;
    diningTotal -= delete_trans
    total -= delete_trans
    diningTotalLabel.innerHTML = diningTotal
    totalLabel.innerHTML = total
    DEMO.innerHTML = `Delete Dining transaction ${index} $${delete_trans}`
})

deleteTogoTransBtn.addEventListener("click", function () {
    let index = parseInt(togoIndex.value);
    if (index < 1 || index > togoTrans.length || isNaN(index)) return
    let delete_trans = deleteTrans(togoTrans, index - 1)
    // re-showing the data
    var s = `
                <tr>
                    <td>To go</td>
                </tr>
                <tr>
                    <td style="width:50%">Id</td>
                    <td style="width:30%">Price</td>
                </tr>`
        `<tr>
                <td> ${transac.id} </td>
                <td> <input class="amountInput" value=${transac.amount}></input> </td>
                <td><button data-id=${transac.id} class='update myBtn'> Update </button></td>
                <td><button data-id=${transac.id} class='remove myBtn'> Delete-X </button></td>
            </tr>`
    for (let i = 0; i < togoTrans.length; ++i) {
        s += `
            <tr>
                <td style="width:5%">${i + 1}</td>
                <td style="width:30%">${togoTrans[i]}</td>
            </tr>`;
    }
    togoTable.innerHTML = s;
    total -= delete_trans
    togoTotal -= delete_trans
    togoTotalLabel.innerHTML = togoTotal
    totalLabel.innerHTML = total
    DEMO.innerHTML = `删除堂吃 ${index} $${delete_trans}`
})

//////////////////////
///// Functions /////
/////////////////////
// add price and calculate total, then display int web
function AddDiningPrice() {
    let price = parseFloat(diningPriceInput.value);
    if (isNaN(price)) return;
    // make 'price' only have two decimal point
    // price = Math.floor(price * 100) / 100;

    diningTrans.push(price)
    let id = diningTrans.length
    // make 'price' only have two decimal point
    // total = Math.floor(total * 100) / 100;
    total += price
    let newrow = `
                <tr>
                    <td>${id}</td>
                    <td><input class="amountInput" value=${price} /></td>
                    <td>
                        <button class="myBtn">Delete</button>
                    </td>
                    <td>
                        <button class="myBtn">Update</button>
                    </td>
                </tr>
                `;

    diningTable.innerHTML += newrow;
    totalLabel.innerHTML = total;
    document.getElementById("demo").innerHTML = `Adding Dining ${id} : ${price}`
    diningTotal += price
    diningTotalLabel.innerHTML = diningTotal
}

function AddTogoPrice() {
    let price = parseFloat(togoPriceInput.value);
    if (isNaN(price)) return;
    // make 'price' only have two decimal point
    togoTrans.push(price)
    let id = togoTrans.length
    total += price
    let newrow = `
                <tr>
                    <td>${id}</td>
                    <td><input class="amountInput" value=${price} /></td>
                    <td>
                        <button class="myBtn">Delete</button>
                    </td>
                    <td>
                        <button class="myBtn">Update</button>
                    </td>
                </tr>
                `;

    togoTable.innerHTML += newrow;
    totalLabel.innerHTML = total;
    document.getElementById("demo").innerHTML = `Adding Togo ${id} : ${price}`
    togoTotal += price
    togoTotalLabel.innerHTML = togoTotal
}

/////////////////////
/// Chaning Dining Price ///
function ChangeDiningPrice() {
    let index = parseInt(diningIndex.value);
    if (index < 1 || index > diningTrans.length) return
    let newprice = parseFloat(changeDiningPrice.value);
    let oldprice = diningTrans[index - 1]
    if (newprice === oldprice || isNaN(index) || isNaN(newprice)) return
    diningTrans[index - 1] = newprice

    // diningTable.rows[index + 1].cells[1].innerHTML = newprice.toFixed(2);
    diningTable.rows[index + 1].cells[1].innerHTML = newprice
    // if (totol == null) total = 0;

    total = total - oldprice + newprice;
    // total = Math.floor(total * 100) / 100;
    totalLabel.innerHTML = total;
    DEMO.innerHTML = `Update Dining #${index} , $${oldprice} -> $${newprice}`
    diningTotal += newprice - oldprice
    diningTotalLabel.innerHTML = diningTotal
}
/////////////////////
/// Chaning Togo Price ///
function ChangeTogoPrice() {
    let index = parseInt(togoIndex.value);
    if (index < 1 || index > togoTrans.length) return
    let newprice = parseFloat(changeTogoPrice.value);
    let oldprice = togoTrans[index - 1]
    if (newprice === oldprice || isNaN(index) || isNaN(newprice)) return
    togoTrans[index - 1] = newprice

    // diningTable.rows[index + 1].cells[1].innerHTML = newprice.toFixed(2);
    togoTable.rows[index + 1].cells[1].innerHTML = newprice
    // if (totol == null) total = 0;

    total = total - oldprice + newprice;
    // total = Math.floor(total * 100) / 100;
    totalLabel.innerHTML = total;

    document.getElementById("demo").innerHTML = `Update Togo #${index}, $${oldprice} -> $${newprice}`
    togoTotal += newprice - oldprice
    togoTotalLabel.innerHTML = togoTotal
}


// delete a transaction from array
function deleteTrans(arr, index) {
    if (index < 0 || index > arr.length - 1) return

    var delete_price = arr[index]
    var l = arr.length - 1
    for (var i = index; i < l; ++i) {
        arr[i] = arr[i + 1];
    }
    arr.length = l
    return delete_price
}