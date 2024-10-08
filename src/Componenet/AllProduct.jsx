import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct/ShowProduct";
import { IoSearch } from "react-icons/io5";


const AllProduct = () => {
    const [allproduct, setallproduct] = useState([])
    const [filterBrand, setfilterBrand] = useState("");
    const [Pricerange, setPricerange] = useState("");
    const [filterCategory, setfilterCategory] = useState("");
    const [Sorting, setSorting] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);


    useEffect(() => {
        fetch(`https://job-task-server-drab.vercel.app/products?Brand_Name=${filterBrand}&Category_Name=${filterCategory}&sorting=${Sorting}&Price=${Pricerange}&page=${currentPage}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setallproduct(data.products);
                setTotalProducts(data.totalProducts);
                setTotalPages(data.totalPages);
            });
    }, [filterBrand, filterCategory, Pricerange, currentPage, Sorting])

    const handlebrandName = (e) => {
        setfilterBrand(e.target.value);
        setCurrentPage(1);
    }
    const handleCategory = (e) => {

        setfilterCategory(e.target.value);
        setCurrentPage(1);
        
    }
    const handlepricerange = (e) => {

        setPricerange(e.target.value);
        setCurrentPage(1);

    }
    const handlesroting = (e) => {

        setSorting(e.target.value);
        setCurrentPage(1);

    }

    const [searchQuery, setSearchQuery] = useState("");

    const filteredProduct = allproduct.filter(product => {
        return product.Product_Name.toLowerCase().includes(searchQuery.toLowerCase())
    });

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

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
                    <select type="dropdown" name='Pricerange' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]" onChange={handlepricerange}>
                        <option value="">0-200 </option>
                        <option>0-50 </option>
                        <option>51-100</option>
                        <option>101-150 </option>
                        <option>151-200 </option>
                    </select>
                </div>
                <div>
                    <select type="dropdown" name='jobcategory' className="px-3 w-full rounded-lg h-12 border-2 border-[#2d2c2ca7] bg-transparent placeholder-[#080808]" onChange={handlesroting}>
                        <option value="">Sorting</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                        <option>Newest first</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
                {
                    filteredProduct.map(product => <ShowProduct product={product} key={product._id}></ShowProduct>)
                }
            </div>
            <div className="flex justify-center mt-6 items-center text-lg my-4">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1} className="btn btn-accent text-lg text-white ">Previous</button>
                <span className="mx-4 text-blue-500">Page {currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages} className="btn btn-accent text-lg text-white ">Next</button>
            </div>
        </>
    );
};

export default AllProduct;