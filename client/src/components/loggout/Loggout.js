import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ContextAPI } from '../../store/context';


export default function Logout() {

    const { handleLogin } = useContext(ContextAPI);

    handleLogin(false);
    
    return <Redirect to={{ pathname: "/" }} />;
}