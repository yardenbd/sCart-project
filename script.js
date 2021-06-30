let productsAr = [
  { id: 0, type: "adidas", model: "ultraboost 21 ", price: 180, count: 0 , img :"images/adidasultra.jpg"},
  { id: 1, type: "nike", model: "pegasus 37", price: 150, count: 0 ,img :"images/pegasus37.jpg"},
  { id: 2, type: "new balance", model: "1080", price: 200, count: 0 , img :"images/nb1080.jpg"},
  { id: 3, type: "adidas", model: "ultraboost 20", price: 170, count: 0, img :"images/ultraboost2020.jpg"},
  { id: 4, type: "nike", model: "recat vision", price: 140, count: 0 , img :"images/reactvision.jpg"},
  { id: 5, type: "saucony", model: "trimph 18", price: 160, count: 0 , img :"images/saucony.jpg"},
  { id: 6, type: "adidas", model: "ultraboost 20", price: 180, count: 0 , img :"images/ultraboostblack.jpg"},
  { id: 7, type: "new balance", model: "880", price: 150, count: 0 , img :"images/nb880.jpg"},
  { id: 8, type: "adidas", model: "T shirt Black", price: 40, count: 0 , img :"images/adidasTshirtBlack.jpg"},
  { id: 9, type: "adidas", model: "T shirt grey", price: 40, count: 0, img :"images/adidasTshirtgray.jpg" },
  { id: 10, type: "adidas", model: "T shirt white", price: 40, count: 0, img :"images/adidasTshirtwhite.jpg" },
  { id: 11, type: "nike", model: "T shirt blue", price: 40, count: 0 , img :"images/nikeTshirtblue.jpg"},
  { id: 12, type: "jordan", model: "T shirt red", price: 40, count: 0 , img :"images/nikeJordan.jpg"},
  { id: 13, type: "jordan", model: "shorts white", price: 35, count: 0 ,img:"images/jordanshorts.jpg" },
  { id: 14, type: "adidas", model: "shorts black", price: 35, count: 0 ,img:"images/adidasShorts.jpg" },
  { id: 15, type: "nike", model: "shorts black", price: 35, count: 0, img :"images/nikeshorts.jpg" },
  { id: 16, type: "energym", model: "dumbells", price: 70, count: 0, img :"images/dumbells.jpg"},
  { id: 17, type: "hi-tec", model: "gloves", price: 15, count: 0, img :"images/gloves.jpg" },
  { id: 18, type: "reebok", model: "skipping rope", price: 20, count: 0 , img :"images/skippingrope.jpg"},
  { id: 19, type: "hi-tec", model: "weight ball", price: 30, count: 0, img :"images/wheigtball.jpg" },
  { id: 20, type: "galSports", model: "yoga ball", price: 30, count: 0 , img :"images/yogaball.jpg"},
  { id: 21, type: "nike", model: "headband", price: 10, count: 0 , img :"images/headband.jpg"},
  { id: 22, type: "energym", model: "band", price: 25, count: 0 , img :"images/band.jpg"},
  { id: 23, type: "adidas", model: "knee support", price: 20, count: 0 , img :"images/kneesupport.jpg"},
];

let cart = [];
////////adding to cart / if exist advancing count by 1//////// always saves to local str
let addToCart = (itemId) => {
  if (cart.indexOf(productsAr[itemId]) < 0) {
    cart.push(productsAr[itemId]);
  }
  if (cart.indexOf(productsAr[itemId] >= 0)) {
    productsAr[itemId].count++;
  }
  saveToLocalStr();
};

///////////deleting cart from local storage//////////
let delCart = () => {
  if (event.target.innerHTML == "clear cart") {
    window.localStorage.clear();
    document.getElementById("total").innerHTML = "";
    document.getElementById("castumerCart").innerHTML = " ";
    document.getElementById(
      "clearCartBtn"
    ).innerHTML = " ";
  }
};

