let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Pear Air Pods',
        image: '../Images/product1.jpg',
        price: 1999.000
    },
    {
        id: 2,
        name: 'Anker Powerbank',
        image: '../Images/product2.jpg',
        price: 899.000
    },
    {
        id: 3,
        name: 'Standing Charger Port',
        image: '../Images/product3.jpg',
        price: 299.000
    },
    {
        id: 4,
        name: 'GROOT Camera Phone Attachment',
        image: '../Images/product4.jpg',
        price: 499.000
    },
    {
        id: 5,
        name: 'Dyler Night Light Speaker',
        image: '../Images/product5.jpg',
        price: 699.000
    },
    {
        id: 6,
        name: 'EXPLR Flashlight Attachment',
        image: '../Images/product6.jpg',
        price: 119.000

    },
    {
        id: 7,
        name: 'BANGBANG Powerbank',
        image: '../Images/product7.jpg',
        price: 499.000
    },
    {
        id: 8,
        name: 'THNDR Standing Night Light',
        image: '../Images/product8.jpg',
        price: 399.000
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = 
        `
            <img src="image/${value.image}">
            <div class="title">
                ${value.name}
            </div>
            <div class="price">₱
                ${value.price.toLocaleString()}
            </div>
            <button onclick="addToCard(${key})">
                Add To Cart
            </button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₱${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button> 
                </div>`;
                listCard.appendChild(newDiv); 
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count; 
} //This code block creates an instance of an item along with assigning a numbered capacity via + or -
//

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


document.getElementById("Order_Now").onclick = function () {
    location.href = "\Order_Now.html";
};
