import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];
export const shoesAll = [
  {
    name: "Nike Air Max 270",
    price: "₹10999",
    sizes: [7, 8, 9, 10],
    colors: ["Black", "White", "Red"],
    warranty: "6 months",
    thumbnail: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
  },
  {
    name: "Nike Revolution 6",
    price: "₹7999",
    sizes: [6, 7, 8, 9],
    colors: ["Grey", "Blue", "Orange"],
    warranty: "1 year",
    thumbnail: "https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg",
  },
  {
    name: "Nike ZoomX Invincible",
    price: "₹12499",
    sizes: [8, 9, 10, 11],
    colors: ["White", "Volt", "Black"],
    warranty: "1 year",
    thumbnail: "https://cdn.pixabay.com/photo/2020/05/04/07/15/nike-5128118_1280.jpg",
  },
  {
    name: "Nike Air Force 1",
    price: "₹9999",
    sizes: [6, 7, 8],
    colors: ["White", "Blue"],
    warranty: "6 months",
    thumbnail: "https://cdn.pixabay.com/photo/2019/11/27/16/47/jordan-4657349_1280.jpg",
  },
  {
    name: "Nike Pegasus Trail 4",
    price: "₹11499",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Olive", "Grey", "Blue"],
    warranty: "1 year",
    thumbnail: "https://cdn.pixabay.com/photo/2020/04/14/09/53/nike-5041718_1280.jpg",
  },
  {
    name: "Nike Downshifter 12",
    price: "₹6599",
    sizes: [6, 7, 8],
    colors: ["Black", "Crimson"],
    warranty: "6 months",
    thumbnail: "https://cdn.pixabay.com/photo/2020/05/27/07/41/nike-5226091_1280.jpg",
  },
    {
    thumbnail: "https://cdn.pixabay.com/photo/2020/09/17/06/26/sneakers-5578113_1280.jpg",
    bigShoe: "/images/shoe1_big.png",
    name: "Nike Air Max 270",
    price: "₹9,999",
    colors: ["Red", "Black", "White"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    warranty: "6 Months",
  },
  {
    thumbnail: "https://cdn.pixabay.com/photo/2017/08/10/01/53/nike-2617018_1280.jpg",
    bigShoe: "/images/shoe2_big.png",
    name: "Nike ZoomX Vaporfly",
    price: "₹12,499",
    colors: ["Blue", "White"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    warranty: "1 Year",
  },
  {
    thumbnail: "https://cdn.pixabay.com/photo/2018/09/24/13/15/sneakers-3699919_1280.jpg",
    bigShoe: "/images/shoe3_big.png",
    name: "Nike Pegasus Trail 3",
    price: "₹8,299",
    colors: ["Green", "Grey"],
    sizes: ["UK 8", "UK 9", "UK 10"],
    warranty: "6 Months",
  },
  {
    thumbnail: "https://cdn.pixabay.com/photo/2020/09/17/06/20/nike-5578104_1280.jpg",
    bigShoe: "/images/shoe4_big.png",
    name: "Nike React Infinity Run",
    price: "₹10,499",
    colors: ["Black", "Orange", "Yellow"],
    sizes: ["UK 7", "UK 8", "UK 9"],
    warranty: "1 Year",
  },
  {
    thumbnail: "https://cdn.pixabay.com/photo/2019/12/11/08/43/nike-4687824_1280.jpg",
    bigShoe: "/images/shoe5_big.png",
    name: "Nike Revolution 6",
    price: "₹6,599",
    colors: ["White", "Beige"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 10"],
    warranty: "3 Months",
  },
];


export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: "4.2"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: "4.5"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: "4.0"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: "4.2"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Leena Laner',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    // { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];