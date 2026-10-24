import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import  Card from "./components/Card.jsx"
import  Event from "./components/Event.jsx"
import Props from './components/props.jsx';
import "./components/Card.css"

const Api = [{
    "id": 1,
    "title": "Majestic Mountain Graphic T-Shirt",
    "slug": "majestic-mountain-graphic-t-shirt",
    "price": 44,
    "description": "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-10-17T16:01:59.000Z",
      "updatedAt": "2026-10-17T16:01:59.000Z"
    },
    "images": [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg"
    ],
    "creationAt": "2026-10-17T16:01:59.000Z",
    "updatedAt": "2026-10-17T16:01:59.000Z"
  },
  {
    "id": 2,
    "title": "Classic Red Pullover Hoodie",
    "slug": "classic-red-pullover-hoodie",
    "price": 10,
    "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-10-17T16:01:59.000Z",
      "updatedAt": "2026-10-17T16:01:59.000Z"
    },
    "images": [
      "https://i.imgur.com/1twoaDy.jpeg",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg"
    ],
    "creationAt": "2026-10-17T16:01:59.000Z",
    "updatedAt": "2026-10-17T16:01:59.000Z"
  },
  {
    "id": 3,
    "title": "Classic Heather Gray Hoodie",
    "slug": "classic-heather-gray-hoodie",
    "price": 69,
    "description": "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-10-17T16:01:59.000Z",
      "updatedAt": "2026-10-17T16:01:59.000Z"
    },
    "images": [
      "https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ],
    "creationAt": "2026-10-17T16:01:59.000Z",
    "updatedAt": "2026-10-17T16:01:59.000Z"
  },
  {
    "id": 4,
    "title": "Classic Grey Hooded Sweatshirt",
    "slug": "classic-grey-hooded-sweatshirt",
    "price": 90,
    "description": "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-10-17T16:01:59.000Z",
      "updatedAt": "2026-10-17T16:01:59.000Z"
    },
    "images": [
      "https://i.imgur.com/R2PN9Wq.jpeg",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg"
    ],
    "creationAt": "2026-10-17T16:01:59.000Z",
    "updatedAt": "2026-10-17T16:01:59.000Z"
  }];

export const App = () => {
return(
<div className='parent'>
 {/* {
    Api.map(({id,title,description,price,images})=>{
  return <Card  key={id} id={id} tittle={title} des={description} prise={price } img={images[0]} />
  })
 } */}

 <Event />
 <Props  name={"name"} f_name={"sohail"}/>
</div>
)
}


export default App
