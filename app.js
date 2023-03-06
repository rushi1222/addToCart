const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]
// adding to cart
//before adding

class Plate{
    constructor(menu, name, price,image, alt, count){
               // Define some additional properties for the component, with default values if none provided
               this.menu = menu
               this.name = name,
               this.price = price/100.00,
               this.image = image,
               this.alt = alt,
               this.count = count
               this.cart = 0;
               // Bind the render method to the component instance so it can be used as an event listener
               this.render = this.render.bind(this);
       
    }


      handleNextClick() {
        console.log(this.count)
        console.log(this.cart)


        if(this.count == 0){
            this.count++;
            this.cart.innerText = "In Cart";
            this.cart.setAttribute("class", "in-cart");
            const newElement = document.createElement('img');
            newElement.setAttribute("src", "images/check.svg");
            newElement.setAttribute("alt", `${this.alt}`);
            this.cart.insertBefore(newElement, this.cart.firstChild);
            
            //adding to cart
            var newCart = document.getElementById('cart-summary');
            var newCartChild = document.createElement("li");
            newCartChild.innerHTML = `
            <div class = "plate"><img src="images/${this.image}" alt="${this.alt}" class="plate">
            <div class="quantity" id = "quantityImage">${this.count}</div></div>
            <div class = "content">
            <p class="menu-item">${this.name}</p>
            <p class="price">$${this.price}</p></div>
            <div class = "quantity__wrapper">
            <button class="decrease" id = "decrease">
              <img src="images/chevron.svg">
            </button>
            <div class="quantity" id = "quantity" >${this.count}</div>
            <button class="increase" id = "increase">
              <img src="images/chevron.svg">
            </button>
            </div>
            <div class = "subtotal" id = "subtotal">
            $${this.count*this.price}</div>`
            newCart.appendChild(newCartChild);
            //increase button
            const increase = document.getElementById('increase');
            increase.addEventListener('click', this.handleIncrease.bind(this));
            //decrease button
            const decrease = document.getElementById('decrease');
            decrease.addEventListener('click', this.handleDecrease.bind(this));

            console.log(newCart)
            
        }
        else{
            console.log("already in cart")
        }

  }
  handleIncrease(){
        console.log("increase")
        this.count++;
        const newQuantity = document.getElementById('quantity');
        newQuantity.innerText = this.count;
        const newSubtotal = document.getElementById('subtotal');
        newSubtotal.innerText = `$${this.count*this.price}`;
        const newQuantityImage = document.getElementById('quantityImage');
        newQuantityImage.innerText = this.count;

  }
    handleDecrease(){
        console.log("decrease")
        this.count--;
        const newQuantity = document.getElementById('quantity');
        newQuantity.innerText = this.count;
        const newSubtotal = document.getElementById('subtotal');
        newSubtotal.innerText = `$${this.count*this.price}`;
        const newQuantityImage = document.getElementById('quantityImage');
        newQuantityImage.innerText = this.count;
        if(this.count == 0){
            this.cart.innerText = "Add to Cart";
            this.cart.setAttribute("class", "add");
            this.cart.removeChild(this.cart.firstChild);
            this.count = 0;
            var newCart = document.getElementById('cart-summary');
            newCart.removeChild(newCart.lastChild);
        }
    }
    render(){
        // var content = this.createContent();
        var newChild = document.createElement("div");
        newChild.innerHTML =`<img src="images/${this.image}" alt="${this.alt}" class="plate" />`;
        newChild.setAttribute("class", "plate");        
        this.menu.appendChild(newChild);
        var newChildContent = document.createElement("div");
        newChildContent.innerHTML = `<p class="menu-item">${this.name}</p>
            <p class="price">$${this.price}</p>
            <button class="add" id = "${this.alt}" >Add to Cart</button>`;
        newChildContent.setAttribute("class", "content");
        this.menu.appendChild(newChildContent);
        //add event listener
        const addToCart = document.getElementById(this.alt);
      console.log(addToCart)
        this.cart = addToCart
        addToCart.addEventListener('click', this.handleNextClick.bind(this));

    }
}


var menu0 = document.getElementById('Salmon and Vegetables');
var menu1 = document.getElementById('Chicken Salad with Parmesan');
var menu2 = document.getElementById('Fish Sticks and Fries');
var menu3 = document.getElementById('Chicken and Rice');
var menu4 = document.getElementById('Chicken and Vegetables');
var menu5 = document.getElementById('Chicken and Fries');

const newPlate1 = new Plate(menu0, menuItems[0].name, menuItems[0].price, menuItems[0].image, menuItems[0].alt, menuItems[0].count);
const newPlate2 = new Plate(menu1, menuItems[1].name, menuItems[1].price, menuItems[1].image, menuItems[1].alt, menuItems[1].count);
const newPlate3 = new Plate(menu2, menuItems[2].name, menuItems[2].price, menuItems[2].image, menuItems[2].alt, menuItems[2].count);
const newPlate4 = new Plate(menu3, menuItems[3].name, menuItems[3].price, menuItems[3].image, menuItems[3].alt, menuItems[3].count);
const newPlate5 = new Plate(menu4, menuItems[4].name, menuItems[4].price, menuItems[4].image, menuItems[4].alt, menuItems[4].count);
const newPlate6 = new Plate(menu5, menuItems[5].name, menuItems[5].price, menuItems[5].image, menuItems[5].alt, menuItems[5].count);

newPlate1.render();
newPlate2.render();
newPlate3.render();
newPlate4.render();
newPlate5.render();
newPlate6.render();





// const menu = new Plate(menuItems[0].name, menuItems[0].price, menuItems[0].image, menuItems[0].alt, menuItems[0].count);

// const addToCart = document.getElementById('Salmon_and_Vegetables');
// addToCart.addEventListener('click', () => {
//     addToCart.setAttribute("class", "in-cart");
//     addToCart.innerText = "In Cart";
//     console.log(addToCart)
//     const newElement = document.createElement('img');
//     newElement.setAttribute("src", "images/check.svg");
//     newElement.setAttribute("alt", "Salmon and Vegetables");
//     addToCart.insertBefore(newElement, addToCart.firstChild);



// })



