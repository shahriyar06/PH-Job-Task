import { Outlet } from "react-router-dom";
import Navbar from "../Componenet/Navbar/Navbar";


const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </>
    );
};

export default Root;