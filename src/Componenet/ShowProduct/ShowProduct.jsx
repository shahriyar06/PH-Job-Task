import { IoStarHalfSharp } from "react-icons/io5";

const ShowProduct = ({product}) => { 

    return (
        <div className="">
            <div className="bg-[#efeae3] rounded-3xl w-full">
                <div className="card card-side flex flex-col md:flex-row">
                    <figure className="md:pl-3 p-3"><img src={product.Product_Image} className="rounded-3xl  h-56 md:w-72" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">{product.Product_Name}</h2>
                        <h2 className="text-lg font-medium">{product.Description}</h2>
                        <h1 className="text-lg">Price : {product.Price} $</h1>
                        <div className="flex justify-between text-lg">
                            <h1>{product.Category_Name}</h1>
                            <h2 className="flex items-center gap-1">{product.Ratings} <IoStarHalfSharp className="text-[#d3a873] text-xl" /></h2>
                        </div>
                        <div className="flex justify-between text-lg">
                            <h1>{product.Brand_Name}</h1>
                            <h2 className="flex items-center gap-1">{product.Product_Creation_date}</h2>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700" >View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;