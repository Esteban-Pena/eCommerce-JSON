const output = document.querySelector('.output');
console.log(output);
const url = 'porduct.json';
let myList = [];
let localData = localStorage.getItem('myList');
console.log(localData);

myList = JSON.parse(localStorage.getItem('myList'));
console.log(myList);
jsloader();

function jsloader(){
    fetch(url).then(rep => rep.json())
        .then((data) => {
            myList = data;
            maker();
            savetoStorage();
            dynamic(); 
        });
}

function maker(){
    if(document.body.contains(output)){
        output.innerHTML = " ";
        myList.forEach((el, index) => {
            makeList(el, index);
        });
    }
    else {
        dynamic();
    }
}

function makeList(item, index){ 
    const box = document.createElement('div');
    box.className = "box";
    const div = document.createElement('div');
    div.className = "text";
    const img = document.createElement("img");
    img.src = `${item.image}`;
    img.style.width = "375px";
    img.className = "image";
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    const p = document.createElement('p');
    p.innerHTML = "Price: " + item.Price;
    output.append(box);
    box.append(img);
    box.append(div);
    box.append(h2);
    box.append(p);
}

function savetoStorage() {
    console.log(myList);
    localStorage.setItem("myList", JSON.stringify(myList));
}

function dynamic() {
    var images = document.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++){
        console.log(images);
        images[i].addEventListener("click", function(){
            if (images[i] === images[i]){
                openInNewTab('product.html');
                localStorage.setItem("product", i);
            }
        });
        
    }
}

function openInNewTab(url){
    const open = window.open(url, '_self');
    open.focus();
}