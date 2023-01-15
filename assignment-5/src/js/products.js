/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */
/*
    {
      id: "P1",
      name: "Name 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
window.products = [
  {
    id: "100",
    title: "Iphone 7",
    imageUrl: "https://i.ebayimg.com/images/g/zgwAAOSwt2dihNbs/s-l1600.jpg",
    description:
      "The renowned world Iphone 7. With the capacity of 32GB, 128GB, 256GB and it comes with different variety of stylish colors; red, Rose Gold, Gold, Silver, Black, Jet Black1. Adiitionally, With the height of 5.44 inches (138.3 mm) and width of 2.64 inches(67.1mm). It also contains the depth of 0.28 inch (7.1 mm) and with the Weight: 4.87 ounces (138 grams). Furthermore it also has one of the best Splash, Water, and Dust Resistant4. Which is highly rated by many with the Rate of IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529.",
    price: "50000",
    discontinued: false,
    categories: ["Apple"]
  },

  {
    id: "101",
    title: "Iphone 8",
    imageUrl:
      "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-8-plus/iphone-8-plus-silver.jpg",
    description:
      "Purchase an Apple iPhone smartphone if you enjoy staying current with technology and are a fan of computers and electronics. The iPhone 8 and 8 Plus have relatively similar designs to their predecessors, with the addition of a glass back. if you want to keep up with 11th generation technology with amazing features and different variety of colors; Gold, Silver, Space Gray (Product)REDTM. With self-sustaining capacity with the storage of 64GB, 128GB, 256GB. Additionally with the height of 5.45 inches (138.4 mm), Width of 2.65 inches (67.3 mm), Depth of 0.29 inch (7.3 mm) and Weight of 5.22 ounces (148 grams).",
    price: "70000",
    discontinued: false,
    categories: ["Apple"]
  },
  {
    id: "102",
    title: "Iphone X",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0179/5502/9092/products/iphone-xr-black_600x600.png?v=1588254549",
    description:
      "The iPhone X, commonly known as the iPhone 10[11][12] or the Roman numeral (x) pronounced (ten), is a smartphone created, produced, and sold by Apple Inc.It is a part of the 11th generation of the iPhone, which also includes the iPhone 8 and 8 Plus. ",
    price: "100000",
    discontinued: false,
    categories: ["Apple"]
  },
  {
    id: "103",
    title: "Iphone 11",
    imageUrl:
      "https://www.bell.ca/styles/wireless/all_languages/all_regions/catalog_images/large/iphone11_black_lrg1.png",
    description:
      "Sometimes all you need is a functional smartphone without any frills.The iPhone 11 is comparable to Apple's utility smartphone in that it accomplishes the essentials while omitting the extras you might not require.With a 6.1-inch LCD screen, you have enough space to see everything you need to see and FaceID for additional protection.",
    price: "120000",
    discontinued: false,
    categories: ["Apple"]
  },
  {
    id: "104",
    title: "Iphone-12",
    imageUrl:
      "https://images.ctfassets.net/8utyj17y1gom/LpgExu45E3JrbrIEuzYiy/3a5c5f0d69ae88d3f43bf3b10543d7ad/iPhone-12-black-01.png",
    description:
      "Start having fun with the iPhone 12! A dazzling 6.1 Super Retina XDR display, 5G for downloading and streaming high-quality video, the potent A14 Bionic CPU, and Ceramic Shield for improved drop performance are all included. Additional features include cinema- grade Dolby Vision, new MagSafe accessories for wireless charging, outstanding low - light photography with Night mode on both cameras, and much more. Additionally, it also comes with your favourite colors; green, blue, Product(REDTM), and white.",
    price: "165000",
    discontinued: false,
    categories: ["Apple"]
  },
  {
    id: "200",
    title: "Galaxy S21 Ultra",
    imageUrl: "https://www.virginplus.ca/assets/phones/10-20AF2/10-20AF2_phoneFront.png",
    description:
      "With the creative Samsung Galaxy S22 Ultra 5G smartphone, bring the ordinary to life. This smartphone is designed to capture the memories that are important to you, with 108MP photo resolution and 8K video. It has a night mode for crystal - clear night photography, a 48-hour battery for unrelenting action, and an integrated S Pen for more creativity.",
    price: "90000",
    discontinued: false,
    categories: ["Samsung"]
  },
  {
    id: "201",
    title: "Galaxy Z Fold4",
    imageUrl:
      "https://images.samsung.com/ca/smartphones/galaxy-z-fold4/buy/Fold4_ColorSelection_GrayGreen_MO.png?imwidth=480",
    description:
      "The Samsung Galaxy Z Fold4 5G smartphone offers unique flexibility wherever you go. You can easily go from your pocket to a table thanks to this innovative device, which unfolds into a tablet and supports hands- free reading. Utilize the Multi - Window feature to multitask, and take advantage of the brilliant display and strong, water - resistant construction to play games and watch films without interruption.",
    price: "100000",
    discontinued: false,
    categories: ["Samsung"]
  },
  {
    id: "202",
    title: "Galaxy Z Flip4",
    imageUrl:
      "https://images.ctfassets.net/8utyj17y1gom/71uxFTw5QZIVaOe0eUtnBJ/cccde212d50f223a32cb1196487d1698/galaxy-flip3-black-angle.png",
    description:
      "Small but mighty The Galaxy Z Flip4 is a little smartphone that has all the features you require. It has a full screen, ultra- thin foldable display that lets you do more on one screen. Chat with pals on the top screen while looking for a selfie to share. Additionally, it sports the Flexcam feature, which enables you to take hands - free selfies to ensure that everyone is in the picture.",
    price: "80000",
    discontinued: false,
    categories: ["Samsung"]
  },
  {
    id: "203",
    title: "Galaxy S21 FE 5G",
    imageUrl: "https://m.media-amazon.com/images/I/51bjXqfEweL._AC_SX522_.jpg",
    description:
      "With the creatively designed Samsung Galaxy S21 FE 5G, you may be future-ready. This smartphone has HyperFast processing capabilities with a 128GB internal memory and 6GB of RAM, allowing you to multitask without any hiccups. Its fast- charging, all - day intelligent battery keeps your phone running all day, while the 120Hz display provides fluid scrolling and smooth action.",
    price: "70000",
    discontinued: false,
    categories: ["Samsung"]
  },

  {
    id: "204",
    title: "Samsung Galaxy A53 5G 128GB",
    imageUrl: "https://nowinsa.co.za/wp-content/uploads/2022/05/AirBrush_20220503221517.jpg",
    description:
      "Take advantage of amazing daily experiences with the potent Samsung Galaxy A53 5G 128GB. Your programmes, pictures, and videos will be clear, crisp, and easy to watch thanks to its big screen and Full HD graphics. There is plenty of inbuilt storage and high- performance front and rear cameras, so you won't have to worry about running out of space. ",
    price: "60000",
    discontinued: false,
    categories: ["Samsung"]
  },
  {
    id: "300",
    title: "Google pixel 7",
    imageUrl:
      "https://www.cnet.com/a/img/resize/4f048c24e49f537cf63febb6f794198a21a97903/hub/2022/07/18/e4c35b56-b93a-4927-95a5-1d716c962f32/google-pixel-6a-4135.jpg?auto=webp&fit=crop&height=675&width=1200",
    description:
      "Hello, Pixel 7.It is quick, secure, and functional, with cutting - edge photo and video features and fantastic battery life, all powered by Google Tensor G2.",
    price: "70000",
    discontinued: false,
    categories: ["google-pixels"]
  },
  {
    id: "301",
    title: "Google pixel 7 pro",
    imageUrl:
      "https://blog.bestbuy.ca/wp-content/uploads/2022/10/Google-Pixel-7-Pro-front-dark.jpg",
    description:
      "The best-of-everything phone from Google is here: the Pixel 7 Pro.It has the best Pixel Camera yet, is fast and secure, and is powered by Google Tensor G2.",
    price: "110090",
    discontinued: false,
    categories: ["google-pixels"]
  },
  {
    id: "302",
    title: "Google pixel Pixel 6a",
    imageUrl:
      "https://www.cnet.com/a/img/resize/4f048c24e49f537cf63febb6f794198a21a97903/hub/2022/07/18/e4c35b56-b93a-4927-95a5-1d716c962f32/google-pixel-6a-4135.jpg?auto=webp&fit=crop&height=675&width=1200",
    description:
      "smart, strong, and beneficial. less than you might believe. It is the faster, more secure, and more inexpensive Google phone. (1) Google Tensor- powered for quick performance.",
    price: "48300",
    discontinued: false,
    categories: ["google-pixels"]
  },
  {
    id: "303",
    title: "Google pixel Pixel 6",
    imageUrl:
      "https://lh3.googleusercontent.com/lpKnZM5EMnxNIBPTb8MVvpxl-kLZU9bRM7NLUOjMlGPwRL-DkYhKSG1wXza3z_G-N47q17mVkp4wsWFZXsJzCC66ZGHB9f0bmKY=rw-e365-w525",
    description:
      "Stay in the moment with modern and intuitive Google Pixel 6 5G phone. With a powerful camera system, next-gen Titan M2 security, and the custom-built Google Tensor processor, it's the smartest and fastest Pixel yet. With faster apps and pages, an all-day battery and proactive help, it delivers what you need when you need it.",
    price: "67500",
    discontinued: false,
    categories: ["google-pixels"]
  },
  {
    id: "304",
    title: "Google pixel 5",
    imageUrl: "https://m.media-amazon.com/images/I/81AqwYyZjzL._AC_SL1500_.jpg",
    description:
      "Utilize the Google Pixel 5 to push the limits of your smartphone. With a Qualcomm Snapdragon 765G processor, 8GB of RAM, and Android 11, this top - tier Google phone supports smooth streaming, gaming, and other activities It's a great tool with incredible photo and video capabilities, wireless charging, and water resistance.",
    price: "69500",
    discontinued: false,
    categories: ["google-pixels"]
  },
  {
    id: "400",
    title: "AirPods (2nd generation)",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005",
    description:
      "The AirPods offer a fantastic wireless headphone experience with lots of speak and listen time, voice-activated Siri access, and a readily available wireless charging case. They only need to be removed before they may be used with all of your devices. When you put them in your ears, they instantly connect, enveloping you in rich, high- quality sound. similar to magic ",
    price: "17900",
    discontinued: false,
    categories: ["Airpods"]
  },
  {
    id: "401",
    title: "Airpods (3rd generation)",
    imageUrl:
      "https://p2-ofp.static.pub/ShareResource/na/products/smart-devices/400x300/lenovo-smart-wireless-earbuds.png",
    description:
      "Music with a more intimate feel. Automatic EQ tuning adjusts music to your hearing needs. The rich intricacies in every song are delivered to you, personalised for you in real time, using inward- facing microphones to pick up what you're hearing and then alter low and middle frequencies. ",
    price: "22900",
    discontinued: false,
    categories: ["Airpods"]
  },
  {
    id: "402",
    title: " Galaxy Buds2 Pro",
    imageUrl: "https://m.media-amazon.com/images/I/41kyDAzwbrL._AC_SX522_.jpg",
    description:
      "Because clear audio begins at the source with your preferred Samsung Galaxy mobile, every note sounds authentic. The upgraded Samsung Seamless Codec maintains the same high- quality 24 - bit audio throughout encoding and decoding on the Galaxy Buds2 Pro.",
    price: "23900",
    discontinued: false,
    categories: ["Airpods"]
  },
  {
    id: "403",
    title: "close Samsung Galaxy Buds",
    imageUrl:
      "https://media.istockphoto.com/id/1356020731/photo/samsung-galaxy-buds-2.jpg?s=612x612&w=0&k=20&c=E-z34Fw_WbDRs2KomSdTTj2er9Z_v5UJIT3-9qNOHI0=",
    description:
      "With the Samsung Galaxy Buds2 in-ear headphones, you can hear what you want to hear and enjoy amazing sound. These wireless earbuds have Active Noise Cancellation(ANC), which lets you maintain attention wherever you want it. No matter where you are, they are made to provide you with crystal - clear calls thanks to their three strong microphones and noise- cancelling technology.",
    price: "11400",
    discontinued: false,
    categories: ["Airpods"]
  }
];
