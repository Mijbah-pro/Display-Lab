"use client";

import { useRouter } from "next/navigation";

function Button({btnName, route, className}) {
    const router = useRouter()

    const handleClick = () => {
        router.push(route)
    }

    return ( 
        
        <button className={`button cursor-pointer ${className}`}
        onClick={handleClick}>
            {btnName}
        </button>
        
     );
}

export default Button;