const cart = [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 500, stock: 0 },
    { id: 3, name: "Keyboard", price: 1500, stock: 3 }
];


// Task 1: Find Product by ID
console.log('Task 1: Find Product by ID');
const findProduct = cart.find(item => item.id === 2);
console.log(findProduct);

// Task 2: Check Any Product Out of Stock
console.log('Task 2: Check Any Product Out of Stock');
const outOfStockProduct = cart.some(item => item.stock === 0);
console.log(outOfStockProduct);

// Task 3: Check All Products In Stock
console.log('Task 3: Check All Products In Stock');
const checkStock = cart.every(item => item.stock > 0);
console.log(checkStock);

// Task 4: Can User Place Order?
console.log('Task 4: Can User Place Order?');
const canOrder = cart.every(item => item.stock > 0);
console.log(canOrder ? 'Order Allowed' : 'Order Blocked');

// Find first available product
console.log('Find first available product');
const firstStock = cart.find(item => item.stock > 0);
console.log(firstStock);





