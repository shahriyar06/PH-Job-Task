import { useContext } from "react";
import {  Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";


const Navbar = () => {

    const { signout, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogout = logoutProvider => {
        logoutProvider()
            .then(result => {
                // toast("Success register!");
                if (result.user) {
                    navigate(from)
                }
            })
    }

    const Navbar = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>Home</NavLink></li>
        <li><NavLink to='/product' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>Product</NavLink></li>
    </>
    return (
        <div className="lg:w-11/12 mx-auto mt-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start relative">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                            {Navbar}
                        </ul>
                    </div>
                    <a className="lg:text-5xl text-lg font-extrabold text-[#ad9773]">Job Task</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {Navbar}
                    </ul>
                </div>
                <div className="navbar-end flex item-center">
                    {
                        user ?
                            <div className=" relative">
                                <details className="dropdown dropdown-end">
                                    <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                        <div className="w-10 rounded-full tooltip" data-tip={user.displayName}>
                                            <img className="w-10 h-10 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        </div>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32  md:text-lg absolute z-10">
                                        <li className="hover:text-[#34ffdd]"><Link to={'/profile'}>Profile</Link></li>
                                        <li className="hover:text-[#34ffdd]" onClick={() => handlesociallogout(signout)}><Link>Logout</Link></li>
                                    </ul>
                                </details>
                                
                            </div>
                            :
                            <div className="relative">
                                <details className="dropdown">
                                    <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                        <div className="p-2 bg-[#34ffdd] border-2 rounded-full tooltip" data-tip="Login">
                                            <BsPerson className="text-3xl text-[#FFFFFF]" />
                                        </div>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32 lg:text-lg absolute z-10">
                                        <li><Link to='/login' className=" hover:text-[#34ffdd]">Log In</Link></li>
                                        <li><Link to='/register' className="hover:text-[#34ffdd]">Register</Link></li>
                                    </ul>
                                </details>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;