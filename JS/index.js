var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var searchInput = document.getElementById("searchInput");
var tBody = document.getElementById("tBody");
var currentIndex;
var productsArr = [];
if (JSON.parse(localStorage.getItem("productsArr")) != null) {
  productsArr = JSON.parse(localStorage.getItem("productsArr"));
}
displayProducts();

function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };

  if (currentIndex == null) {
    productsArr.push(product);
  } else {
    productsArr[currentIndex] = product;
    currentIndex = null;
  }

  localStorage.setItem("productsArr", JSON.stringify(productsArr));

  displayProducts();
  clearForm();
  document.getElementById("addBtn").innerHTML = "Add Product";
}

function displayProducts() {
  var searchTerm = searchInput.value;

  var trs = "";

  for (var i = 0; i < productsArr.length; i++) {
    if (productsArr[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
      trs += `
                    <tr>
                        <td>${i}</td>
                        <td>${productsArr[i].name}</td>
                        <td>${productsArr[i].price}</td>
                        <td>${productsArr[i].category}</td>
                        <td>${productsArr[i].desc}</td>
                        <td>
                            <button onclick="patchProduct(${i})" class="btn btn-outline-warning">Update</button>
                        </td>
                        <td>
                            <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
`;
    }
  }
    tBody.innerHTML = trs;
}

function deleteProduct(index) {
  productsArr.splice(index, 1);
  localStorage.setItem("productsArr", JSON.stringify(productsArr));
  displayProducts();
}

function patchProduct(index) {
  currentIndex = index;
  productNameInput.value = productsArr[index].name;
  productPriceInput.value = productsArr[index].price;
  productCategoryInput.value = productsArr[index].category;
  productDescInput.value = productsArr[index].desc;
  document.getElementById("addBtn").innerHTML = "Update Product";
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}


