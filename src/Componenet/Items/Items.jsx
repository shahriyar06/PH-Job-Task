import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Items = () => {

    const [item, setitem] = useState([]);
    const [showcraft, setshowcraft] = useState(false);

    useEffect(() => {
        fetch('https://job-task-server-drab.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setitem(data)
                setshowcraft(data.length > 8);
            });
    }
        , [])


    const displaytitem = item.slice(0, 6)

    return (
        <div className="mb-11">
            <div className="mb-5">
                <h1 className="text-center text-3xl md:text-5xl font-bold">Product Corner</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    displaytitem.map(product => <ShowProduct product={product} key={product._id}></ShowProduct>)
                }
            </div>
            <div className="text-center mt-6">
                {showcraft && (
                    <button className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700">
                        <Link to='/product'>See All Crafts</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Items;