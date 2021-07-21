const products = [
  {
    name: "Macbook Pro",
    imageUrl:
      "https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 4999,
    countInStock: 15,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Macbook",
  },
  {
    name: "Macbook Pro",
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Macbook",
  },
  {
    name: "Macbook Pro",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIjjt6NHIoDXLiyjccWVUQTFxGN_BF_bU1A&usqp=CAU",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
    rating: 4,
    color: "grey",
    content: "Macbook",
    category: "Macbook",
  },
  {
    name: "Macbook Pro",
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Macbook",
  },
  {
    name: "Macbook Pro",
    imageUrl: "https://i.ytimg.com/vi/lhOL-egdsGM/maxresdefault.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
    rating: 4,
    color: "rose",
    content: "all",
    category: "Macbook",
  },
  {
    name: "Iphone 11 Pro",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzvdjE7YmrXzywtAVRi1oChwGTxs6wUJgM5QhOlAg4kUozpVlj4g&usqp=CAc",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Iphone",
  },
  {
    name: "Iphone 11 Pro",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOw9E4c8GlOUaMDDLrj_2XK-FvTvO2kL9kw&usqp=CAU",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 1040,
    countInStock: 10,
    rating: 4,
    color: "grey",
    content: "Iphone",
    category: "Iphone",
  },

  {
    name: "Iphone 11 Pro",
    imageUrl:
      "https://static.digit.in/default/1a2594f7a120b35282917c297ec897f101a30fc8.png?tr=w-1200",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 740,
    countInStock: 10,
    rating: 4,
    color: "rose",
    content: "Iphone",
    category: "Iphone",
  },
  {
    name: "Iphone 11 Pro",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_z7RO1Ium5TpgSJZTv1i-zrbWJNKCzRWUi9tEgXybpzKRhfckNBKK03FbWc_x6E7TfOc&usqp=CAU",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 2140,
    countInStock: 10,
    rating: 4,
    color: "rose",
    content: "Iphone",
    category: "Iphone",
  },
  {
    name: "Iphone Watch",
    imageUrl:
      "https://i.gadgets360cdn.com/large/apple_watch_series_6_review_sp02_1606991827352.jpg",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 1460,
    countInStock: 10,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Iwatch",
  },
  {
    name: "Iphone Watch",
    imageUrl:
      "https://rukminim1.flixcart.com/image/416/416/smartwatch/a/v/t/mnnh2hn-a-apple-original-imaemy6y9fqmfhex.jpeg?q=70",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 40,
    countInStock: 10,
    rating: 4,
    color: "rose",
    content: "Iwatch",
    category: "Iwatch",
  },
  {
    name: "Ipod",
    imageUrl:
      "https://i.pinimg.com/originals/61/2a/50/612a50d29f62983dba08d5f56b1b1339.jpg",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 840,
    countInStock: 10,
    rating: 4,
    color: "grey",
    content: "all",
    category: "Ipod",
  },
];

module.exports = products;
