import { Outlet, useNavigation} from "react-router"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"

export const AppLayout =()=> {

    const navigation = useNavigation()
    if (navigation.state === "loading") {
       return (
        <div className="loaderPage">
        <div className="loader"></div>
    </div>
       )
    }
                 
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}