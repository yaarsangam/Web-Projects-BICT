// Product array with names and prices
const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 699.50 },
    { name: "Headphones", price: 149.99 },
    { name: "Keyboard", price: 79.95 },
    { name: "Mouse", price: 29.99 },
    { name: "Monitor", price: 249.00 }
];

// current date using Date object
const dateElement = document.getElementById('current-date');
const currentDate = new Date();
dateElement.textContent += currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
});

// Display  JavaScript loop
const productsContainer = document.getElementById('products-container');
for (let i = 0; i < products.length; i++) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-name">${products[i].name}</div>
        <div class="product-price">$${products[i].price.toFixed(2)}</div>
    `;
    productsContainer.appendChild(productCard);
}

// total price control structure
const totalElement = document.getElementById('total-price');
const calculateButton = document.getElementById('calculate-btn');

calculateButton.addEventListener('click', function() {
    let total = 0;
    
    //  loop to calculate total
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    
    totalElement.textContent = `Total Price: $${total.toFixed(2)}`;
    totalElement.style.color = '#e74c3c';
    totalElement.style.fontSize = '2rem';
    
    //  visual feedback
    calculateButton.textContent = 'Calculated!';
    calculateButton.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        calculateButton.textContent = 'Calculate Total';
        calculateButton.style.backgroundColor = '#3498db';
    }, 1500);
});
