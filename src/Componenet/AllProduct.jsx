import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct/ShowProduct";
import { IoSearch } from "react-icons/io5";


const AllProduct = () => {
    const [allproduct, setallproduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setallproduct(data)
            });
    }, [])

    const [searchQuery, setSearchQuery] = useState(""); 

    const filteredProduct = allproduct.filter(product => {
        return product.Product_Name.toLowerCase().includes(searchQuery.toLowerCase()) 
    });

    return (
        <>
            <div className='lg:w-6/12 w-4/5 mx-auto mt-10'>
                <label className="input rounded-full flex items-center gap-2 pl-5 h-14 border border-black">
                    <input type="text" className="grow rounded-full text-lg" placeholder="Search here by product name...." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
                {
                    filteredProduct.map(product => <ShowProduct product={product} key={product._id}></ShowProduct>)
                }
            </div>
        </>
    );
};

export default AllProduct;