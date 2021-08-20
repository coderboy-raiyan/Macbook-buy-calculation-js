/*================================== 
My All Configaration Buttons
====================================*/
const eightGbBtn = document.querySelector(".eight-gb-btn");
const sixteenGbBtn = document.querySelector(".sixteen-gb-btn");
const fiftySixGbSsd = document.querySelector(".fifty-gb-ssd");
const fiftyTwoSsd = document.querySelector(".fiftyTwo-gb-ssd");
const oneTbSsd = document.querySelector(".OneTb-ssd");
const freeShipping = document.querySelector(".free-shipping");
const chrageShipping = document.querySelector(".charge-shipping");

/*================================== 
My All Promo Input References
====================================*/
const promoInput = document.querySelector(".promo-input");
const promoBtn = document.querySelector(".promo-btn");

/*================================== 
My All Prices section References
====================================*/
const bestPrice = document.querySelector(".best-price");
const extraMemory = document.querySelector(".extra-memory-cost");
const extraStorage = document.querySelector(".extra-storage-cost");
const deliveryCharge = document.querySelector(".delivery-charge");
const totalCost = document.querySelector(".total-cost");
const totalMainCost = document.querySelector(".total-main-cost");

/*================================== 
Main functions starts Here
====================================*/
let eightValue = 0;
let sixTeenValue = 180;
let fiftySixSsd = 0;
let fiftySecSsd = 100;
let oneTb = 180;
let freeShip = 0;
let chrageShip = 20;

function getMoney(myBtn, innerContent) {
  Number(innerContent.innerHTML);
  if (myBtn == eightGbBtn) {
    innerContent.innerHTML = eightValue;
  } else if (myBtn == sixteenGbBtn) {
    innerContent.innerHTML = sixTeenValue;
  } else if (myBtn == fiftySixGbSsd) {
    innerContent.innerHTML = fiftySixSsd;
  } else if (myBtn == fiftyTwoSsd) {
    innerContent.innerHTML = fiftySecSsd;
  } else if (myBtn == oneTbSsd) {
    innerContent.innerHTML = oneTb;
  } else if (myBtn == freeShipping) {
    innerContent.innerHTML = freeShip;
  } else if (myBtn == chrageShipping) {
    innerContent.innerHTML = chrageShip;
  }

  let myInputValues =
    Number(extraStorage.innerHTML) +
    Number(extraMemory.innerHTML) +
    Number(deliveryCharge.innerHTML);

  let bestfirstPrice = Number(bestPrice.innerHTML);

  let subtotal = bestfirstPrice + myInputValues;
  totalCost.innerHTML = subtotal;
}

eightGbBtn.addEventListener("click", function () {
  getMoney(eightGbBtn, extraMemory);
});

sixteenGbBtn.addEventListener("click", function () {
  getMoney(sixteenGbBtn, extraMemory);
});

// SSD

fiftySixGbSsd.addEventListener("click", function () {
  getMoney(fiftySixGbSsd, extraStorage);
});

fiftyTwoSsd.addEventListener("click", function () {
  getMoney(fiftyTwoSsd, extraStorage);
});

oneTbSsd.addEventListener("click", function () {
  getMoney(oneTbSsd, extraStorage);
});

// Shipping Buttons

freeShipping.addEventListener("click", function () {
  getMoney(freeShipping, deliveryCharge);
});

chrageShipping.addEventListener("click", function () {
  getMoney(chrageShipping, deliveryCharge);
});

// eightGbBtn.addEventListener("click", function () {
//   let eightMemoPrice = 0;
//   extraMemory.innerHTML = eightMemoPrice;
// });

// sixteenGbBtn.addEventListener("click", function () {
//   let SixMemoPrice = 180;
//   extraMemory.innerHTML = SixMemoPrice;
// });

// /*==================================
// SSd Price here
// ====================================*/
// fiftySixGbSsd.addEventListener("click", function () {
//   let SixGbSSd = 0;
//   extraStorage.innerHTML = SixGbSSd;
// });

// fiftyTwoSsd.addEventListener("click", function () {
//   let TwoSsd = 100;
//   extraStorage.innerHTML = TwoSsd;
// });

// oneTbSsd.addEventListener("click", function () {
//   let oneTb = 180;
//   extraStorage.innerHTML = oneTb;
// });
