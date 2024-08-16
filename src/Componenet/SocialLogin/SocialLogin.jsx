import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";

const SocialLogin = () => {

    const { googlelogin, githublogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogin = socialProvider =>{
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(from)
            }
        })
        .catch((error) => {
            console.error(error)
        });
    }

    return (
        <div className="flex gap-6 items-center justify-center">
                <button onClick={() => handlesociallogin(googlelogin)} className="bg-transparent text-lg"><FcGoogle className="text-2xl" /></button>
                <button onClick={() => handlesociallogin(githublogin)} className="bg-transparent text-lg my-3"><ImGithub className="text-2xl" /></button>
                <button className="bg-transparent text-lg"><FaFacebook className="text-2xl text-[#2563eb]" /></button>
            </div>
    );
};

export default SocialLogin;