const products = [
  {
    name: "boAt Rockerz 551ANC",
    cover: "/images/image6.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Boat",
    price: 3000,
    countInStock: 10,
    rating: 4.5,
    color: "Black",
    featured: true,
    headphoneType: "On-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "boAt Rockerz 400",
    cover: "/images/image13.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Boat",
    price: 1500,
    countInStock: 12,
    rating: 3,
    color: "Blue",
    featured: false,
    headphoneType: "On-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "JBL C100SI",
    cover: "/images/image12.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "JBL",
    price: 3400,
    countInStock: 3,
    rating: 3.6,
    color: "Black",
    featured: false,
    headphoneType: "In-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "ZEBRONICS Zeb-Thunder",
    cover: "/images/image16.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Zebronics",
    price: 600,
    countInStock: 13,
    rating: 4,
    color: "Blue",
    featured: true,
    headphoneType: "Over-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "boAt Rockerz 558",
    cover: "/images/image19.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Boat",
    price: 2000,
    countInStock: 8,
    rating: 4.3,
    color: "Black",
    featured: true,
    headphoneType: "Over-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "Sony WH-CH720N",
    cover: "/images/image21.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Sony",
    price: 10000,
    countInStock: 5,
    rating: 2,
    color: "Blue",
    featured: false,
    headphoneType: "Over-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "PTron Tangent Duo",
    cover: "/images/image22.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Ptron",
    price: 500,
    countInStock: 5,
    rating: 2,
    color: "Blue",
    featured: false,
    headphoneType: "In-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "ZEBRONICS Zeb-Bang",
    cover: "/images/image18.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Zebronics",
    price: 699,
    countInStock: 5,
    rating: 2,
    color: "White",
    featured: false,
    headphoneType: "Over-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },

  {
    name: "PTron Boom Ultima",
    cover: "/images/image20.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Ptron",
    price: 300,
    countInStock: 5,
    rating: 2,
    color: "Blue",
    featured: false,
    headphoneType: "In-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "Sony Wh-Ch510",
    cover: "/images/image17.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Sony",
    price: 3990,
    countInStock: 5,
    rating: 2,
    color: "Blue",
    featured: true,
    headphoneType: "On-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "Marshall Major IV",
    cover: "/images/image15.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Marshall",
    price: 13000,
    countInStock: 5,
    rating: 2,
    color: "Brown",
    featured: true,
    headphoneType: "On-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
  {
    name: "boAt BassHeads 100",
    cover: "/images/image14.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    longDescription:
      "About this item. Sony’s lightest Wireless Noise-cancelling headband ever. Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback). Multi-Point Connection helps to pair with two Bluetooth devices at the same time. Take noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music. Super comfortable and lightweight design ( 192 Grams ).High sound quality and well-balanced sound tuning",
    brand: "Boat",
    price: 700,
    countInStock: 5,
    rating: 2,
    color: "Black",
    featured: true,
    headphoneType: "In-ear headphone",
    images: [
      "/images/image24.png",
      "/images/image25.png",
      "/images/image26.png",
    ],
  },
];

module.exports = products;
