import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct/ShowProduct";


const AllProduct = () => {
    const [allproduct, setallproduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setallproduct(data)
            });
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
                {
                    allproduct.map(product => <ShowProduct product={product} key={product._id}></ShowProduct>)
                }
            </div>
        </>
    );
};

export default AllProduct;