//https://kea-alt-del.dk/t7/api/products/1163
fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((Response) => Response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".name ").textContent = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
}
