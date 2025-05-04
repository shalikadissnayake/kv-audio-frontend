import React from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "/public/speaker1.jpg",
    title: "Buffle Bass",
  },
  {
    src: "/public/speaker2.jpg",
    title: "EchoSphere",
  },
  {
    src: "/public/bluetooth speaker.jpeg",
    title: "Speaker Pro",
  },
  {
    src: "/public/headphone.jpeg",
    title: "Headphone",
  },
  {
    src: "/public/aud.jpeg",
    title: "MIC",
  },
  {
    src: "/public/st mic.jpeg",
    title: "MIC X",
  },
];

export default function Gallery() {
    const navigate = useNavigate();
    const handleClick = (item) => {
        // Navigate to a dynamic route like `/items/1`
        navigate(`/items`);}
  return (
    <div className="bg-gradient-to-br from-blue-500 to-black text-white min-h-screen px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Product Gallery</h1>
        <p className="text-gray-300 text-lg">Discover our top audio gear in high resolution.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     
        {images.map((item, index) => (
             
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}
