fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produkt udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  //produkt på tilbud
  if (product.discount) {
    let pris = (product.price / 100) * (100 - product.discount);
    let prisAfrund = Math.round(pris);
    copy.querySelector(".price").textContent = prisAfrund + " - " + " " + product.discount + "%";
  } else copy.querySelector(".price").textContent = product.price;

  //appende
  document.querySelector(".article").appendChild(copy);
}
