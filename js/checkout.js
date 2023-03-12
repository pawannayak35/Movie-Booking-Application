const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get("price");
const title = urlParams.get("title");

const moviePrice =  document.getElementById("ticket-price").innerHTML;
// console.log(moviePrice);

document.getElementById("ticket-price").innerHTML = moviePrice + price;
document.getElementById("movie-name").innerHTML = title;

let convenienceFee = (price * 1.75) / 100;
const conveniencePrice =  document.getElementById("conFee").innerHTML;
document.getElementById("conFee").innerHTML = conveniencePrice + convenienceFee;

let totalP = convenienceFee + Number(price);
// console.log(totalPrice);
const totalPrice =  document.getElementById("tolPrice").innerHTML;
document.getElementById("tolPrice").innerHTML = totalPrice + totalP;