/////////////////////////////////////////
let addTocheckOutCart = (itemId) => {
  if (cart.indexOf(cart[itemId] > 0)) {
    cart[itemId].count++;
    saveToLocalStr();
    console.log(cart)
  }
  showCart();
};
/////////////////////////////////////////////
let removeFromcheckOutCart = (id) => {
  if (event.target.id == "delete") {
    cart[id].count--;
    saveToLocalStr();
    
  }
  if (cart[id].count == 0) {
    cart.splice(id, 1);
    document.getElementById("total").innerHTML = " ";
    saveToLocalStr();
  }
  showCart();
};

/////////////showing cart ////////////////

let totalDiv = document.getElementById("total");
    let span = document.getElementById("castumerCart");
   
let showCart = () => {
 
  
  if (cart.length > 0) {
    document.getElementById(
      "castumerCart"
    ).innerHTML = `<div class="container mt-5 mb-5">
  <div class="d-flex justify-content-center row">
      <div class="col-md-8">
          <div class="p-2">
              <h4 class="bag">your bag</h4>
          </div>`;
  } else {
    document.getElementById("castumerCart").innerHTML = " ";
  }
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].count;
    let div = document.createElement("div");
    div.setAttribute("class", "totalProductDiv");
    div.innerHTML = `<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="p-2">
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white px-8 rounded">
                <div class="mr-1"><img class="rounded" src="${cart[i].img}" width="170"></div>
                <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">${cart[i].type} ${cart[i].model}</span>
                    
                </div>
                <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger" id="delete" onclick="removeFromcheckOutCart(${i})"></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">${cart[i].count}</h5><i class="fa fa-plus text-success" onclick="addTocheckOutCart(${i})"></i>
                </div>
                <div>
                    <h5 class="text-grey">$${cart[i].price}</h5>
                </div>
                <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger" id="trash" onclick ="trashItem(${i})"></i></div>
            </div>
        </div>
    </div>
</div>`;
span.appendChild(div);
totalDiv.innerHTML = `total price is ${totalPrice}$`;
document.getElementById(
  "clearCartBtn"
).innerHTML = `<button class="btn btn-danger" onclick="delCart()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">clear cart</button>
<button class="btn btn-primary">procceed to checkout</button>`;
document.getElementById(
  "clearCartBtn"
).setAttribute('class','display')
  }
  
};

/////////local storage functions////////////////
function saveToLocalStr() {
  localStorage.setItem("castumerCart", JSON.stringify(cart));
}
function loadDataFromLocalStorage() {
  let checkOutCart = localStorage.getItem("castumerCart");
  cart = JSON.parse(checkOutCart);
  if (cart == null || cart == undefined) {
    cart = [];
  }
 
}

let trashItem = (id)=>
{
  cart.splice(id, 1);
    document.getElementById("total").innerHTML = " ";
    saveToLocalStr();
    showCart();
}
////////////jquery toast ////////////////////

$(".btn-secondary").click(function () {
  $(".toast").toast("show");
});

$("#input").on("input",function(){
let searchedItem=[];
let search = document.getElementById('input').value.toLowerCase()
searchedItem = productsAr.filter((obj,ind)=>obj.type.toLowerCase().includes(search)||
 obj.model.toLowerCase().includes(search))
console.log(searchedItem);
let displaySearch = document.getElementById('displaySearch')
displaySearch.innerHTML= searchedItem.map((obj)=>`<div class="card mb-3" >
<img src="${obj.img}" class="card-img-top"/>
<div class="card-body" >
  <h5 class="card-title">${obj.type} ${obj.model}</h5>
  <p class="card-text">
  </p>
  <div class="priceList">
  <h4> price ${obj.price}$</h3>
  <button type="button" class="btn btn-secondary btn-sm" onclick="addToCart(${obj.id})">הוסף לסל</button>
</div>
</div>
</div>`)
if(search=='')displaySearch.innerHTML=''
})
loadDataFromLocalStorage();

