// class Card {
//   constructor(balance) {
//     this._balance = balance;
//   }

//   get balance() {
//     return `$${this._balance}`;
//   }

//   set balance(newBalance) {
//     if (newBalance < 0) {
//       console.log("Xato: balans manfiy bo‘lishi mumkin emas!");
//     } else {
//       this._balance = newBalance;
//     }
//   }
// }

// const myCard = new Card(1000);
// console.log(myCard.balance); // "$1000"

// // Urinib ko‘ramiz:
// myCard.balance = -500; // Xato: balans manfiy bo‘lishi mumkin emas!

// myCard.balance = 1500; // To‘g‘ri, endi balans yangilanadi
// console.log(myCard.balance); // "$1500"

// var arr = [10, 20, 30, 40, [50, 60, 70, [80, 100]]];

// console.log(arr[4][3][1]);

const a = (product) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    console.log(`${product[i].name} ${product[i].price}`);
    // total += product[i].price;
  }
  // console.log(total);
};

const b = [
  {
    name: "A",
    price: 100
  },
  {
    name: "B",
    price: 200
  }
];

a(b);
