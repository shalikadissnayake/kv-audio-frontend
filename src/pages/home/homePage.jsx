import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Home from "./home";
import Items from "./items";
import Contact from "./contact";
import ErrorNotFound from "./error";
import Gallery from "./gallery";

export default function HomePage(){
    return(
        <>
        <Header/>
        <div className="h-[calc(100vh-100px)]  w-full ">
        <Routes path="/*">
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/item" element={<Items/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path="/*" element={<ErrorNotFound/>}/>
        </Routes>
        </div>
        </>
    )
}