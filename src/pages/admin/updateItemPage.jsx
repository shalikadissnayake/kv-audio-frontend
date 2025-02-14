import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {
    const location= useLocation()

    console.log(location)
    const [productKey, setProductKey] = useState(location.state.key);
    const [productName, setProductName] = useState(location.state.name);
    const [productPrice, setProductPrice] = useState(location.state.price);
    const [productCategory, setProductCategory] = useState(location.state.category);
    const [productDimensions, setProductDimensions] = useState(location.state.dimentions);
    const [productDescription, setProductDescription] = useState(location.state.description);
    const navigate = useNavigate()


    async function handleAddItem(){
        console.log(productKey,productName,productPrice,productCategory,productDescription,productDimensions);
        const token= localStorage.getItem("token")

        if(token){
            try{
            const result = await axios.put("http://localhost:3000/api/products/"+productKey,{
                
                name : productName,
                price : productPrice,
                category: productCategory,
                dimentions: productDimensions,
                description: productDescription
            },{
                headers : {
                    Authorization:"Bearer " + token,
                },
            }
        );
        toast.success(result.data.message);
        navigate("/admin/items")
        }catch(err){
            
            toast.error(err.response.data.error);
            
        }
            
        }else{
            toast.error("you are not to authorized to perform add this item")
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-xl font-bold mb-4">Update Items</h1>
            <div className="w-[400px] border p-4 flex flex-col items-center gap-2">
                <input
                    disabled
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="border p-2 w-full"
                />
                <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 w-full"
                />
                <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    type="number"
                    placeholder="Product Price"
                    className="border p-2 w-full"
                />
                <select
                    onChange={(e) => setProductCategory(e.target.value)}
                    value={productCategory}
                    className="border p-2 w-full"
                >
                    <option value="audio">Audio</option>
                    <option value="light">Lights</option>
                </select>
                <input
                    onChange={(e) => setProductDimensions(e.target.value)}
                    value={productDimensions}
                    type="text"
                    placeholder="Product Dimensions"
                    className="border p-2 w-full"
                />
                <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    type="text"
                    placeholder="Product Description"
                    className="border p-2 w-full"
                />
                <button onClick={handleAddItem} className="w-full bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-500">Update</button>
                <button onClick={()=>{navigate("/admin/items")}} className="w-full bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-600">Cancel</button>
            </div>
        </div>
    );
}
