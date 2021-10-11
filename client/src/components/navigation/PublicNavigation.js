import { Link } from "react-router-dom";

export default function PublicNavigation() {

    return (
        <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Sign up</Link>
        </>
    );
    
}