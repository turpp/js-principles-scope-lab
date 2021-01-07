// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
    console.log(customerName)
    customerName=customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Dick"
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Won't Work"
}
