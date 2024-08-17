import { MdOutlinePhoneIphone, MdOutlineMailOutline, MdOutlineCopyright } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <div className="w-11/12 mx-auto p-6">
                <div className="mt-10 lg:grid lg:grid-cols-9 gap-9">
                    <div className="mb-8 lg:col-span-3 md:pt-20 text-center">
                        <h1 className="text-[#FFFFFF] text-4xl md:text-5xl font-bold mb-5">Product Showcase</h1>
                    </div>
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">CONTACT US </h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex items-center gap-1 text-lg">
                            <MdOutlinePhoneIphone className="text-[#b19777] text-xl"></MdOutlinePhoneIphone>
                            <h2 className="text-[#888] items-center flex"><GoPlus></GoPlus>880 1819 548214</h2>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <FaPhoneAlt className="text-[#b19777]"></FaPhoneAlt>
                            <h2 className="text-[#888] items-center flex text-lg"><GoPlus></GoPlus>031 548 214</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <MdOutlineMailOutline className="text-[#b19777] text-lg"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">Product@gmail.com</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <MdOutlineMailOutline className="text-[#b19777] text-lg"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">ProductShowcase@gmail.com</h2>
                        </div>
                    </div>
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">VISIT</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <p className="text-[#888] text-lg">235/2 Soner Bangla Tower,</p>
                        <p className="text-[#888] text-lg my-5">Kazi Road,</p><p className="text-[#888] text-lg">Dhaka-1206,</p><p className="text-[#888] text-lg mt-5">Bangladesh .</p>
                    </div>
                    <div className="lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">FOLLOW US</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex gap-5 justify-center">
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <FaFacebookF className="text-[#FFFFFF]"></FaFacebookF>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <FaInstagram className="text-[#FFFFFF]"></FaInstagram>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <FaLinkedinIn className="text-[#FFFFFF]"></FaLinkedinIn>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <FaTwitter className="text-[#FFFFFF]"></FaTwitter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <hr className="border-[#888]" />
                    <div className="lg:flex justify-center gap-1 p-6">
                        <p className="flex items-center gap-1 text-[#bece8861] justify-center">Copyright <MdOutlineCopyright></MdOutlineCopyright> 2024 Product Showcase.</p>
                        <p className="text-[#bece8861] text-center">All Rights Reserved. Made by Shahriyar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;