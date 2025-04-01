import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function AddItemPage() {
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimensions, setProductDimensions] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImages, setProductImages]= useState([]);
    const navigate = useNavigate()

    async function handleAddItem(){
        console.log(productImages)

        const promises = []
        for (let i=0;i<productImages.length; i++){
            console.log(productImages[i])
            const promise= mediaUpload(productImages[i])
            promises.push(promise)
        }



        try{
      

            
           
        }catch(err){
            toast.error(err)
        }
        console.log(productKey,productName,productPrice,productCategory,productDescription,productDimensions);
        const token= localStorage.getItem("token")

        if(token){
            try{
        // Promise.all(promises).then((result)=>{

        //     console.log(result)

        // }).catch((err)=>{
        //     toast.error(err)
        // })

            
        const imageUrls = await Promise.all(promises);
        
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`,{
                key : productKey,
                name : productName,
                price : productPrice,
                category: productCategory,
                dimentions: productDimensions,
                description: productDescription,
                image: imageUrls,

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
            <h1 className="text-xl font-bold mb-4">Add Items</h1>
            <div className="w-[400px] border p-4 flex flex-col items-center gap-2">
                <input
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
                <input type="file" multiple onChange={(e)=>{setProductImages(e.target.files)}} className="w-full p-2 border rounded"/>
                <button onClick={handleAddItem} className="w-full bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-500">Add</button>
                <button onClick={()=>{navigate("/admin/items")}} className="w-full bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-600">Cancel</button>
            </div>
        </div>
    );
}
