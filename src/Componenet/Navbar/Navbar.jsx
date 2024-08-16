// import { useContext } from "react";
import {NavLink} from "react-router-dom";
// import {  Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
// import { BsPerson } from "react-icons/bs";


const Navbar = () => {

    // const { signout, user } = useContext(AuthContext);
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location?.state || '/'

    // const handlesociallogout = logoutProvider => {
    //     logoutProvider()
    //         .then(result => {
    //             // toast("Success register!");
    //             if (result.user) {
    //                 navigate(from)
    //             }
    //         })
    // }

    const Navbar = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>Home</NavLink></li>
        <li><NavLink to='/product' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>Product</NavLink></li>
        {/* {
            user && <><li><NavLink to='/myjobs' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>My Jobs</NavLink></li>
            <li><NavLink to='/appliedjob' className={({ isActive }) => isActive ? "border-[#34ffdd] border text-[#34ffdd]" : "text-[#131313]"}>Applied Job</NavLink></li> </>
        } */}
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
                    <div className="ml-6">
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                className="theme-controller"
                                value="dark"
                            />

                            {/* sun icon */}
                            <svg
                                className="swap-off fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                    {/* {
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
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;