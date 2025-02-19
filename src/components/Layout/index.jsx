import { Outlet } from "react-router-dom"
import Footer from "../Footer2/Footer"
import Header from "../Header/Header"
import Crud from "../CRUDD/Crud"
import Acordion from "../Acordion/Acordion"


const index = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Acordion />
            <Crud />
            <Footer />

        </>
    )
}

export default index