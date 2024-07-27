// searching div and input 
// creating Elements
let serachDiv = document.createElement("div");

let searchInput = document.createElement("input");

document.body.appendChild(serachDiv);

serachDiv.appendChild(searchInput);

// css 
document.body.style.cssText = `
overflow-X:hidden;`
serachDiv.style.cssText = `
width:100%;
height:120px;
padding:10px;
display:flex;
align-items:center;
justify-content:flex-end;
margin-bottom:5px;
`
searchInput.style.cssText = `
height:40px;
width:220px;
border-radius:10px;
border-color:blue;
padding:20px;
font-size:20px;
outline:none;
margin-right:50px
`
searchInput.setAttribute("placeholder","Searching text");


let products = [
    {
        id:1,
        imgSource:"images/breadBasket.jpg",
        name:"bread basket",
        description:"Assortment of fresh baked fruit breads and muffins",
        price:5.5,
    },
    {
        id:2,
        imgSource:"images/belgianWaffles.jpg",
        name:"Belgain waffle",
        description:"Vanilla flavored butter with malted flour",
        price:7.5,
    },
    {
        id:3,
        imgSource:"images/scrambeledEggs.jpg",
        name:"scrambled eggs",
        description:"Scrambled eggs,roasted red pepper and garlic, with green onions",
        price:7.5,
    },
    {
        id:4,
        imgSource:"images/breadBasket.jpg",
        name:"bread basket",
        description:"Assortment of fresh baked fruit breads and muffins",
        price:5.5,
    },
    {
        id:5,
        imgSource:"images/belgianWaffles.jpg",
        name:"Belgain waffle",
        description:"Vanilla flavored butter with malted flour",
        price:7.5,
    },
    {
        id:6,
        imgSource:"images/scrambeledEggs.jpg",
        name:"scrambled eggs",
        description:"Scrambled eggs,roasted red pepper and garlic, with green onions",
        price:7.5,
    },
]

let cardsContainer = document.createElement("div");

cardsContainer.style.cssText = `
padding:1rem 5rem;
display:flex;
justify-content:center;
flex-wrap:wrap;`

function createProduct (prodImg,prodName,prodDesc,prodPrice) {
// cards 
// creating Elements 
let card = document.createElement("div");
let imageContainer = document.createElement("div");
let image = document.createElement("img");
let productName = document.createElement("h2");
let productDescription = document.createElement("p");
let price = document.createElement("span");
let button = document.createElement("button");

// appen Elements 
imageContainer.appendChild(image)
card.append(imageContainer,productName,productDescription,price,button);
cardsContainer.appendChild(card);

// elements innerhtml 
image.src = prodImg;
productName.innerText = prodName;
productDescription.innerText = prodDesc;
price.innerText = prodPrice;
button.innerText ="Buy";

// elements css
card.style.cssText =`
position:relative;
width:275px;
height:385px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
border:1px solid black;
margin-inline:20px;
margin-block:20px;
padding-block:30px;`

image.style.cssText =`
width:150px;
height:150px;
border-radius:50%;
`

productName.style.cssText = 
`text-transform:capitalize;
display:block;
width:100%;
height:30px;
line-height:30px;
margin-block:15px;
text-align:center;`

productDescription.style.cssText = 
`opacity:0.5;
margin-bottom:5px;
font-size:14px;
`

price.style.cssText = `
display:block:
opacity:0.5;
margin-block:5px;
font-size:15px;`

button.style.cssText =`
background-color:rgb(67 73 237);
color:white;
font-size:16px;
font-weight:600;
padding:5px 10px;
border-color:transparent;
border-radius:6px;
height:40px;
width:80px;
margin-top:25px;
position:absolute;
bottom:15px;
`
}

// loop on products array

products.forEach((product)=>{
    createProduct(product.imgSource,product.name,product.description,product.price)
});





document.body.appendChild(cardsContainer);



