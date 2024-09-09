export const Products = [
    {
      id: 101,
      name: "Wireless Bluetooth Headphones",
      image:"../src/images/headphone.jpg",
      description: "High-quality wireless Bluetooth headphones with noise cancellation and 20-hour battery life.",
      price: 99.99,
      discountPrice: 89.99,
      category: "Electronics",
      brand: "AudioPro",
      stock: 150,
      rating: 4.5,
      reviews: [
        {
          userId: 201,
          username: "john_doe",
          rating: 5,
          comment: "Amazing sound quality and great battery life!",
        },
        {
          userId: 202,
          username: "jane_doe",
          rating: 4,
          comment: "Comfortable to wear but could improve noise cancellation.",
        },
      ],
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
      ],
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
    },
    {
      id: 102,
      name: "4K Smart TV",
      image:"../src/images/smartTv.png",
      description: "55-inch 4K Ultra HD Smart TV with HDR support and built-in streaming apps.",
      price: 499.99,
      discountPrice: 449.99,
      category: "Electronics",
      brand: "VisionTech",
      stock: 80,
      rating: 4.7,
      reviews: [
        {
          userId: 203,
          username: "mike_smith",
          rating: 5,
          comment: "Stunning picture quality and the built-in apps make it super convenient.",
        },
        {
          userId: 204,
          username: "sarah_jones",
          rating: 4,
          comment: "Great TV but the remote control could be better.",
        },
      ],
      images: [
        "tv_image1.jpg",
        "tv_image2.jpg",
        "tv_image3.jpg"
      ],
      features: [
        "4K Ultra HD",
        "HDR10 Support",
        "Built-in Streaming Apps",
        "3 HDMI Ports"
      ],
      shipping: {
        weight: "15kg",
        dimensions: "48x28x3 inches",
        available: true,
        estimatedDelivery: "5-7 business days"
      },
      seller: {
        sellerId: 502,
        name: "HomeTech",
        rating: 4.6
      }
    },
    {
      id: 103,
      name: "Gaming Laptop",
      image:"../src/images/gamingLaptop.png",
      
      description: "High-performance gaming laptop with Intel i7, 16GB RAM, 1TB SSD, and NVIDIA RTX 3060.",
      price: 1299.99,
      discountPrice: 1199.99,
      category: "Computers",
      brand: "GigaTech",
      stock: 50,
      rating: 4.8,
      reviews: [
        {
          userId: 205,
          username: "gamer123",
          rating: 5,
          comment: "Runs all my favorite games at ultra settings, fantastic performance!",
        },
        {
          userId: 206,
          username: "tech_geek",
          rating: 4.5,
          comment: "Amazing laptop, but it gets a bit hot during long gaming sessions.",
        },
      ],
      images: [
        "laptop_image1.jpg",
        "laptop_image2.jpg",
        "laptop_image3.jpg"
      ],
      features: [
        "Intel i7 Processor",
        "NVIDIA RTX 3060",
        "16GB RAM",
        "1TB SSD"
      ],
      shipping: {
        weight: "2.5kg",
        dimensions: "15x10x1 inches",
        available: true,
        estimatedDelivery: "2-4 business days"
      },
      seller: {
        sellerId: 503,
        name: "GameZone",
        rating: 4.9
      }
    },
    {
      id: 104,
      name: "Smartphone",
      image:"../src/images/smartphone.png",
      
      description: "Latest flagship smartphone with 6.5-inch OLED display, 128GB storage, and triple-camera system.",
      price: 799.99,
      discountPrice: 749.99,
      category: "Mobile Phones",
      brand: "PhonePro",
      stock: 200,
      rating: 4.6,
      reviews: [
        {
          userId: 207,
          username: "mobile_fan",
          rating: 5,
          comment: "Best smartphone I've ever used, amazing camera and display!",
        },
        {
          userId: 208,
          username: "photographer22",
          rating: 4.5,
          comment: "Great phone for photography, but the battery life could be better.",
        },
      ],
      images: [
        "phone_image1.jpg",
        "phone_image2.jpg",
        "phone_image3.jpg"
      ],
      features: [
        "6.5-inch OLED Display",
        "128GB Storage",
        "Triple-Camera System",
        "5G Connectivity"
      ],
      shipping: {
        weight: "0.3kg",
        dimensions: "6x3x0.3 inches",
        available: true,
        estimatedDelivery: "1-3 business days"
      },
      seller: {
        sellerId: 504,
        name: "PhoneWorld",
        rating: 4.7
      }
    }
  ];
  