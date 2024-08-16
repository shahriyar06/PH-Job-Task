import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";

const Login = () => {

    const [showpassword, setshowpassword] = useState(false);
    const [restriction, setrestriction] = useState('')
    const { signin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const onSubmit = (data) => {
        setrestriction('')
        signin(data.email, data.password)
            .then(result => {
                if (result.user) {
                    navigate(from)
                    Swal.fire({
                        position: "middle-center",
                        icon: "success",
                        title: "Login Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                setrestriction('Invalid email or password')
                console.error(error)
            });

    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="text-center mb-3">
                            <h1 className="lg:text-3xl text-xl font-medium">Log in to your account</h1>
                            <p className="text-sm">Or, <span className="text-[#2563eb]"><Link to='/register'>create an account</Link> </span></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? "text" : "Password"} name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            <h1 className="" onClick={() => setshowpassword(!showpassword)}>
                                {
                                    showpassword ? <FaEyeSlash className="relative left-64 md:left-96 bottom-8" /> : <FaEye className="relative md:left-96 left-64 bottom-8" />
                                }
                            </h1>
                            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                            <div>
                                {
                                    restriction && <p className='text-red-600 text-sm'>{restriction}</p>
                                }
                            </div>
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-[#60a5fa]">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-[#34ffdd] hover:text-[#FFFFFF] hover:bg-[#34ffdd] hover:border-[#34ffdd] text-lg">Login</button>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            </div>
                        </div>
                    </form>
                    <div className="mx-8 mb-5">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;