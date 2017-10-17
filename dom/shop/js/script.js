const buttons = document.querySelectorAll('.add');
const cartCount = document.getElementById('cart-count')
const totalPrice = document.getElementById("cart-total-price");
let priceSum = 0;
let countSum = cartCount.innerHTML;

for (let button of buttons) {
  button.addEventListener("click", function () {
    countSum++;
    cartCount.innerHTML = countSum;
    let currentPrice = button.getAttribute("data-price");
    priceSum += +currentPrice;
    totalPrice.innerHTML = getPriceFormatted(priceSum);
  });
};