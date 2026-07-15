var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescInput = document.getElementById("productDescInput")


var productsArr=[];

function addProduct(){

    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,

    }

    productsArr.push(product)
    console.log(productsArr)
}




