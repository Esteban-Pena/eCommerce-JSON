var item = localStorage.getItem("product");
console.log(item);
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
var i = Number(item);

var product = document.querySelector(".product");

function makeProduct(){
    var item = myList[i];
    const image = document.createElement('div');
    image.className = "images";
    const side = document.createElement('div');
    side.className = "side";
    const img = document.createElement("img");
    img.src = `${item.image}`;
    img.className = "image";
    img.style.width = "700px";
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    const p = document.createElement('p');
    p.innerHTML = "Price: " + item.Price;
    const des = document.createElement('p');
    des.innerHTML = item.description;
    const butn = document.createElement('button');
    butn.innerHTML = `Add to Cart`
    product.append(image);
    product.append(side);
    image.append(img);
    side.append(h2);
    side.append(p);
    side.append(des);
    side.append(butn);
}
makeProduct();