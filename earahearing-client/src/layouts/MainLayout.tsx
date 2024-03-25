
import { Outlet } from "react-router-dom"
import Nav from "../components/navigation/NavigationMin"
// import { Logo } from "../components/logo/Logo"

const MainLayout = () => {
    return <div>
        <header className="header">
            <Nav/>
        </header>
        <Outlet/>
    </div>
}

export default MainLayout