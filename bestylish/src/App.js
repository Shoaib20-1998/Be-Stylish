import './App.css';
import Navbar from './Landingpage/Navbar';
import Main from './Landingpage/Main.jsx'
import Shirts from './Pages/Shirts';
import Allroutes from './Allroutespage/Allroutes';
import LargeWithNewsletter from './Landingpage/Footer';
function App() {


// const data=[
//   {
//     "title": "LOUIS PHILIPPE Men Printed Full Sleeves Slim Fit Formal Shirt",
//     "price": 1199,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012226193-Blue-Navy-1000012226193_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "LOUIS PHILIPPE",
//     "Size": "L",
//     "Color": "Blue",
//     "discription": "A stunner collection to your formal wardrobe, this shirt is designed with a printed surface, a cut-away collar, a patch pocket, and full sleeves. Featured with a slim fit and cuffs, style this with a pair of solid trousers and oxfords to complete your base ensemble."  ,
//     "id": "1"
//    },
//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 949,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Blue-Navy-1000011554938_05-2100.jpg"
//   ],
//     "discount": 50,
//     "brand": "CODE",
//     "Size": "L",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "2"
//    },
//    {
//     "title": "PARK AVENUE Men Checked Formal Shirt",
//     "price": 1379,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012029038-Blue-Blue-1000012029038_01-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012029038-Blue-Blue-1000012029038_02-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012029038-Blue-Blue-1000012029038_03-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012029038-Blue-Blue-1000012029038_04-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012029038-Blue-Blue-1000012029038_05-2100.JPG"
//   ],
//     "discount": 40,
//     "brand": "PARK AVENUE",
//     "Size": "L",
//     "Color": "Blue",
//     "discription": "Fashioned for the ultimate comfort, and unique style, this formal shirt is designed with checks, full sleeves, and slim fit. It is detailed with button placket, pockets, and spread collar."  ,
//     "id": "3"
//    },
//    {
//     "title": "CODE Men Printed Full Sleeves Formal Shirt",
//     "price": 1139,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Green-Green-1000011554959_06-2100.jpg"
//   ],
//     "discount": 40,
//     "brand": "CODE",
//     "Size": "L",
//     "Color": "Green",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "4"
//    },
//    {
//     "title": "CODE Men Printed Full Sleeves Formal ShirtCODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 949,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554938-Red-Maroon-1000011554938_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "L",
//     "Color": "Burgandy",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "5"
//    },
//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Pink-Pink-1000011554887_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "L",
//     "Color": "Pink",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "6"
//    },
//    {
//     "title": "CODE Men Printed Slim Fit Formal Shirt",
//     "price": 749,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833573-White-White-1000011833573_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "L",
//     "Color": "White",
//     "discription": "Tailor your outfit with this slim-fit shirt styled with bold prints, a spread collar, long sleeves with buttoned cuffs, and a curved hem."  ,
//     "id": "7"
//    },
//    {
//     "title": "PARK AVENUE Men Checked Regular Fit Formal Shirt",
//     "price": 1379,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_01-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_02-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_03-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_04-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_05-2100.JPG",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012088340-Red-MediumRed-1000012088340_06-2100.JPG"
//   ],
//     "discount": 40.02,
//     "brand": "PARK AVENUE",
//     "Size": "L",
//     "Color": "Pink",
//     "discription": "Sharpen your work look with this shirt showcasing a checked pattern, a spread collar, short sleeves, a French button placket, and a patch pocket at the chest."  ,
//     "id": "8"
//    },
//    {
//     "title": "CODE Men Solid Band Collar Slim Fit Formal Shirt",
//     "price": 749,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011461288-Black-Black-1000011461288_06-2100.jpg"
//   ],
//     "discount": 50.05,
//     "brand": "PARK AVENUE",
//     "Size": "M",
//     "Color": "Black",
//     "discription": "Tailored for the ultimate comfort, this formal shirt is designed with full sleeves, a band collar, a full button placket, and a curved hemline."  ,
//     "id": "9"
//    },

//    {
//     "title": "CODE Men Abstract Printed Full Sleeves Slim Fit Formal Shirt",
//     "price": 649,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514686-Blue-Blue-1000011514686_06-2100.jpg"
//   ],
//     "discount": 50.04,
//     "brand": "CODE",
//     "Size": "M",
//     "Color": "White",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "10"
//    },

//    {
//     "title": "CODE Men Floral Printed Slim Fit Formal Shirt",
//     "price": 899,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833594-White-White-1000011833594_06-2100.jpg"
//   ],
//     "discount": 40.03,
//     "brand": "CODE",
//     "Size": "M",
//     "Color": "White",
//     "discription": "Sharpen your outfit with this slim-fit shirt with tonal floral prints, a spread collar, a buttoned front, long sleeves with buttoned cuffs, and a curved hem."  ,
//     "id": "11"
//    },

//    {
//     "title": "CODE Men Checked Slim Fit Formal Shirt",
//     "price": 749,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514753-White-White-1000011514753_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "M",
//     "Color": "White",
//     "discription": "Amp up your workwear with this checked formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a curved hemline."  ,
//     "id": "12"
//    },

//    {
//     "title": "CODE Men Checked Full Sleeves Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514774-Yellow-Yellow-1000011514774_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "M",
//     "Color": "Yellow",
//     "discription": "Tailored for the ultimate comfort, this formal shirt is designed with full sleeves, spread collar, full button placket, and curved hemline."  ,
//     "id": "13"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1019,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Blue-1000011554887_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "CODE",
//     "Size": "M",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "14"
//    },

//    {
//     "title": "PARK AVENUE Men Solid Formal Shirt",
//     "price": 1259,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011996958-Blue-Blue-1000011996958_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "PARK AVENUE",
//     "Size": "M",
//     "Color": "Blue",
//     "discription": "Special Offer, Shop for Rs. 2,999 & Get FLAT 500 Off. Use Code - VD500 (valid only for today) | Get EXTRA 8% Off on Purchase of Rs.1,999 and Above. Use Code"  ,
//     "id": "15"
//    },
//    {
//     "title": "VAN HEUSEN Men Printed Regular Fit Formal Shirt",
//     "price": 1399,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011115811-Blue-1000011115811_06-2100.jpg"
//   ],
//     "discount": 30.02,
//     "brand": "VAN HEUSEN",
//     "Size": "M",
//     "Color": "Blue",
//     "discription": "Tailored for the ultimate comfort, this formal shirt is designed with full sleeves, spread collar, full button placket, a patch pocket, and curved hemline."  ,
//     "id": "16"
//    },

//    {
//     "title": "VAN HEUSEN Men Printed Slim Fit Formal Shirt",
//     "price": 1329,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011330601-Blue-Navy-1000011330601_06-2100.jpg"
//   ],
//     "discount": 30.02,
//     "brand": "VAN HEUSEN",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, short sleeves, a button placket, and a patch pocket."  ,
//     "id": "17"
//    },

//    {
//     "title": "CODE Men Printed Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Yellow-Yellow-1000011535978_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "Peach",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "18"
//    },

//    {
//     "title": "CODE Men Printed Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535978-Blue-Blue-1000011535978_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "19"
//    },

//    {
//     "title": "CODE Men Checked Full Sleeves Slim Fit Formal Shirt",
//     "price": 899,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992059-Blue-Blue-1000011992059_06-2100.jpg"
//   ],
//     "discount": 40.03,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "With its spread collar, long sleeves with button cuffs, button placket, and patch pocket, this checked shirt will spruce up your formal attire."  ,
//     "id": "20"
//    },

//    {
//     "title": "CODE Men Printed Full Sleeves Formal Shirt",
//     "price": 1139,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554959-Blue-Teal-1000011554959_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "21"
//    },

//    {
//     "title": "ODE Men Striped Slim Fit Formal Shirt",
//     "price": 1019,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Blue-Blue-1000011833615_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "ODE Men",
//     "Size": "XL",
//     "Color": "WHite",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a striped fabrication for a suave boardroom appeal."  ,
//     "id": "22"
//    },

//    {
//     "title": "CODE Men Checked Full Sleeves Slim Fit Formal Shirt",
//     "price": 719,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Yellow-Yellow-1000012168125_06-2100.jpg"
//   ],
//     "discount": 10.01,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "Yellow",
//     "discription": "Tailored for the ultimate comfort, this formal shirt is designed with full sleeves, a spread collar, a full button placket, a patch pocket, and a curved hemline."  ,
//     "id": "23"
//    },

//    {
//     "title": "CODE Men Checked Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Blue-Blue-1000011535928_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "CODE",
//     "Size": "XL",
//     "Color": "White",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a checked fabrication for a suave boardroom appeal."  ,
//     "id": "24"
//    },

//    {
//     "title": "PARK AVENUE Men Printed Full Sleeves Slim Fit Formal Shirt",
//     "price": 1439,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747609-Red-Maroon-1000011747609_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "PARK AVENUE",
//     "Size": "XXL",
//     "Color": "Mahroon",
//     "discription": "Amp up your workwear with this printed formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "25"
//    },
   
   
//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1019,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Blue-Teal-1000011554887_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "CODE",
//     "Size": "XXL",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "26"
//    },
//    {
//     "title": "CODE Men Striped Slim Fit Formal Shirt",
//     "price": 1019,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011833615-Pink-Pink-1000011833615_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "CODE",
//     "Size": "XXL",
//     "Color": "Pink",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a striped fabrication for a suave boardroom appeal."  ,
//     "id": "27"
//    },

//    {
//     "title": "CODE Men Printed Slim Fit Full Sleeves Formal Shirt",
//     "price": 899,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011514707-White-White-1000011514707_06-2100.jpg"
//   ],
//     "discount": 40.03,
//     "brand": "CODE",
//     "Size": "XXL",
//     "Color": "White",
//     "discription": "Amp up your workwear with this printed formal shirt which has a mandarin collar, long sleeves with button cuffs, a button placket, and a curved hemline."  ,
//     "id": "28"
//    },

//    {
//     "title": "CODE Men Printed Slim Fit Formal Shirt",
//     "price": 1139,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Purple-Lilac-1000011992090_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "CODE",
//     "Size": "XXL",
//     "Color": "White",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a printed fabrication for a suave boardroom appeal."  ,
//     "id": "29"
//    },

//    {
//     "title": "PARK AVENUE Men Striped Slim Fit Formal Shirt",
//     "price": 1259,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747357-Blue-Blue-1000011747357_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747357-Blue-Blue-1000011747357_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747357-Blue-Blue-1000011747357_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747357-Blue-Blue-1000011747357_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011747357-Blue-Blue-1000011747357_05-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "PARK AVENUE",
//     "Size": "XXL",
//     "Color": "Blue",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a striped fabrication for a suave boardroom appeal."  ,
//     "id": "30"
//    },

//    {
//     "title": "CODE Men Checked Slim Fit Formal Shirt",
//     "price": 849,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011535928-Pink-Pink-1000011535928_06-2100.jpg"
//   ],
//     "discount": 50.03,
//     "brand": "Code",
//     "Size": "XXL",
//     "Color": "Pink",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a checked fabrication for a suave boardroom appeal."  ,
//     "id": "31"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1019,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011554887-Purple-Purple-1000011554887_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "Code",
//     "Size": "XXL",
//     "Color": "Purple",
//     "discription": "It's time to blend style and elegance into your formal attire with this solid shirt. It flaunts a band collar, full sleeves with button cuffs, and a button placket. Team it up with a pair of formal trousers and shoes for a complete look"  ,
//     "id": "32"
//    },

//    {
//     "title": "CODE Men Printed Slim Fit Formal Shirt",
//     "price": 1139,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992090-Green-Pista-1000011992090_06-2100.jpg"
//   ],
//     "discount": 40.02,
//     "brand": "Code",
//     "Size": "XXL",
//     "Color": "Green",
//     "discription": "Styled in a snug fit with a slim silhouette, this formal shirt features a spread collar with cuffs on full sleeves, a patch pocket, and a curved hemline on a printed fabrication for a suave boardroom appeal."  ,
//     "id": "33"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Regular Fit Formal Shirt",
//     "price": 1049,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577242-White-White-1000011577242_06-2100.jpg"
//   ],
//     "discount": 30.02,
//     "brand": "Code",
//     "Size": "XXL",
//     "Color": "White",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "34"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1444,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905066-White-White-1000011905066_06-2100.jpg"
//   ],
//     "discount": 15.01,
//     "brand": "Code",
//     "Size": "L",
//     "Color": "White",
//     "discription": "It's time to blend style and elegance into your formal attire with this solid shirt. It flaunts a spread collar, full sleeves with button cuffs, and a button placket. Team it up with a pair of formal trousers and slip-on shoes for a complete look."  ,
//     "id": "35"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1444,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905044-Black-Black-1000011905044_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905044-Black-Black-1000011905044_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905044-Black-Black-1000011905044_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905044-Black-Black-1000011905044_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905044-Black-Black-1000011905044_05-2100.jpg"
    
//   ],
//     "discount": 15.01,
//     "brand": "Code",
//     "Size": "L",
//     "Color": "Black",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, a button placket, and a patch pocket."  ,
//     "id": "36"
//    },

//    {
//     "title": "CODE Men Solid Full Sleeves Slim Fit Formal Shirt",
//     "price": 1444,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011905055-Blue-Navy-1000011905055_06-2100.jpg"
    
//   ],
//     "discount": 15.01,
//     "brand": "Code",
//     "Size": "M",
//     "Color": "Blue",
//     "discription": "Amp up your workwear with this solid formal shirt which has a spread collar, long sleeves with button cuffs, and a button placket."  ,
//     "id": "37"
//    },

//    {
//     "title": "CODE Men Checked Full Sleeves Slim Fit Formal Shirt",
//     "price": 719,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168125-Blue-Navy-1000012168125_06-2100.jpg"
    
//   ],
//     "discount": 10.01,
//     "brand": "Code",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "Tailored for the ultimate comfort, this formal shirt is designed with full sleeves, a spread collar, a full button placket, a patch pocket, and a curved hemline."  ,
//     "id": "38"
//    },

//    {
//     "title": "CODE Men Checked Slim Fit Formal Shirt",
//     "price": 899,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-White-White-1000012168003_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-White-White-1000012168003_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-White-White-1000012168003_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-White-White-1000012168003_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-White-White-1000012168003_06-2100.jpg"
//   ],
//     "discount": 10.01,
//     "brand": "Code",
//     "Size": "XL",
//     "Color": "White",
//     "discription": "With its spread collar, long sleeves with button cuffs, button placket, and patch pocket, this checked shirt will spruce up your formal attire."  ,
//     "id": "39"
//    },

//    {
//     "title": "CODE Men Checked Slim Fit Formal Shirt",
//     "price": 899,
//     "image": ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_01-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_02-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_03-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_04-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_05-2100.jpg",
//     "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012168003-Blue-Blue-1000012168003_06-2100.jpg"
    
//   ],
//     "discount": 10.01,
//     "brand": "Code",
//     "Size": "XL",
//     "Color": "Blue",
//     "discription": "With its spread collar, long sleeves with button cuffs, button placket, and patch pocket, this checked shirt will spruce up your formal attire."  ,
//     "id": "40"
//    }
   
   

   
// ]



  return (
    <div className="App">     
     <Navbar />
     {/* <Main /> */}
     <Allroutes />
     <LargeWithNewsletter /> 
    </div>
  );
}

export default App;
