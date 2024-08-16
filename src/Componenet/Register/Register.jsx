import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";

const Register = () => {

    const [restriction, setrestriction] = useState('')
    const [showpassword, setshowpassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, updateuserprofile } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const go = location?.state || '/';


    const onSubmit = (data) => {
        const { email, password, name, photo } = data; 
        console.log(email, password, name, photo)
        setrestriction('')
        if (password.length < 6) {
            setrestriction('At least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setrestriction('At least 1 uppercase letter');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setrestriction('At least 1 lowercase letter');
            return;
        }


        signup(email, password)
            .then(() => {
                // toast("Success register!");
                updateuserprofile(name, photo)
                    .then(() => {
                        navigate(go)
                        Swal.fire({
                            position: "middle-center",
                            icon: "success",
                            title: "Register Successfully.",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // data.target.reset();
                        // form.reset();
                    });

            });
    }

    return (
        <div className="mb-10 mx-2 md:mx-0">
            <div className="hero min-h-screen ">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="text-center mb-3">
                            <h1 className="text-3xl font-medium">Create an account</h1>
                            <p className="text-sm">Or, <span className="text-[#2563eb]"><Link to='/login'>log in to your account</Link> </span></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="url" name="photourl" placeholder="Photo Url" className="input input-bordered" {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>
                        <div className=" ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? "text" : "Password"} name="password" placeholder="password" className="input input-bordered"  {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                                <h1 className="" onClick={() => setshowpassword(!showpassword)}>
                                    {
                                        showpassword ? <FaEyeSlash className="relative left-64 md:left-96 bottom-8" /> : <FaEye className="relative left-64 md:left-96 bottom-8" />
                                    }
                                </h1>
                                <div>
                                    {
                                        restriction && <p className='text-red-600 text-sm'>{restriction}</p>
                                    }
                                </div>
                                <div className="text-sm ml-6 mt-2 text-[#00000096]">
                                    <p>At least 6 characters</p>
                                    <p>At least 1 lowercase letter and 1 uppercase letter</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-[#34ffdd] hover:text-[#FFFFFF] hover:bg-[#34ffdd] hover:border-[#34ffdd] text-lg">Register</button>
                            {/* <ToastContainer /> */}
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            </div>
                        </div>
                    </form>
                    <div className="">
                        {/* <Sociallogin></Sociallogin> */}
                    </div>
                    <div>
                        <p className="text-sm mt-2 text-center mb-5">By registering, I accept Prakritik Shongis <span className="label-text-alt link link-hover text-[#60a5fa]">terms of use</span>.</p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;