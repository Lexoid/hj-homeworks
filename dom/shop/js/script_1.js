const buttons = document.querySelectorAll('.add');

const cartCount = document.getElementById('cart-count')
const totalPrice = document.getElementById("cart-total-price");

let priceSum = 0;
let countSum = cartCount.innerHTML;

// let countSum = 0;

for (let button of buttons) {
  console.log(button);
  button.addEventListener("click", function () {    
    countSum++;
    cartCount.innerHTML = countSum;
    // console.log(countSum);
    let currentPrice = button.getAttribute("data-price");
    console.log(currentPrice);
    console.log(typeof currentPrice);
    // console.log(typeof priceSum);
    priceSum += +currentPrice;
    // console.log(typeof priceSum);
    totalPrice.innerHTML = getPriceFormatted(priceSum);
  });
}  


console.log(cartCount.innerHTML);
console.log(totalPrice.innerHTML);