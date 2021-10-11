import  {useState, createContext} from 'react';


export const ContextAPI = createContext();




export function DataContext({children}) {


    const [user, setUser] = useState(window.localStorage.getItem("username"))
    const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("loggedIn"));
    const [userId, setUserId] = useState(window.localStorage.getItem("userID"))

    const [search, setSearch] = useState("")

    const handleLogin = (booleanState, token, userId, user) => {

        if(booleanState){
            setLoggedIn(true)
            setUser(user)
            setUserId(userId)
            window.localStorage.setItem("loggedIn","loggedIn");
            window.localStorage.setItem("token",token)
            window.localStorage.setItem("userID", userId)
            window.localStorage.setItem("username", user)
        } else {
            setLoggedIn(false)
            setUser(null)
            setUserId(null)
            window.localStorage.removeItem("loggedIn");
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("userID");
            window.localStorage.removeItem("username")
            window.localStorage.setItem("cookiesAccepted", false)


        }
    }
    



    return (
       

        <ContextAPI.Provider value={{ loggedIn, handleLogin,
            user, userId, search, setSearch

        }}>

            {children}
        </ContextAPI.Provider>

    )
}





