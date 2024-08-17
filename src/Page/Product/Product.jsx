import { Helmet } from "react-helmet-async";
import AllProduct from "../../Componenet/AllProduct";
import 'react-tabs/style/react-tabs.css';

const Product = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
            <Helmet>
                <title>Product Showcase | Product</title>
            </Helmet>
            <div>
                <AllProduct></AllProduct>
            </div>
        </div>
    );
};

export default Product;