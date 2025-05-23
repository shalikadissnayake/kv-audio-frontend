import { Link } from "react-router-dom";
export default function ProductCard({ item }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-64 flex flex-col items-center relative">
            <img 
                src={item.image[0]} 
                alt={item.name} 
                className="w-32 h-32 object-cover rounded-full" 
            />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="text-green-600 font-semibold mt-1">{item.price.toFixed(2)}</p>
            <p className="text-black-800 text-xm">Dimensions: {item.dimentions}</p>
            <span className={`text-sm font-medium mt-2 ${item.availability ? 'text-green-600' : 'text-red-600'}`}>
    {item.availability ? "In Stock" : "Out of Stock"}
</span>

<Link  to={"/product/"+item.key} className="text-center w-[90%] h-[40px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 absolute mx-auto  bottom-3">
          View Details
        </Link>
        </div>
    );
}
