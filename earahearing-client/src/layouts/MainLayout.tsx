// import React from "react"
import { Outlet } from "react-router-dom"
import { Logo } from "../components/logo/Logo"


const MainLayout = () => {
    return <div>
        <header className="container header">
            <Logo logoType="dark"/>
        </header>
        <Outlet/>
    </div>
}

export default MainLayout