import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";



export default function AdminItemsPage() {
  const [items, setItems] = useState([]);
  const[itemsLoaded, setItemsLoaded]=useState(false);
  const navigate= useNavigate()

  useEffect(() => {
    if(!itemsLoaded){

    const token = localStorage.getItem("token");
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        setItemsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      }

    )

    }
  }, [itemsLoaded]);

  // Function to delete an item
  const handleDelete = (key) => {
    setItems(items.filter((item) => item.key !== key));
    const token= localStorage.getItem("token");
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`,{
        headers:{Authorization:`Bearer ${token}`},
    }).then(
        (res)=>{
            console.log(res.data);
            setItemsLoaded(false);

              }
).catch(
    (err)=>{
        console.error(err);

        }
    )
  };

  return (
    <div className="w-full h-full p-4 flex items-center flex-col">
      {!itemsLoaded &&<div className="border-4 my-4 border-b-green-500 rounded-full animate-spin bg-0 w-[100px] h-[100px]"></div>}
      {itemsLoaded &&<div className="overflow-x-auto">
        <table className="w-full max-w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-800 text-white text-left">
              <th className="p-3">Key</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price ($)</th>
              <th className="p-3">Category</th>
              <th className="p-3">Dimensions</th>
              <th className="p-3">Availability</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr
                key={product.key}
                className="border-b hover:bg-gray-100 text-blue-800  transition duration-200"
              >
                <td className="p-3 ">{product.key}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">${product.price.toFixed(2)}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.dimensions}</td>
                <td
                  className={`p-3 font-semibold ${
                    product.availability ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.availability ? "Available" : "Not Available"}
                </td>
                <td className="p-3 flex justify-center space-x-4">
                  <button 
                  onClick={()=>{
                    navigate(`/admin/items/edit`,{state:product})
                  }}
                     className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition duration-200" >
                     <FiEdit className="inline mr-1 text-lg" />
                   </button> 
                    
                  <button onClick={() => handleDelete(product.key)}>
                    <FiTrash2 className="text-red-500 text-xl cursor-pointer hover:text-red-700 transition duration-200" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] absolute right-4 bottom-4 text-gray-700 hover:text-red-900 cursor-pointer transition duration-200" />
      </Link>
    </div>
  );
}
