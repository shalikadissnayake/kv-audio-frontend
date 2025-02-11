import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>404 Error:Page not found
        <Link className="bg-[#efac38] p-1 m-5" to="/">Go back to Home page</Link>
        </div>
    )
}