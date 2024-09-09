
export const Products = {
    id: 101, // Unique identifier
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless Bluetooth headphones with noise cancellation and 20-hour battery life.",
    price: 99.99, // Price in USD
    discountPrice: 89.99, // Discounted price (optional)
    category: "Electronics",
    brand: "AudioPro",
    stock: 150, // Quantity in stock
    rating: 4.5, // Average customer rating
    reviews: [
      {
        userId: 201,
        username: "john_doe",
        rating: 5,
        comment: "Amazing sound quality and great battery life!"
      },
      {
        userId: 202,
        username: "jane_doe",
        rating: 4,
        comment: "Comfortable to wear but could improve noise cancellation."
      }
    ],
    images: [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg"
    ], // Array of image URLs
    features: [
      "Bluetooth 5.0",
      "Noise cancellation",
      "20-hour battery life",
      "Lightweight design"
    ],
    shipping: {
      weight: "0.5kg",
      dimensions: "10x5x3 inches",
      available: true,
      estimatedDelivery: "3-5 business days"
    },
    seller: {
      sellerId: 501,
      name: "TechStore",
      rating: 4.8
    }
  };
  