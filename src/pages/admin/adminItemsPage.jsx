const sampleArr = [
    {
      key: "P001",
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation.",
      dimensions: "15x10x5 cm",
      category: "audio",
      availability: true,
      image: ["https://example.com/headphones.jpg"],
    },
    {
      key: "P002",
      name: "Smart LED Bulb",
      price: 29.99,
      description: "Wi-Fi enabled smart LED bulb with adjustable brightness.",
      dimensions: "6x6x12 cm",
      category: "light",
      availability: true,
      image: ["https://example.com/smart-bulb.jpg"],
    },
    {
      key: "P003",
      name: "Bluetooth Speaker",
      price: 49.99,
      description: "Portable Bluetooth speaker with deep bass and waterproof design.",
      dimensions: "10x10x5 cm",
      category: "audio",
      availability: true,
      image: ["https://example.com/speaker.jpg"],
    },
    {
      key: "P004",
      name: "Gaming Mouse",
      price: 39.99,
      description: "Ergonomic gaming mouse with RGB lighting and programmable buttons.",
      dimensions: "12x7x4 cm",
      category: "accessories",
      availability: true,
      image: ["https://example.com/gaming-mouse.jpg"],
    },
    {
      key: "P005",
      name: "4K Action Camera",
      price: 199.99,
      description: "Waterproof 4K action camera with image stabilization.",
      dimensions: "7x5x3 cm",
      category: "camera",
      availability: false,
      image: ["https://example.com/action-camera.jpg"],
    }
  ];
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){
    const[items, setItems]= useState(sampleArr)
    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                   <th> Key</th>
                   <th> Name</th>
                   <th>Price</th>
                   <th>Category</th>
                   <th>Dimentions</th>
                   <th>Description</th>
                   <th>Availability</th>
                </thead>
                <tbody>
                    {
                        items.map((product)=>{
                            console.log(product)
                            return(
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability ? "Available":"Not Available"}</td>
                                </tr>
                            )

                        })
                    }
               
                </tbody>
            </table>
            <Link to="/admin/items/add">
            <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 cursor-pointer"/>
            </Link>
        </div>
    )
}