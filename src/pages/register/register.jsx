import axios from "axios";
import "./register.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate= useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log({ firstName, lastName, email, password, address, phone });
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
            email:email ,
            firstName: firstName,
            lastName:lastName,
            password:password,
            address:address,
            phone:phone

        }).then((res)=>{
            toast.success("Registration Sucess")
            navigate("/login")

        }).catch((err)=>{
            toast.error(err.response.data.error);
        })
    };

    return (
        <div className="bg-picture h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center p-6">
                    <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button className="my-6 w-[300px] h-[50px] bg-blue-500 text-xl text-white rounded-lg">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
