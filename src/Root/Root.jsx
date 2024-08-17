import { Outlet } from "react-router-dom";
import Navbar from "../Componenet/Navbar/Navbar";
import Footer from "../Componenet/Footer/Footer";


const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
        </>
    );
};

export default Root;