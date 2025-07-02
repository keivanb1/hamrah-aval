export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    features: ["Noise Cancellation", "30-hour Battery", "Wireless", "Premium Sound"],
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS, and smartphone integration. Track your fitness and stay connected.",
    features: ["Heart Rate Monitor", "GPS", "Water Resistant", "7-day Battery"],
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Stylish and durable leather laptop bag perfect for professionals. Fits laptops up to 15 inches.",
    features: ["Genuine Leather", "15-inch Laptop", "Multiple Compartments", "Adjustable Strap"],
    rating: 4.7,
    reviews: 67,
    inStock: true
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    features: ["RGB Lighting", "Programmable Buttons", "High DPI", "Wireless"],
    rating: 4.5,
    reviews: 203,
    inStock: true
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Professional mechanical keyboard with tactile switches and backlit keys. Perfect for gaming and typing.",
    features: ["Mechanical Switches", "RGB Backlight", "Durable", "Compact Design"],
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Compact and powerful Bluetooth speaker with excellent sound quality and long battery life.",
    features: ["Bluetooth 5.0", "Waterproof", "12-hour Battery", "Compact"],
    rating: 4.4,
    reviews: 91,
    inStock: true
  },
  {
    id: 7,
    name: "USB-C Hub",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card slots. Essential for modern laptops.",
    features: ["HDMI Output", "USB 3.0 Ports", "SD Card Reader", "Compact"],
    rating: 4.3,
    reviews: 78,
    inStock: true
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and modern design.",
    features: ["Fast Charging", "Qi Compatible", "LED Indicator", "Slim Design"],
    rating: 4.2,
    reviews: 145,
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Accessories"
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};