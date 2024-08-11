// reduce
const aryOne = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
const sumUp = aryOne.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sumUp);

const myCart = [
    {
        courseName: "Web Dev",
        price: 2500
    },

    {
        courseName: "Mobile App Dev",
        price: 3500
    },

    {
        courseName: "DSA - JS",
        price: 3500
    }
]

const total = myCart.reduce((acc, items) => acc + items.price, 0);
console.log(total);
