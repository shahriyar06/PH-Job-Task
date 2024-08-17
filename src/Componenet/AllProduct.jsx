import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct/ShowProduct";
import { IoSearch } from "react-icons/io5";


const AllProduct = () => {
    const [allproduct, setallproduct] = useState([])
    const [filterBrand, setfilterBrand] = useState("");
    const [filterCategory, setfilterCategory] = useState("");


    useEffect(() => {
        fetch(`http://localhost:5000/products?Brand_Name=${filterBrand}&Category_Name=${filterCategory}`)
            .then(res => res.json())
            .then(data => {
                setallproduct(data)
            });
    }, [filterBrand, filterCategory])

    const handlebrandName = (e) => {
        setfilterBrand(e.target.value);
    }
    const handleCategory = (e) => {

        setfilterCategory(e.target.value);
        
    }

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                <div>
                    <select type="dropdown" name='brand' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]" onChange={handlebrandName}>
                        <option value="">Brand</option>
                        <option>ArtEco</option>
                        <option>ColorPro</option>
                        <option>CanvasMaster</option>
                        <option>TechArt</option>
                        <option>CraftyGoods</option>
                        <option>ArtisanCraft</option>
                        <option>CreativeHub</option>
                    </select>
                </div>
                <div>
                    <select type="dropdown" name='category' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]" onChange={handleCategory}>
                        <option value="">Category</option>
                        <option>Painting and Drawing</option>
                        <option>Sculpture and Modeling</option>
                        <option>Textile Arts</option>
                        <option>Paper Crafts & Glass Art</option>
                        <option>Ceramics and Pottery</option>
                        <option>Jute & Wooden Crafts</option>
                    </select>
                </div>
                <div>
                    <select type="dropdown" name='jobcategory' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]">
                        <option value="0-200">0-200 $</option>
                        <option value="0-50">0-50 $</option>
                        <option value="51-100">51-100 $</option>
                        <option value="101-150">101-150 $</option>
                        <option value="151-200">151-200 $</option>
                    </select>
                </div>
                <div>
                    <select type="dropdown" name='jobcategory' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]">
                        <option value="">Sorting</option>
                        <option value="Low to High">Low to High</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Newest first">Newest first</option>
                    </select>
                </div>
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